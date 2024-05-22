import React, { useState } from 'react'; 
import './style.css'

function BuscaDeFilmes() { 

  const [query, setQuery] = useState(''); 
  const [filmes, setFilmes] = useState([]); 
  const [erro, setErro] = useState(''); 

  const buscarFilmes = async () => { 
    try { 
      const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=c725dcf8`); 
      const data = await response.json(); 
      if (data.Response === 'True') { 
        setFilmes(data.Search); 
        setErro(''); 
      } else { 
        setFilmes([]); 
        setErro(data.Error); 
      } 
    } catch (error) { 
      console.error('Erro ao buscar filmes:', error); 
      setErro('Erro ao buscar filmes. Por favor, tente novamente mais tarde.'); 
    } 
  }; 

  const handleChange = (event) => { 
    setQuery(event.target.value); 
  }; 

  const handleSubmit = (event) => { 
    event.preventDefault(); 
    buscarFilmes(); 
  }; 

  return ( 
    <div> 
      <h2 id="title">Busca de Filmes</h2> 
      <form id="search-form" onSubmit={handleSubmit}> 
        <input 
          id="search-input"
          type="text" 
          value={query} 
          onChange={handleChange} 
          placeholder="Digite o nome do filme" 
        /> 
        <button id="search-button" type="submit">Buscar</button> 
      </form> 
      {erro && <p id="error-message">{erro}</p>} 
      <div id="movie-container"> 
        {filmes.map((filme) => ( 
          <div key={filme.imdbID} className="movie-card"> 
            <h3>{filme.Title}</h3> 
            <img src={filme.Poster} alt={filme.Title} /> 
          </div> 
        ))} 
      </div> 
    </div> 
  ); 
} 

export default BuscaDeFilmes;
