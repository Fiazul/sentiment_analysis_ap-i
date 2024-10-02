import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');        // State to store the user's input text
  const [result, setResult] = useState(null);  // State to store the result from the API
  const [loading, setLoading] = useState(false); // State to show loading indicator
  const [error, setError] = useState(null);    // State to store any errors

  // Function to handle input change
  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  // Function to submit the text and get the sentiment analysis
  const analyzeSentiment = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://127.0.0.1:8000/analyze/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }), // Send the input text to the API
      });

      const data = await response.json();

      if (response.ok) {
        setResult(data); // Set the result if the request was successful
      } else {
        setError('Error analyzing sentiment.'); // Show error if the response is not OK
      }
    } catch (err) {
      setError('Error analyzing sentiment.'); // Show error if there is a network error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Sentiment Analysis</h1>
        <textarea
          placeholder="Enter text for sentiment analysis..."
          value={text}
          onChange={handleInputChange}
          rows={6}
          cols={50}
          style={styles.textarea}
        />
        <br />
        <button
          onClick={analyzeSentiment}
          disabled={loading || !text}
          style={styles.button}
        >
          {loading ? 'Analyzing...' : 'Analyze'}
        </button>
        {result && (
          <div style={styles.result}>
            <h2>Result:</h2>
            <p><strong>Label:</strong> {result.label}</p>
            <p><strong>Score:</strong> {result.score.toFixed(4)}</p>
          </div>
        )}
        {error && <p style={styles.error}>{error}</p>}
      </header>
    </div>
  );
}

// Inline styles for the components
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
  },
  header: {
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    margin: '10px 0',
  },
  result: {
    marginTop: '20px',
    textAlign: 'left',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
};

export default App;
