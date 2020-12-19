import Head from 'next/head';
import HomePage from '../templates/Home';

export default function Home({res}) {
  return (
    <>
    <Head>
      <title>SneakerHeads - Home</title>
    </Head>
    <HomePage />
    </>
  )
}
