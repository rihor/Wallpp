import styled from 'styled-components'

export const Hero = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;

  img {
    border-radius: 50%;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: space-around;

    button {
      margin: 0 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px 10px;
      border: none;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.4);
      transition: all 0.3s;

      &:hover {
        background: rgba(255, 255, 255, 0.6);
      }

      &:active {
        box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.05);
      }

      svg {
        width: 24px;
        height: 24px;
        margin-right: 5px;
      }
    }
  }
`

export const UserInfo = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1,
  span {
    text-align: center;
  }
`

export const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

export const UserNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: rgba(0, 0, 0, 0.5);
  font-size: 24px;
  font-weight: bold;

  svg {
    width: 64px;
    height: 64px;
    color: rgba(0, 0, 0, 0.5);
  }
`
