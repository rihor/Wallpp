import styled from 'styled-components'

export const Container = styled.aside`
  position: absolute;
  right: 50px;
  top: 30px;
  mix-blend-mode: screen;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    padding: 12px 24px;
    border-radius: 4px;
    font-size: 16px;
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.1);

    &:hover {
      background: rgba(255, 255, 255, 0.9);
    }

    &:active {
      box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0);
      color: #000;

      svg {
        color: #000;
      }
    }

    svg {
      width: 24px;
      height: 24px;
      margin-left: 10px;
    }
  }
`
