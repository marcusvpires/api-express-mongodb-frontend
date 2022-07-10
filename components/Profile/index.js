import React, { useEffect, useState } from 'react';

import * as S from './styled';

const User = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: { id: '62ca5d673399718dc0d41712' },
    };

    console.log('Teste')

    fetch('http://localhost:3030/user', options)
      .then((response) => response.json())
      .then((response) => {
        console.log("Response", response)
        setLoading(false)
        setData(response.user)
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <S.Wrapper>
      {isLoading ? "Carregando" : (
        <S.Element>{data.name}</S.Element>
      )}
    </S.Wrapper>
  );
};

export default User;
