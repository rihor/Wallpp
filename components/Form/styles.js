import styled from 'styled-components'

export const FormContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  div + div {
    margin-top: 10px;
  }
`
