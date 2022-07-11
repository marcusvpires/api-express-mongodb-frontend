import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Layout from '../../components/Layout';

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <Layout>
      <Head>
        <title>Registrar</title>
        <meta name='description' content='Registrar' />
      </Head>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} />
        <p>{errors.name?.message}</p>

        <input {...register('email')} />
        <p>{errors.email?.message}</p>

        <input {...register('password')} />
        <p>{errors.password?.message}</p>

        <input type='submit' />
      </form>
    </Layout>
  );
};

export default RegisterPage;
