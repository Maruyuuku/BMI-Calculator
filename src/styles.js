// src/styles.js
import styled, { css } from 'styled-components';

export const Everything = styled.div`
  min-height: 100vh; 
  width: 100vw; 
  justify-content: center; 
  align-items: center; 
`;
export const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  margin: 0; // Remove any default margin
  padding: 20px;
  background-color: #fefae0; 
  display: flex;
  flex-direction: column;
  
`;

export const Title = styled.h1`
  text-align: center;
  color: #d4a373; 
`;

export const FormContainer = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-left: 5px solid #ccd5ae; 
  display: flexbox;
`;

export const Input = styled.input`
  width: calc(100% - 22px);
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px 15px;
  background-color: #d4a373; 
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #faedcd; 
  }

  ${(props) =>
    props.active &&
    css`
      background-color: #30343f; 
    `}
`;

export const TipsContainer = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-left: 5px solid #e9edc9; 
  display: flexbox;
`;

export const TipsSelector = styled.div`
  margin-bottom: 10px;
`;

export const TipDisplay = styled.div`
  margin-top: 15px;
  padding: 10px;
  background-color: #e9edc9; 
  border-radius: 4px;
  color: #555;
`;

export const HistoryContainer = styled.div`
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-left: 5px solid #faedcd; 
`;

export const HistoryItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f1f3f5;
  border-radius: 4px;
  color: #555;
`;
