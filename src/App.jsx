import { useState } from "react";
import Restaurante from "./assets/hashtaurante.webp";
import './App.css';
import { Navegacao } from "./Navegacao";
import { ItemCardapio } from "./ItemCardapio";
import { pratosPrincipais } from "./cardapio";
import { sobremesas } from "./cardapio";
import { bebidas } from "./cardapio";


export function App(){
  const [paginaSelecionada, attPagSelec] = useState(0);
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];
  return <>
    <img src={Restaurante} alt="" className="capa"/>
    <Navegacao attPagSelec={attPagSelec}></Navegacao> 
    <div className="menu">
      {paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem}></ItemCardapio>)}
    </div>
    </>
}