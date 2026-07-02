import { useState } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);

  const [entrada, setEntrada] = useState(''); 

  const chamada = () => {
    if (entrada.trim() === '') {
      alert("CEP está em branco!");
      return;
    }

    
    fetch(`https://viacep.com.br/ws/${entrada}/json/`)
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error("Erro na busca:", err));
  };

  return (
    <>
      <input 
        type='text' 
        placeholder='Digite o seu CEP' 
        onChange={(e) => setEntrada(e.target.value)} 
      />
      <input 
        type='button' 
        value={'Buscar'} 
        onClick={chamada} 
      /><br /><br />
      
      <b>Cep: </b>{posts.cep}<br />
      <b>Logradouro: </b>{posts.logradouro} <br />
      <b>Estado: </b>{posts.estado || posts.uf} <br />
    </>
  );
}

export { Posts };