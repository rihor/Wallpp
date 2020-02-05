import React, { useState } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

import Api from '../services/api'
import Cookie from '../services/cookie'
import Nav from '../components/Nav'
import WallpaperCard from '../components/WallpaperCard'
import { PageContainer, BodyContainer } from '../styles/layout'

const Home = ({ ssrWallpapers, ssrPage }) => {
  const [wallpapers, setWallpapers] = useState(ssrWallpapers)
  const [page, setPage] = useState(ssrPage)

  async function handleLoad(pageToLoad = 1) {
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

      <Nav user={Cookie.getUser()} />

      <BodyContainer>
        <InfiniteScroll
          next={() => handleLoad(page + 1)}
          dataLength={wallpapers.length}
          loader={<div>Loading...</div>}
        >
          {wallpapers &&
            wallpapers.map(w => <WallpaperCard key={w.id} wallpaper={w} />)}
        </InfiniteScroll>
      </BodyContainer>
    </PageContainer>
  )
}

Home.getInitialProps = async () => {
  const data = await Api.get({
    pathUrl: '/wallpapers'
  })

  return {
    ssrWallpapers: data.data,
    ssrPage: data.page,
    ssrLastPage: data.lastPage,
    ssrPerPage: data.perPage
  }
}

Home.propTypes = {
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
