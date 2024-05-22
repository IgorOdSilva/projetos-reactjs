import { Link } from "react-router-dom"
import './style.css'

function MainHome(){
    return(
        <main>
            <div className="containerMain">
                <h1>Escolha qual projeto deseja ver!</h1>
                <div className="projetos">
                    <button className="linkProjetos"><Link to="projeto01">Projeto01 - Lista de Tarefas</Link></button>
                    <button className="linkProjetos"><Link to="projeto02">Projeto02 - Contador</Link></button>
                    <button className="linkProjetos"><Link to="projeto03">Projeto03 - Relógio Digital</Link></button>
                    <button className="linkProjetos"><Link to="projeto04">Projeto04 - Conversor de Moedas</Link></button>
                    <button className="linkProjetos"><Link to="projeto05">Projeto05 - Calculadora</Link></button>
                    <button className="linkProjetos"><Link to="projeto06">Projeto06 - Galeria de Imagens</Link></button>
                    <button className="linkProjetos"><Link to="projeto07">Projeto07 - Busca Filmes</Link></button>
                    <button className="linkProjetos"><Link to="projeto08">Projeto08 - Lista de Contatos</Link></button>
                    <button className="linkProjetos"><Link to="projeto09">Projeto09 - Cronometro</Link></button>
                    <button className="linkProjetos"><Link to="projeto10">Projeto10 - Quiz - League of Legends</Link></button>
                </div>
            </div>
        </main>
    )
}

export default MainHome