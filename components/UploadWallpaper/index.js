import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'

import Api from '../../services/api'
import Cookie from '../../services/cookie'

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
    <div>
      <input type="file" name="file" accept="image/*" onChange={handleChange} />
      {preview && <img src={preview} width={300} height={300} />}
    </div>
  )
}

// UploadWallpaper.getInitialProps = async ctx => {
//   const token = Api.getToken(ctx)
//   return { token }
// }

UploadWallpaper.propTypes = {
  isUploading: PropTypes.bool,
  setFileId: PropTypes.func
}
