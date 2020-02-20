import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;

  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    button {
      margin-top: 20px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
  }

  div + div {
    margin-top: 10px;
  }
`
