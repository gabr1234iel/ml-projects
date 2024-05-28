import io
from tkinter import image_types
import torch
import torchvision.transforms as transforms
from PIL import Image
import sys
import os

import torch
import torch.nn as nn
import torch.nn.functional as F

class CNN(nn.Module):
    def __init__(self):
        super(CNN, self).__init__()
        
        # Define the first convolutional layer
        self.conv1 = nn.Conv2d(1, 10, kernel_size=5)
        # Define the second convolutional layer
        self.conv2 = nn.Conv2d(10, 20, kernel_size=5)
        # Define a dropout layer
        self.conv2_drop = nn.Dropout2d()
        # Define the first fully connected (linear) layer
        self.fc1 = nn.Linear(320, 50)
        # Define the second fully connected (linear) layer
        self.fc2 = nn.Linear(50, 10)

    def forward(self, x):
        # Apply the first convolutional layer and a max pooling layer with ReLU activation
        x = F.relu(F.max_pool2d(self.conv1(x), 2))
        # Apply the second convolutional layer, dropout, and a max pooling layer with ReLU activation
        x = F.relu(F.max_pool2d(self.conv2_drop(self.conv2(x)), 2))
        # Flatten the output for the linear layers
        x = x.view(-1, 320)
        # Apply the first linear layer with ReLU activation
        x = F.relu(self.fc1(x))
        # Apply dropout
        x = F.dropout(x, training=self.training)
        # Apply the second linear layer
        x = self.fc2(x)
        # Apply softmax activation
        x = F.log_softmax(x, dim=1)
        return x


def load_model(model_path):
    try:
        model = CNN()
        model.load_state_dict(torch.load(model_path, map_location=torch.device('cpu')))
        model.eval()
        return model
    except Exception as e:
        print(f"Error loading model: {e}")
        sys.exit(1)  # Exit the script with an error code

def predict_image(image_data, model):
    try:
        transform = transforms.Compose([
            transforms.Grayscale(num_output_channels=1),  # Ensure grayscale
            transforms.ToTensor(),
            transforms.Normalize((0.5,), (0.5,))
        ])

        image = Image.open(io.BytesIO(image_data))
        image = transform(image).unsqueeze(0)

        with torch.no_grad():
            outputs = model(image)
            _, predicted = torch.max(outputs.data, 1)
        return predicted.item()
    except Exception as e:
        print(f"Error during prediction: {e}")
        sys.exit(1)


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python script.py <model_path>")
        sys.exit(1)

    model_path = sys.argv[1]
    model = load_model(model_path)

    image_data = sys.stdin.buffer.read()
    prediction = predict_image(image_data, model)
    print(prediction)
