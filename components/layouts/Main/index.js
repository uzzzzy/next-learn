import Head from 'next/head'
import styles from './css.module.css'

function Home({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Nomaden</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>{children}</main>
        </div>
    )
}

export default Home
