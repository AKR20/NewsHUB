import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Toolbar } from '@/components/Toolbar'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='page-container' >
      <Toolbar/>
      <div className={styles.main}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '35px', padding: '0px', marginRight: '13.8%'}}>
      <img src='https://cdn.pixabay.com/photo/2014/04/02/10/16/fire-303309__340.png' alt="logo" style={{ width: '50px', marginRight: '10px' }} />
    </div>
    <h1> Welcome to the NewsHub !</h1>
        <h3 style={{color: 'white	', fontWeight: 'normal', fontSize: '1.55rem', lineHeight: '2rem'}}> Unstoppable News:Your 24/7 Information Hub</h3>
        <span><Link href="/home/1" as="/home/1" passHref>
          <button>Go to Headlines</button>
        </Link>
        <Link href="/feed/1" as="/feed/1" passHref>
          <button>Go to Categories</button>
        </Link></span>
      </div>
    </div>
  )
}

