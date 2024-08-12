import React from 'react';
import { HistoryContainer, HistoryItem } from './styles';

const History = ({ bmiHistory }) => {
  return (
    <HistoryContainer>
      <h2>History</h2>
      {bmiHistory.length === 0 ? (
        <p>No history available.</p>
      ) : (bmiHistory.map((entry, index) => (
          <HistoryItem key={index}>
            <p>
              {new Date(entry.date).toLocaleString()}: Weight: {entry.weight}kg, Height: {entry.height}m, BMI: {entry.bmi}
            </p>
          </HistoryItem>
        ))
      )}
    </HistoryContainer>
  );
};

export default History;
