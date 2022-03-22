import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { SubscribeButton } from '../components/subscribeButton';
import { stripe } from '../services/stripe';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>

          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> word.</h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.90 month</span>
          </p>
          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="coding" />


      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1Kfl3yFGYdwyE1tHH2tnLErf', {
    expand: ['product']
  })
  return {

  }

}
