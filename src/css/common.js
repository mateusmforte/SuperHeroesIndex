import "./utils/reset.css";
import "./utils/common.css";
import styled from "styled-components";

export const HeaderContent = styled.div`
  height: 10%;
  width: 100%;
  padding: 0;
  position: fixed;
  bottom: 0;
  z-index: 3;
  @media (min-width: 768px) {
    height: 10%;
    width: 100%;
    margin-right: auto;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  padding: 0 4%;
  display: flex;
  flex-direction: column;
  background-color: #24262b;
  color: #f9f9f9;
  @media (min-width: 768px) {
    width: 89%;
    padding: 1%;
    margin-left: 10%;
  }
`;
