import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Projects App</title>
        <meta name="description" content="Check out some of my latest projects and get in touch if you're interested in working together.
        you can explore my projects and discover my development skills, From web development to mobile apps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Projects by&nbsp;
            <code className={styles.code}>codewithprash</code>
          </p>
          <div>
            <a
              href="https://github.com/codewithprash"
              target="_blank"
              rel="noopener noreferrer"
            >
              Made with ❤️ By{' '}
              <Image
                src="/prash.svg"
                alt="prash Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          
         
          
          <div className={styles.thirteen}>
            <Image
              src="/logo.svg"
              alt="p"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://cwp.pages.dev/yourgrade/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              YourGrade <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
            Show exam results in a straightforward manner.
            </p>
          </a>

          <a
            href="https://tap2chat.pages.dev"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Tap2Chat <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
            Send WhatsApp messages without saving phone number.
            </p>
          </a>

          <a
            href="https://peace.pages.dev"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Peace <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
            Mental Health Care application.
            </p>
          </a>

          <a
            href="https://mht.pages.dev"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Mht <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
            Mental Health Tracker
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
