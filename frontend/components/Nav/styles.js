import styled from 'styled-components'

export const Button = styled.button`
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #513c59;
  font-family: 'Heebo', sans-serif;
  font-size: 16px;
  font-weight: bold;

  background: none;
  border-radius: none;
  padding: none;

  svg {
    color: #513c59;
    width: 24px;
    height: 24px;
    margin-right: 4px;
  }
`

export const Header = styled.header`
  height: 40px;
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }

  a {
    color: #2d2d2d;

    & + a {
      margin-left: 25px;
    }
  }

  @media (max-width: 1000px) {
    & {
      padding: 0 25px;
    }
  }

  @media (max-width: 600px) {
    & {
      padding: 0 2px;
    }
  }
`
