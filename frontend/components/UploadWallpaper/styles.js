import styled from 'styled-components'

export const Container = styled.div`
  height: 400px;
  width: 100%;

  label {
    height: 400px;
    max-width: 100%;
    cursor: pointer;

    input {
      display: none;
    }

    img {
      height: 100%;
      width: 100%;
    }
  }
`

export const ContainerPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
