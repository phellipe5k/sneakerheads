import Head from 'next/head';
import HomePage from '../templates/Home';

export default function Sneakers({res}) {
  return (
    <>
    <Head>
      <title>SneakerHeads - Sneakers</title>
    </Head>
    <HomePage />
    </>
  )
}
