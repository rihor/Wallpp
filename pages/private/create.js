import React, { useState } from 'react'
import { toast } from 'react-toastify'

import UploadWallpaper from '../../components/UploadWallpaper'
import Form from '../../components/Form'
import Api from '../../services/api'
import Cookie from '../../services/cookie'

export default function Create() {
  const [fileId, setFileId] = useState(undefined)

  async function handleCreateWallpaper(data) {
    const wallpaper = await Api.post({
      pathUrl: 'wallpapers',
      data: { ...data, file_id: fileId },
      token: Cookie.getSession()
    })
    if (wallpaper) {
      toast.success(`Wallpaper: "${wallpaper.title}" created`)
    }
  }

  return (
    <div>
      <UploadWallpaper setFileId={setFileId} />
      <Form
        title
        description
        onSubmit={handleCreateWallpaper}
        buttonText="Enviar"
      />
    </div>
  )
}
