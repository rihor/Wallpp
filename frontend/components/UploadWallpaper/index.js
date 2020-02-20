import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'

import Api from '../../services/api'
import Cookie from '../../services/cookie'
import { Container, ContainerPlaceholder } from './styles'

export default function UploadWallpaper({ setFileId }) {
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)

  async function handleChange(event) {
    setFile(event.target.files[0])
  }

  useEffect(() => {
    async function upload() {
      const formData = new FormData()
      formData.append('file', file)

      const { id, url } = await Api.post({
        pathUrl: 'files',
        data: formData,
        token: Cookie.getSession()
      })
      setFileId(id)
      setPreview(url)

      toast.success('Image uploaded with success!')
    }
    if (file) {
      upload()
    }
  }, [file])

  return (
    <Container>
      <label htmlFor="file">
        <input
          id="file"
          type="file"
          name="file"
          accept="image/*"
          onChange={handleChange}
        />
        {preview ? (
          <img src={preview} />
        ) : (
          <ContainerPlaceholder>
            <div>
              <span>Insert a wallpaper</span>
            </div>
          </ContainerPlaceholder>
        )}
      </label>
    </Container>
  )
}

UploadWallpaper.propTypes = {
  isUploading: PropTypes.bool,
  setFileId: PropTypes.func
}
