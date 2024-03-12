import styled from 'styled-components'
import Background from '../../assets/background.svg'

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

export const Button = styled.button`
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
    color: #FFF;

    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }
`;

export const User = styled.li `
    
`