from setuptools import setup, find_packages

setup(
    name='deployment_package',
    version='1.0',
    packages=find_packages(),
    scripts=['scripts/userInput.py'],
    package_data={'models': ['models/*.pkl']},
    include_package_data=True,
    install_requires=[
        'joblib==1.4.0',
        'numpy==1.26.4',
        'scikit-learn==1.4.2',
        'scipy==1.13.0',
        'threadpoolctl==3.4.0'
    ],
)

from setuptools import setup, find_packages

setup(
    name='deployment_package',
    version='1.0',
    packages=find_packages(),
    package_data={'deployment_package': ['models/*.pkl']},
    include_package_data=True,
    scripts=['scripts/userInput.py'],
    install_requires=[
        'joblib==1.4.0',
        'numpy==1.26.4',
        'scikit-learn==1.4.2',
        'scipy==1.13.0',
        'threadpoolctl==3.4.0'
    ],
)