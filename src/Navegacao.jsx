export function Navegacao(props){
    return <div className="navegacao">
        <input type="radio" name="opcao-pagina" id="pagina-0" defaultChecked onClick={() => props.attPagSelec(0)}/>
        <label htmlFor="pagina-0">Pratos Principais</label>
        <input type="radio" name="opcao-pagina" id="pagina-1" defaultChecked onClick={() => props.attPagSelec(1)}/>
        <label htmlFor="pagina-1">Sobremesas</label>
        <input type="radio" name="opcao-pagina" id="pagina-2" defaultChecked onClick={() => props.attPagSelec(2)}/>
        <label htmlFor="pagina-2">Bebidas</label>
    </div>
}