import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Pure Water Life</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Pure Water Life
                </h1>
                <p className={styles.description}>Tellus rutrum tellus pellentesque eu</p>
                <div className={styles.grid}>
                    <a href="" className={styles.card}>
                        <h2>Card 1 &rarr;</h2>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                    </a>

                    <a href="" className={styles.card}>
                        <h2>Card 2 &rarr;</h2>
                        <p>Learn about Next.js in an interactive</p>
                    </a>

                    <a href="" className={styles.card}>
                        <h2>Card 3 &rarr;</h2>
                        <p>Duis aute irure dolor in reprehenderit</p>
                    </a>

                    <a href="" className={styles.card}>
                        <h2>Card 4 &rarr;</h2>
                        <p>Excepteur sint occaecat cupidatat non proident</p>
                    </a>
                </div>
                <svg className='waves' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#0099ff" fillOpacity="1" d="M0,64L48,74.7C96,85,192,107,288,112C384,117,480,107,576,101.3C672,96,768,96,864,96C960,96,1056,96,1152,101.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </main>
            <footer className={styles.footer}>
                <p>555-555-5555 | email@gmail.com</p>
            </footer>
        </div>
    )
}