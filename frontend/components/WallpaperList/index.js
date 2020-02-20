import React, { useState, useEffect } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import PropTypes from 'prop-types'

import WallpaperCard from '../WallpaperCard'
import { Container, ControlsContainer } from './styles'

const WallpaperList = ({ wallpapers, page, lastPage, fetch }) => {
  const [currentPage, setCurrentPage] = useState(page)

  useEffect(() => {
    fetch(currentPage)
  }, [currentPage])

  return (
    <Container>
      <ControlsContainer>
        <button onClick={() => fetch(currentPage - 1)}>
          <MdChevronLeft />
        </button>
        <div>
          <input
            type="number"
            name="page"
            value={currentPage}
            onChange={e => setCurrentPage(e.target.value)}
            max={lastPage}
            min={1}
          />
          <span> de {lastPage}</span>
        </div>
        <button onClick={() => fetch(currentPage + 1)}>
          <MdChevronRight />
        </button>
      </ControlsContainer>
      <ul>
        {wallpapers.map(w => (
          <WallpaperCard key={w.id} wallpaper={w} />
        ))}
      </ul>
    </Container>
  )
}

WallpaperList.propTypes = {
  wallpapers: PropTypes.arrayOf(PropTypes.shape({})),
  page: PropTypes.number,
  lastPage: PropTypes.number,
  fetch: PropTypes.func
}

export default WallpaperList
