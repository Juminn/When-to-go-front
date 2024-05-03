import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

const questions = [
  { title: "Question 1", options: ["Option 1A", "Option 1B"] },
  { title: "Question 2", options: ["Option 2A", "Option 2B"] },
  { title: "Final Question", options: ["Final A", "Final B"] },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 24px;
`;

const Options = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
  align-items: center;
  justify-content: center;
`;

const fadeOutLeft = keyframes`
  from { opacity: 1; }
  to { opacity: 0; transform: translateX(-100%); }
`;

const fadeOutRight = keyframes`
  from { opacity: 1; }
  to { opacity: 0; transform: translateX(100%); }
`;

const stayLeft = keyframes`
  from {
    
  }
  to {
    transform: scale(1.1) translateX(calc(50% - 5%));
  }
`;

const stayRight = keyframes`
  from {
    
  }
  to {
    transform: scale(1.1) translateX(calc(-50% + 5%));
  }
`;

// 로직을 별도의 함수로 분리
const selectAnimation = (props) => {
  if (!props.animate) {
    return css`none`;
  }
  if (props.isSelected) {
    return props.index === 0 ? stayLeft : stayRight;
  }
  return props.index === 0 ? fadeOutLeft : fadeOutRight;
};

const Option = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  cursor: pointer;
  background-color: ${(props) => props.color};
  animation: ${(props) =>
    css`
      ${selectAnimation(props)} 0.5s forwards
    `};
  animation-fill-mode: forwards; // 애니메이션 완료 상태 유지
`;

const VS = styled.div`
  position: absolute;
  font-size: 48px;
  color: red;
`;

const Survey = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [animate, setAnimate] = useState(false);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    setAnimate(true);
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        alert("You have completed the questions!");
      }
      setSelectedOption(null);
      setAnimate(false);
    }, 500);
  };

  return (
    <Container>
      <Header>{questions[currentQuestion].title}</Header>
      <Options>
        {questions[currentQuestion].options.map((option, index) => (
          <Option
            key={index}
            color={index === 0 ? "lightblue" : "lightgreen"}
            onClick={() => handleOptionClick(index)}
            isSelected={selectedOption === index}
            animate={animate}
            index={index}
            selectedOption={selectedOption}
          >
            {option}
          </Option>
        ))}
        <VS>VS</VS>
      </Options>
    </Container>
  );
};

export default Survey;