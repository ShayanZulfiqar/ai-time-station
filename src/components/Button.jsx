import React from 'react';
import styled from 'styled-components';

// Button component that accepts text, link, onClick, and width as props
const Button = ({ text = 'Button', link = '#', onClick, width = 'auto' }) => {
  return (
    <StyledWrapper width={width}>
      <button onClick={onClick}>
        <a href={link} className="text">{text}</a>
      </button>
    </StyledWrapper>
  );
};

// Styled components for the button with hover effects and transitions
const StyledWrapper = styled.div`
  button {
    align-items: center;
    background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
    border: 0;
    border-radius: 8px;
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
    box-sizing: border-box;
    color: #ffffff;
    display: flex;
    font-size: 16px;
    justify-content: center;
    line-height: 1em;
    max-width: 100%;
    width: ${(props) => props.width}; /* Set width based on the prop */
    min-width: 140px;
    padding: 3px;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.3s;
  }

  button:active,
  button:hover {
    outline: 0;
  }

  button a {
    background-color: rgb(5, 6, 45);
    padding: 14px 20px;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    transition: 300ms;
    text-decoration: none;
    color: #fff;
  }

  button:hover a {
    background: none;
  }

  button:active {
    transform: scale(0.9);
  }
`;

export default Button;