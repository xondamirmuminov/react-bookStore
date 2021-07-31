import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    @fontface {
      font-family: 'Poppins', san-serif;
      src: url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')
    }
  *,*::after,*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
  }
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }
`