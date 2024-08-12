import React, { useState } from 'react';
import { FormContainer, Input, Button } from './styles';

const BMICalculator = ({ addToHistory }) => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiDescription, setBmiDescription] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const bmiValue = (weight / (height * height)).toFixed(1);
      setBmi(bmiValue);
      if (bmiValue < 18.5){
        setBmiDescription("Underweight");
      }
      else if (bmiValue <= 24.9 && bmiValue >= 18.5){
        setBmiDescription("Normal");
      }
      else if (bmiValue <= 29.9 && bmiValue >= 25){
        setBmiDescription("Overweight");
      }
      if (bmiValue >= 30){
        setBmiDescription("Obese");
      }
      const entry = {weight, 
                     height, 
                     bmi: bmiValue, 
                     date: new Date().toISOString()
                    };

      addToHistory(entry);
    }
  };

  return (
    <FormContainer>
      <h2>Calculate BMI</h2>
      <Input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Height (m)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <Button onClick={calculateBMI}>Calculate BMI</Button>
      {bmi && bmiDescription && <p>Your BMI is: {bmi} {bmiDescription}</p>}
    </FormContainer>
  );
};

export default BMICalculator;
