import React, { useState, useEffect } from 'react'; 
import BMICalculator from './BMICalculator';
import FitnessTips from './FitnessTips';
import History from './History';
import { AppContainer, Title, Everything } from './styles';

const App = () => {
  const [bmiHistory, setBmiHistory] = useState([]);

  // Load BMI history from the server on mount
  useEffect(() => {
    fetch('http://localhost:5000/history')
      .then((response) => response.json())
      .then((data) => setBmiHistory(data))
      .catch((error) => console.error('Error fetching history:', error));
  }, []);
  
  const addToHistory = (entry) => {
    fetch('http://localhost:5000/history', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entry),
    })
      .then((response) => response.json())
      .then((data) => setBmiHistory(data))
      .catch((error) => console.error('Error posting history:', error));
  };  

  return (
    <Everything>
      <AppContainer>
        <Title>BMI Calculator App</Title>
        <BMICalculator addToHistory={addToHistory} />
        <FitnessTips />
        <History bmiHistory={bmiHistory} />
      </AppContainer>
    </Everything>
  );
};

export default App;
