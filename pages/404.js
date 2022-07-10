import Head from 'next/head';
import Layout from '../components/Layout'

const NotFound = () => (
  <Layout>
    <Head>
      <title>404</title>
      <meta name='description' content='Página não encontrada' />
    </Head>
    <h1>404</h1>
  </Layout>
);

export default NotFound;