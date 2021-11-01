import type { NextPage } from 'next'
import Home from '../pages/home'
import NavBar from '../components/NavBar/Nav'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import styles from '../styles/index.module.css'

const Index: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <NavBar />
      <main>
        <Home/>
      </main>
      <Footer />
    </div>
  )
}

export default Index
