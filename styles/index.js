import styled from 'styled-components'

export const Background = styled.div`
  background: #888;
  width: 100vw;
  height: 100vh;
`

export const Container = styled.div`
  height: 40px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);

  div {
    display: flex;
    align-items: center;
  }

  a {
    color: #eee;

    & + a {
      margin-left: 20px;
    }
  }
`

export const Button = styled.button`
  cursor: pointer;
  color: #eee;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Heebo', sans-serif;

  /* title */
  font-size: ${({ title }) => (title ? `24px` : `14px`)};

  /* background */
  background: ${({ background }) => (background ? `#1bb76e` : `none`)};
  border-radius: ${({ background }) => (background ? `4px` : `none`)};
  padding: ${({ background }) => (background ? `5px 15px` : `none`)};
`
