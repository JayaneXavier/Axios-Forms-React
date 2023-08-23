import {useEffect,useState} from 'react';

export default function Formulario({ aoPublicar } ) {

    const [titulo, setTitulo] = useState ('');
    const [texto, setTexto] = useState ('');

    function aoAlterar(evento){
        setTexto(evento.target.value);
        console.log(evento.target.value)
    }

    function aoAterarTitulo(evento){
        setTitulo(titulo,texto);
    }

    function aoClicar(){
        aoPublicar(titulo,texto);
    }


    return (
        <form className="formulario">
            <label>Titulo</label>
            <input type="text" onChange={aoAterarTitulo}></input>
            <label>Texto</label>
            <textarea onChange={aoAlterar}></textarea>
            <button type="button" onClick={aoClicar}>Publicar</button>
        </form>
    );
}