import styled from 'styled-components'

export const FormContainer = styled.div`
  background: #fff;
  padding: 12px 14px;

  input,
  button {
    border-radius: 4px;
  }

  input {
    background: #eee;
    border: 2px solid #eee;
    padding: 5px 10px;
    transition: border 0.3s;

    &:hover {
      border: 2px solid #ddd;
    }
  }

  button {
    background: #7f5096;
    color: #fff;
    font-size: 16px;
    border: none;
    padding: 10px 20px;
    transition: background 0.3s;

    &:hover {
      background: #a060bf;
    }
  }
`
