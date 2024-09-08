import sys
import os
import traceback
import json
import joblib
import numpy as np


all_values = []
excluded_values =[]

try:
    dir_path = os.path.dirname(os.path.realpath(__file__))

    # Load models with error handling
    try:
        pn_model_path = os.path.join(dir_path, './models/random-forest_sev.sav')
        sev_model_path = os.path.join(dir_path, './models/random-forest_pn.sav')
        load_pn = joblib.load(pn_model_path)
        load_sev = joblib.load(sev_model_path)
    except FileNotFoundError as fnf_error:
        print(f"Model file not found: {fnf_error}")
        sys.exit(1)
    except Exception as e:
        print(f"Error loading model:", traceback.format_exc())
        sys.exit(1)

    # Parse JSON data with error handling
    try:
        json_data = json.loads(sys.argv[1])
    except json.JSONDecodeError as json_error:
        print(f"JSON decoding error: {json_error}")
        sys.exit(1)
    except IndexError as index_error:
        print(f"Command line argument error: {index_error}")
        sys.exit(1)

    # Collect values function
    def collect_values(data):
        exclude_keys = {'Sex', 'hasDiabetes'}  # Keys to exclude from model input

        if isinstance(data, dict):
            for key, value in data.items():
                collect_values(value)  # Recurse to collect all nested values
                if key not in exclude_keys:
                    excluded_values.append(value)  # Only append values not to be excluded
        elif isinstance(data, list):
            for item in data:
                collect_values(item)  # Recurse for list items
        else:
            all_values.append(data)  # Append all scalar values to all_values
            

    # Run prediction with error handling
    try:
        collect_values(json_data)
        # apply_conversion_rules(all_values)
        result = np.array([load_pn.predict([excluded_values]), load_sev.predict([excluded_values])])
        result = result.flatten()
        print(json.dumps(result.tolist()))  # Output the result as a JSON string
    except Exception as prediction_error:
        print(f"Error during prediction: {prediction_error}")
        sys.exit(1)

except Exception as e:
    print(f"General script error: {e}")
    traceback.print_exc()  # This will print the full traceback to stderr
    sys.exit(1)