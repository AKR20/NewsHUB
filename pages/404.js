import React from 'react'
import Link from 'next/link'
import styles from '@/styles/error.module.css'

function error() {
  return (
    <div className={styles.main}>
      <h1>Error! Page not found</h1>  
      <Link href="/"><button>Home</button></Link>
    </div>
  )
}

export default error