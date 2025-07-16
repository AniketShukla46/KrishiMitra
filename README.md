🌱 Krishi Mitra – AI-Powered Crop Disease Detection App
Krishi Mitra is an AI-powered mobile application that helps farmers and agriculture professionals detect crop diseases from plant images using state-of-the-art deep learning models. The app offers actionable insights and suggestions for disease management, making farming smarter and more efficient.

📱 Features
🔍 Crop Disease Detection: Upload or capture leaf images to identify diseases.

🧠 AI Models: Integrated with ResNet50-based model (99.01% accuracy) trained on 85,000+ images across 95 classes.

📊 Prediction History: Keep track of all your previous disease scans.

🌦 Weather Insights: View live weather data for your location.

🔐 Secure Login: Sign in using Google or Microsoft accounts via Firebase Authentication.

💬 Chat Support: ChatGPT-powered virtual assistant for farming queries.

🧪 Dataset and Model
📂 Dataset
Name: Krishi Mitra Dataset

Size: 85,000 images

Classes: 95 disease categories across 23 crops

Sources: Merged and cleaned data from PlantVillage, custom datasets (papaya, pigeonpea, bitter gourd), and open-access resources.

🔧 Preprocessing
Image augmentation using Albumentations

Resizing to 224x224 and conversion to JPEG

Dataset compression for deployment optimization

🧠 Model Training
Architecture: Transfer Learning using ResNet50, VGG19, EfficientNetB3, etc.

Best Model: ResNet50 with 99.01% test accuracy

Training Tools: TensorFlow, Scikit-learn, Matplotlib

Hardware: RTX 3050, batch size 64, early stopping, fine-tuning
