import React, { useState } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

import Api from '../services/api'
import Cookie from '../services/cookie'
import Nav from '../components/Nav'
import { PageContainer, BodyContainer } from '../styles/layout'
import WallpaperList from '../components/WallpaperList'

const Home = ({ user, ssrWallpapers, ssrPage, ssrLastPage }) => {
  const [wallpapers, setWallpapers] = useState(ssrWallpapers)
  const [page, setPage] = useState(ssrPage)

  async function handleLoad(pageToLoad = 1) {
    if (pageToLoad > ssrLastPage) {
      return
    }

    const data = await Api.get({
      pathUrl: '/wallpapers'
    })

    setWallpapers(data.data)
    setPage(pageToLoad)
  }

  return (
    <PageContainer>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav user={user} />

      <BodyContainer>
        <WallpaperList
          wallpapers={wallpapers}
          fetch={handleLoad}
          page={page}
          lastPage={ssrLastPage}
        />
      </BodyContainer>
    </PageContainer>
  )
}

Home.getInitialProps = async ctx => {
  const data = await Api.get({
    pathUrl: '/wallpapers'
  })

  const user = Cookie.getUser(ctx)

  return {
    user,
    ssrWallpapers: data.data,
    ssrPage: data.page,
    ssrLastPage: data.lastPage,
    ssrPerPage: data.perPage
  }
}

Home.propTypes = {
  user: PropTypes.shape({}),
  ssrWallpapers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string
    })
  ),
  ssrPage: PropTypes.number,
  ssrLastPage: PropTypes.number,
  ssrPerPage: PropTypes.number
}

export default Home
