import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

import api from '../../services/api'
import Nav from '../../components/nav'
import WallpaperCard from '../../components/WallpaperCard'
import { Background } from '../../styles'
import { Container } from './styles'

const Home = ({ wallpapers }) => (
  <Background>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="../styles/reset.css" />
    </Head>

    <Nav />
    {console.log(wallpapers)}
    <Container>
      <ul>
        {wallpapers &&
          wallpapers.map(w => <WallpaperCard key={w.id} wallpaper={w} />)}
      </ul>
    </Container>
  </Background>
)

Home.getInitialProps = async () => {
  const response = await api.get('/wallpapers')

  return {
    wallpapers: response.data.data,
    page: response.data.page,
    lastPage: response.data.lastPage,
    perPage: response.data.perPage
  }
}

Home.propTypes = {
  wallpapers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string
    })
  ),
  page: PropTypes.number,
  lastPage: PropTypes.number,
  perPage: PropTypes.number
}

export default Home
