import styled from 'styled-components'

export const Hero = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;

  img {
    border-radius: 50%;
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
