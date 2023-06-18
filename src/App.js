import React, { useState } from 'react';
import './App.css'

function App() {
  const [text, setText] = useState('');
  const wordCount = text.trim().split(/\s+/).length;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div >
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea
        rows="7"
        cols="60"
        placeholder="Type something..."
        value={text}
        onChange={handleChange}
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default App;
