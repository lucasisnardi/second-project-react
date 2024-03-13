// style.js
import styled from "styled-components";
import { Link } from "react-router-dom";
import Background from "../../assets/background1.svg";


export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  background-position: center;
  background-color: black;
  width: 100vw;
  height: 100vh; 
  height: 1500px;
  min-height: 100vh; 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const H1 = styled.h1`
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Button = styled(Link)`
  width: 342px;
  height: 68px;
  display: flex;
  padding: 0px 113px;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.14);
  border: none;
  margin-top: 120px;
  font-size: 17px;
  font-style: normal;
  font-weight: 900;
  line-height: 2.5px;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const User = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  padding: 10px;
  margin-bottom: 10px;
  width: 342px;
  height: auto;

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  p {
    color: #fff;
    font-size: 16px;
    margin: 0;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;

    img {
      width: 20px;
      height: 20px;
      object-fit: contain;
    }
  }
`;

export const Status = styled.p`
  color: #fff;
  font-size: 16px;
  margin: 0;
`;
