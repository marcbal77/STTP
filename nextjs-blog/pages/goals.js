import Head from 'next/head';
import Link from 'next/link';

export default function Goals() {
  return (
    <>
      <Head>
        <title>Goals</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Financial Goal Setting</h1>
      <h2>
        <Link href="/">Back to Home Page</Link>
      </h2>
    </>
  );
}