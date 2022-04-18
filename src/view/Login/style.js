import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(253deg, #0cc898, #1797d2, #ffc107);
  background-size: 300% 300%;
  -webkit-animation: Background 25s ease infinite;
  -moz-animation: Background 25s ease infinite;
  animation: Background 25s ease infinite;

    
  @-webkit-keyframes Background {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }
  
  @-moz-keyframes Background {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }
  
  @keyframes Background {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }
  
  .full-screen {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url(https://i.imgur.com/wCG2csZ.png);
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column
    
    flex-direction: column;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    text-align: center;
  }
  
  h1 {
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    font-weight: 800;
    font-size: 4em;
    letter-spacing: -2px;
    text-align: center;
    text-shadow: 1px 2px 1px rgba(0, 0, 0, .6);
  }
  
  .button-line {
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
    text-align: center;
    font-size: 1.4em;
    opacity: .8;
    padding: 20px 40px;
    text-decoration: none;
    transition: all .5s ease;
    margin: 0 auto;
    display: block;
    width: 100px;
  }
  
  .button-line:hover {
    opacity: 1;
  }
`;

export const Content = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 0 auto;

  h1 {
    font-size: 1.5rem;
  }

  .btn {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 4px;
    margin: 5px 0;
    opacity: 0.85;
    display: inline-block;
    font-size: 17px;
    line-height: 20px;
    text-decoration: none; /* remove underline from anchors */

    i {
      text-align: left;
    }
  }

  .btn:hover {
    opacity: 1;
  }

  .fb {
    background-color: #3b5998;
    color: white;
  }

  .hl {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin: 1rem 0;
  }

  .hl::before {
    width: 100%;
    content: '';
    border: 1px solid #ddd;
  }

  .hl::after {
    width: 100%;
    content: '';
    border: 1px solid #ddd;
  }

  .or {
    padding: 0.5rem;
    border: 2px solid #ddd;
    border-radius: 10px;
    color: #fff;
  }

  a {
    color: #fff;
  }
`;
