import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

import Api from '../services/api'
import Nav from '../components/nav'
import WallpaperCard from '../components/WallpaperCard'
import { Background } from '../styles'

const Home = ({ wallpapers }) => (
  <Background>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />
    <div>
      <ul>
        {wallpapers &&
          wallpapers.map(w => <WallpaperCard key={w.id} wallpaper={w} />)}
      </ul>
    </div>
  </Background>
)

Home.getInitialProps = async () => {
  const response = await Api.get({ pathUrl: 'wallpapers' })

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
