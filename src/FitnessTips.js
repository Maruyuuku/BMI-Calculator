import React, { useState } from 'react';
import { TipsContainer, Button, TipsSelector, TipDisplay } from './styles';

const exerciseTips = [
  'Make an exercise plan and do not forget to reward yourself when you reach your goals.',
  'Incorporate strength training twice a week.',
  'Do activities you enjoy to make it more fun: Be creative and try something new.',
  'Find ways to fit exercise into day: You are more likely to get moving if exercise is a convenient part of your day.'
];

const dietTips = [
  'Eat more fruits and vegetables.',
  'Drink at least 8 glasses of water daily.',
  'Reduce sugar intake.',
  'Include protein in every meal.',
];

const FitnessTips = () => {
  const [selectedTips, setSelectedTips] = useState([]);
  const [currentTip, setCurrentTip] = useState('');

  const handleTipSelection = (type) => {
    if (selectedTips.includes(type)) {
      setSelectedTips(selectedTips.filter((tip) => tip !== type));
    } else {
      setSelectedTips([...selectedTips, type]);
    }
  };

  const generateTip = () => {
    let tips = [];
    if (selectedTips.includes('exercise')) {
      tips = tips.concat(exerciseTips);
    }
    if (selectedTips.includes('diet')) {
      tips = tips.concat(dietTips);
    }
    if (tips.length > 0) {
      const randomTip = tips[Math.floor(Math.random() * tips.length)];
      setCurrentTip(randomTip);
    }
  };

  return (
    <TipsContainer>
      <h2>Fitness Tips</h2>
      <TipsSelector>
        <Button
          active={selectedTips.includes('exercise')}
          onClick={() => handleTipSelection('exercise')}
        >
          Exercise Tips
        </Button>
        <Button
          active={selectedTips.includes('diet')}
          onClick={() => handleTipSelection('diet')}
        >
          Diet Tips
        </Button>
      </TipsSelector>
      <Button onClick={generateTip}>Get a Tip</Button>
      {currentTip && <TipDisplay>{currentTip}</TipDisplay>}
    </TipsContainer>
  );
};

export default FitnessTips;
