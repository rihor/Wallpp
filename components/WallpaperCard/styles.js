import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 20%;
  height: 20%;

  img {
    width: 100%;
    height: 100%;
    background: #eee;
  }

  div {
    opacity: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6));
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 98%;

    span {
      position: absolute;
      bottom: 10px;
      left: 10px;
      width: 90%;
      color: #fff;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  div:hover {
    opacity: 1;
  }
`
