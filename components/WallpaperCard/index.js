import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

export default function WallpaperCard({ wallpaper }) {
  return (
    <Container>
      <img src={wallpaper.file.url} />
      <div>
        <span>{wallpaper.title}</span>
      </div>
    </Container>
  )
}

WallpaperCard.propTypes = {
  wallpaper: PropTypes.shape({
    title: PropTypes.string,
    file: PropTypes.shape({
      url: PropTypes.string
    })
  })
}
