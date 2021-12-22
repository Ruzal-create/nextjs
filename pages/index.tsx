import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Typography from '@mui/material/Typography';
import Post from '../components/post';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Typography variant="h3" gutterBottom component="div">
        POST REQUEST
      </Typography> 
      <Post/>
    </div>
  )
}

export default Home
