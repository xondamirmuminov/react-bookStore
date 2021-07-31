import styled from 'styled-components';
import colors from './colors';

let { dark, yellow } = colors;

const StyledHeader = styled.header`
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    @fontface {
      font-family: 'Poppins', san-serif;
      src: url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')
    }
    background: ${dark};
    .header__inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .header__list {
            display: flex;
            align-items: center;
            height: 80px;
            .header__list-item {
                margin-right: 35px;
                font-family: 'Poppins', sans-serif;
                color: white;
                font-size: 16px;
                position: relative;
                height: 61.3%;
                margin-top: 30px;
                &::before, &.active::before {
                   content: '';
                   position: absolute;
                   width: 0;
                   height: 4px;
                   background: white;
                   bottom: 0;
                   left: 50%;
                }
                &:hover::before, &.active::before {
                   width: 100%;
                   transition: .6s;
                   left: 0;
                }
            }
        }
    }
`;

export {
    StyledHeader
}

