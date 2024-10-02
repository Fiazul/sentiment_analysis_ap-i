from fastapi import FastAPI
from pydantic import BaseModel
from sentiment.model import analyze_sentiment
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or restrict to your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class TextInput(BaseModel):
    text: str


@app.get("/")
def root():
    return {"message": "Welcome to the Sentiment Analysis API!"}

# Endpoint to analyze sentiment


@app.post("/analyze/")
def analyze(input_text: TextInput):
    result = analyze_sentiment(input_text.text)
    return {
        "label": result['label'],
        "score": result['score']
    }
