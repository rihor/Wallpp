import styled from 'styled-components'

import { BodyContainer } from './layout'

export const Body = styled(BodyContainer)`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'file form';
  column-gap: 20px;
  align-items: center;
`

export const FormContainer = styled.div`
  grid-area: form;
  background: #fff;
  padding: 18px 22px;
  border-radius: 4px;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  height: 75%;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    label {
      font-size: 16px;
    }

    button,
    input,
    textarea {
      padding: 5px 10px;
      border-radius: 4px;
    }

    input,
    textarea {
      background: #eee;
      border: 2px solid #eee;
      transition: border 0.3s;
      &:hover {
        border: 2px solid #ddd;
      }
    }

    textarea {
      resize: none;
      min-height: 120px;
    }

    button {
      background: #7f5096;
      color: #fff;
      font-size: 16px;
      border: none;
      transition: background 0.3s;

      &:hover {
        background: #a060bf;
      }
    }
  }
`

export const UploadContainer = styled.div`
  grid-area: file;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0002;
  border-radius: 4px;

  img {
    object-fit: cover;
    border-radius: 4px;
  }
`
