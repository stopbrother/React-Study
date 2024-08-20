import React from "react";
import styled from "styled-components";

const Stbox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

const boxList = ["red", "blue", "green"];

const boxName = (color) => {
  switch (color) {
    case "red":
      return "빨강";
    case "blue":
      return "파랑";
    case "green":
      return "초록";
    default:
      "검정";
  }
};

function App() {
  return (
    <>
      {boxList.map((box) => (
        <Stbox key={box} borderColor={box}>
          {boxName(box)}
        </Stbox>
      ))}
    </>
  );
}

export default App;
