# 🌱 Krishi Mitra – AI-Powered Crop Disease Detection App

Krishi Mitra is a mobile application that helps farmers detect crop diseases using AI-based image recognition. It provides instant diagnosis and treatment suggestions, aiming to support sustainable agriculture.

---

## 📱 Features

- 🔍 **Disease Detection from Leaf Images**
- 🧠 **ResNet50-based Deep Learning Model (99.01% accuracy)**
- 📂 **Upload from Camera or Gallery**
- 📊 **Scan History with Date & Disease Info**
- 🌦 **Live Weather Forecasts**
- 🔐 **Google & Microsoft Sign-In (via Firebase)**
- 💬 **ChatGPT Assistant for Support**

---

## 🧪 Dataset & Model

### 📁 Dataset

- **Total Images:** 73,000
- **Classes:** 73 disease categories
- **Crops Covered:** 22 types
- **Sources:** Merged from PlantVillage, custom (papaya, pigeonpea, bitter gourd), manual cleaning

### 🧠 Model

- **Architecture:** ResNet50 (Transfer Learning)
- **Other Models Tried:** VGG16, VGG19, EfficientNetB3, MobileNetV2, Xception
- **Accuracy:** 99.01% on test set
- **Image Size:** 224x224 (JPEG)
- **Training Tools:** TensorFlow, Scikit-learn, Albumentations
- **Hardware:** NVIDIA RTX 3050 GPU

---

