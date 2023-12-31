import React from 'react'
import { useParams } from 'react-router-dom'

const Index = () => {
    const { slug } = useParams()
  return (
    <div>
        Page article / sous dossier / slug : {slug}
    </div>
  )
}

export default Index