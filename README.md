# sentiment_analysis_ap-i
# Sentiment Analysis Web Application

This is a simple web application that performs positive and negative sentiment analysis. It uses **FastAPI** for the api and **React** for the frontend.

The sentiment analysis model is powered by Hugging Face's pipeline API, which simplifies the use of pre-trained transformer models. In this case, the pipeline("sentiment-analysis") automatically loads a default sentiment analysis model. You can also define a specific model by specifying the model name within the pipeline, like this: sentiment_pipeline = pipeline("sentiment-analysis", model="your-model-name"). This allows flexibility in choosing different pre-trained models based on your requirements, whether it's the default model or a more specialized one for sentiment tasks.

---

## Project Setup


1. **Run the api**:
python -m venv venv
source venv/bin/activate  # For Linux/MacOS
venv\Scripts\activate     # For Windows
pip install -r requirements.txt
uvicorn main:app --reload

Navigate to the frontend directory:
cd sentiment-analysis-frontend
npm install
npm start
![Alt Text](image.png)
![Alt Text](image2.png)
