import React, { useState } from 'react'
import { toast } from 'react-toastify'

import Api from '../../services/api'
import Cookie from '../../services/cookie'
import Nav from '../../components/Nav'
import Form from '../../components/Form'
import UploadWallpaper from '../../components/UploadWallpaper'
import { PageContainer } from '../../styles/layout'
import { Body, FormContainer, UploadContainer } from '../../styles/create'

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
    <PageContainer>
      <Nav user={Cookie.getUser()} />
      <Body>
        <UploadContainer>
          <UploadWallpaper setFileId={setFileId} />
        </UploadContainer>
        <FormContainer>
          <Form
            title
            description
            onSubmit={handleCreateWallpaper}
            buttonText="Enviar"
          />
        </FormContainer>
      </Body>
    </PageContainer>
  )
}
