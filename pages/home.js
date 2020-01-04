import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import api from '../services/api'
import Nav from '../components/nav'

const Container = styled.div``

const Home = ({ wallpapers }) => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="../styles/reset.css" />
    </Head>

    <Nav />

    <Container>
      <form>
        <input name="search" placeholder="Titulo do wallpaper" />
        <button type="submit">Pesquisar</button>
      </form>

      <ul>
        {wallpapers && wallpapers.map(w => <li key={w.title}>{w.title}</li>)}
      </ul>
    </Container>
  </div>
)

Home.getInitialProps = async () => {
  // const response = await api.get('/wallpaper')

  return { wallpapers: [{ id: 1, title: 'titulo teste' }] }
}

Home.propTypes = {
  wallpapers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string
    })
  )
}

export default Home
