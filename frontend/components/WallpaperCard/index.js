import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

const WallpaperCard = ({ wallpaper }) => (
  <Container>
    <div>
      <img src={wallpaper.file.url} />
    </div>
    <section>
      <span>{wallpaper.title}</span>
    </section>
  </Container>
)

WallpaperCard.propTypes = {
  wallpaper: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    file: PropTypes.shape({
      url: PropTypes.string
    })
  })
}

export default WallpaperCard
