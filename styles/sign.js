import styled from 'styled-components'
import bgMesh from '../public/backgroundMesh.jpg'

export const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${bgMesh});
  background-size: 100% 100%;
  width: 100%;
  height: auto;

  > div {
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
    width: 400px;
    padding: 20px 30px;
    mix-blend-mode: screen;

    h1 {
      text-align: center;
    }

    form {
      margin-top: 10px;

      label {
        color: #000;
        font-size: 16px;
      }

      input {
        background: linear-gradient(45deg, #dedede, #ddd);
        border: solid 2px #ddd;
        border-radius: 4px;
        padding: 8px 10px;
        transition: border 0.3s;
        color: #000;
        font-size: 16px;
        font-weight: bold;
      }

      input:hover {
        border: solid 2px rgba(0, 0, 0, 0.4);
      }

      button {
        padding: 10px 20px;
        margin: 10px 0;
        border: none;
        border-radius: 4px;
        background: rgba(0, 0, 0, 1);
        color: #fff;
        font-size: 18px;
      }
    }

    a {
      display: block;
      margin-top: 10px;
      text-align: center;
      color: #111;
      font-size: 15px;
      padding: 10px 20px;
      border: 1px dotted #333;
      border-radius: 4px;
    }
  }
`
