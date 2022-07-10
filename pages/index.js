import Head from 'next/head';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Authentication</title>
        <meta name='description' content='Authentication' />
      </Head>
      <h1>Authentication</h1>
    </Layout>
  );
};

export default Home;
