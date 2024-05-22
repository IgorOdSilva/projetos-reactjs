import React, { useState } from 'react'; 
import './style.css'

function GaleriaDeImagens() { 
      const [imagens, setImagens] = useState([
        
      ]);
    
      const [novaImagemUrl, setNovaImagemUrl] = useState('');
    
      const adicionarImagem = () => {
        if (novaImagemUrl) {
          setImagens([...imagens, novaImagemUrl]);
          setNovaImagemUrl('');
        }
      };
    
      return (
        <div>
          <h2>Galeria de Imagens</h2>
          <p>Cole o link da Imagem que deseja adicionar no campo abaixo</p>
          <div>
            {imagens.map((imagem, index) => (
              <img key={index} src={imagem} alt={`Imagem ${index + 1}`} style={{ margin: '10px' }}  className='galeriaImg'/>
            ))}
          </div>
          <div>
            <input
              type="text"
              placeholder="Digite a URL da nova imagem"
              value={novaImagemUrl}
              onChange={(e) => setNovaImagemUrl(e.target.value)}
              style={{ marginRight: '10px' }}
            />
            <button onClick={adicionarImagem}>Adicionar Imagem</button>
          </div>
        </div>
      );
    }


  

export default GaleriaDeImagens; 