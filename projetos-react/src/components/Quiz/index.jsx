import React, { useState } from 'react'; 
import './style.css'

const perguntas = [ 
  { 
    pergunta: 'Qual desses personagens é Cego?', 
    opcoes: ['Teemo', 'Jax', 'Lee Sin', 'Sona'], 
    resposta: 'Lee Sin' 
  }, 
  { 
    pergunta: 'Qual é o papel principal de "Soraka" no jogo?', 
    opcoes: ['Atirador', 'Suporte', 'Caçador', 'Top'], 
    resposta: 'Suporte' 
  }, 
  { 
    pergunta: 'Quem é irmã de VI', 
    opcoes: ['Caitlyn', 'Tristana', 'Vayne', 'Jinx'], 
    resposta: 'Jinx' 
  } 
]; 

function Quiz() { 
  const [indicePergunta, setIndicePergunta] = useState(0); 
  const [respostas, setRespostas] = useState([]); 
  const [resultado, setResultado] = useState(null); 

  const responder = (respostaSelecionada) => { 
    setRespostas(prevRespostas => [...prevRespostas, respostaSelecionada]); // Usando a função de retorno de chamada
    if (indicePergunta + 1 < perguntas.length) { 
      setIndicePergunta(prevIndice => prevIndice + 1); 
    } else { 
      setIndicePergunta(prevIndice => prevIndice + 1); 
      calcularResultado(); // Chama calcularResultado após a atualização completa do estado de respostas
    } 
  };   

  const calcularResultado = () => { 
    let pontuacao = 0; 
    for (let i = 0; i < perguntas.length; i++) { 
      // Verifica se a resposta e a resposta correta não são nulas e estão definidas
      if (respostas[i] && perguntas[i].resposta) { 
        // Verifica se as respostas são iguais, considerando a comparação de tipo
        if (respostas[i] === perguntas[i].resposta) { 
          pontuacao++; 
        } 
      } else {
        // Lida com respostas nulas ou indefinidas
        console.error(`Resposta ou resposta correta para a pergunta ${i} está faltando ou é nula.`);
      }
    } 
    // Define o resultado após a conclusão do loop
    setResultado(pontuacao); 
  }; 
  

  const reiniciarQuiz = () => { 
    setIndicePergunta(0); 
    setRespostas([]); 
    setResultado(null); 
  }; 

  return ( 
    <div id="quiz-container"> 
      {resultado !== null ? ( 
        <div id="result"> 
          <h2 id="quiz-title">Resultado do Quiz</h2> 
          <p>Você acertou {resultado} de {perguntas.length} perguntas!</p> 
          <button id="restart-button" onClick={reiniciarQuiz}>Reiniciar Quiz</button> 
        </div> 
      ) : ( 
        <div> 
          <h2 id="quiz-title">Pergunta {indicePergunta + 1}</h2> 
          <p id="question">{perguntas[indicePergunta].pergunta}</p> 
          <ul className='lista-quiz'> 
            {perguntas[indicePergunta].opcoes.map((opcao, index) => ( 
              <li key={index} onClick={() => responder(opcao)} className='item-quiz'> 
                {opcao} 
              </li> 
            ))} 
          </ul> 
        </div> 
      )} 
    </div> 
  ); 
} 

export default Quiz;
