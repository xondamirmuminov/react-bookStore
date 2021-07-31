import React from 'react';
import styled from 'styled-components';
import colors from './colors';

const { dark, yellow } = colors;
const Sign = styled.section`
    background: ${dark};
    display: flex;
    height: 100vh;

    img {
        width: 50%;
        background: #b38757;
    }
    form {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h1{
            color: gray;
            font-size: 36px;
            margin: 0;
        }
        input, button{
            padding: 8px;
            margin-top: 20px;
            width: 340px;
            font-family: 'Poppins',sans-serif;
            border-radius: 4px;
            border: 0;
            font-size: 14px;
            height: 40px;
        }
        button{
            background: #b38757;
            font-family: 'Poppins',sans-serif;
            color: white;
            cursor: pointer;
            font-size: 17px;
            height: 45px;
        }
    }
`

export default Sign