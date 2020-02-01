import styled from 'styled-components'

export const Header = styled.header`
  height: 40px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);

  div {
    display: flex;
    align-items: center;
  }

  a {
    color: #eee;

    & + a {
      margin-left: 20px;
    }

    button {
      cursor: pointer;
      color: #eee;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Heebo', sans-serif;

      /* title */
      font-size: 14px;

      /* background */
      background: none;
      border-radius: none;
      padding: none;
    }
  }
`
