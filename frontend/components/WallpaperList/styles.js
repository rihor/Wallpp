import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  ul {
    max-width: 100%;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
  }
`

export const ControlsContainer = styled.div`
  width: 100%;
  padding: 0 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;

  div {
    input {
      background: rgba(0, 0, 0, 0.1);
      border: none;
      width: 25px;
    }
  }

  button {
    background: #fff;
    display: flex;
    align-items: center;
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 4px;
    padding: 5px 15px;
    font-size: 16px;

    svg {
      width: 32px;
      height: 32px;
    }
  }
`
