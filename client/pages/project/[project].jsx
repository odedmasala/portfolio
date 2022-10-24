import React from 'react'
import { useRouter } from 'next/router'

const Project = () => {
    const router = useRouter()
    const { project } = router.query
  return (
    <div>Post: {project}</div>
  )
}

export default Project