import React, { useState, useEffect } from 'react'; 
import './style.css'

  function ConversorDeMoedas() { 

  const [deMoeda, setDeMoeda] = useState('');
  const [paraMoeda, setParaMoeda] = useState('');
  const [quantidade, setQuantidade] = useState(0);
  const [resultado, setResultado] = useState('');
  const [moedas, setMoedas] = useState([]);

  useEffect(() => {
    
    const fetchMoedas = async () => {
      try {
       
        fetch('https://api.exchangeratesapi.io/latest') 

      .then(response => response.json()) 

      .then(data => { 

        setMoedas([...Object.keys(data.rates)]); 

      }) 
      } catch (error) {
        console.error('Erro ao buscar moedas:', error);
      }
    };

    fetchMoedas();
  }, []);

    const converterMoeda = () => { 

    fetch(`https://api.exchangeratesapi.io/latest?base=${deMoeda}&symbols=${paraMoeda}`) 

      .then(response => response.json()) 

      .then(data => { 

        const taxaDeCambio = data.rates[paraMoeda]; 

        setResultado(quantidade * taxaDeCambio); 

      }) 

      .catch(error => console.error('Erro ao converter moeda:', error)); 

  }; 

  return (
    <div>
      <h2>Conversor de Moedas</h2>

      <div>
        <label>De:</label>
        <select value={deMoeda} onChange={(e) => setDeMoeda(e.target.value)}>
          {moedas.map(moeda => (
            <option key={moeda} value={moeda}>{moeda}</option>
          ))}
        </select>
        <input type="number" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
      </div>

      <div >
        <label>Para:</label>
        <select value={paraMoeda} onChange={(e) => setParaMoeda(e.target.value)}>
          {moedas.map(moeda => (
            <option key={moeda} value={moeda}>{moeda}</option>
          ))}
        </select>
        <button onClick={converterMoeda}>Converter</button>
      </div>

      <div>
        <h3>Resultado:</h3>
        <p>{resultado}</p>
      </div>
    </div>
  );
}

  
export default ConversorDeMoedas; 