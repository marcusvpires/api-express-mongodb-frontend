import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Layout from '../../components/Layout';

const submit = ({ email, password }) => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      email: email,
      password: password,
    },
  };

  fetch('http://localhost:3000/api/users/', options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => submit(data);
  return (
    <Layout>
      <Head>
        <title>Registrar</title>
        <meta name='description' content='Registrar' />
      </Head>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')} />
        <p>{errors.email?.message}</p>

        <input {...register('password')} />
        <p>{errors.password?.message}</p>

        <input type='submit' />
      </form>
    </Layout>
  );
};

export default LoginPage;
