import styled from 'styled-components'
import Background from '../../assets/background1.svg'

export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`;
export const Image = styled.img`
    margin-top: 30px;
`;

export const H1 = styled.h1`
    color: #FFF;
    text-align: center;
    font-family: Roboto;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const InputLabel = styled.p`
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.408px;
    color: #EEE;

    margin-left: 25px;
`;
export const Input = styled.input`
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);

    width: 342px;
    height: 58px;
    padding-left: 25px;
    margin-bottom: 34px;

    border: none;
    outline: none;

    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    color: #FFF;
`;
export const Button = styled.button`
    width: 342px;
    height: 68px;   
    display: flex;
    padding: 0px 113px;
    justify-content: center;
    align-items: center;
    background: #D93856;
    border: none;
    margin-top: 130px;

    font-size: 17px;
    font-style: normal;
    font-weight: 900;
    line-height: 2.5px;
    color: #FFF;

    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }
`;

