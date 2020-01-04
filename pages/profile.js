import React from 'react'
import styled from 'styled-components'

import withAuth from '../utils/withAuth'

const Container = styled.div`
  background: blue;
`

const Profile = () => <Container>PROFILE caralho</Container>

export default withAuth(Profile)
