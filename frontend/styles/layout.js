import styled from 'styled-components'

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding: 40px 60px;
  background-color: #faaca8;
  background-image: linear-gradient(19deg, #faaca8 0%, #ddd6f3 100%);

  @media (max-width: 600px) {
    & {
      padding: 10px 20px;
    }
  }
`

export const BodyContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 40px 0;
`
