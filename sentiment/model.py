from transformers import pipeline

# Load sentiment-analysis pipeline
sentiment_pipeline = pipeline("sentiment-analysis")


def analyze_sentiment(text: str):
    result = sentiment_pipeline(text)
    return result[0]
