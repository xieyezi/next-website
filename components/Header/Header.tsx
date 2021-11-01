import Head from 'next/head'
import  styles from '../styles/home.module.css'

function Header() {
    return (
        <Head>
            <title>Burnish 博尼施科技</title>
            <meta name="description" content="为新能源和传统能源车，提供满足国家和地方标准的数据上报，以及各个自主业务应用场景服务" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
        </Head>
    )
}

export default Header