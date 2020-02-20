import styled from 'styled-components'

export const Container = styled.li`
  margin: 5px;

  div {
    height: 240px;
    width: 240px;

    img {
      object-fit: cover;
      width: 100%;
      height: 240px;
      border-radius: 4px 4px 0 0;
    }
  }

  section {
    border-radius: 0 0 4px 4px;
    padding: 10px 15px;
    background: #fff;

    span {
      font-weight: bold;
    }
  }
`
