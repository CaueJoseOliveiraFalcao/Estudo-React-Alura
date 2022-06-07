import React, { Component } from "react";

export default class FormNota extends Component {
    render() {
        return (
            <form>
                <input type='text' placeholder='Titulo' />
                <textarea placeholder='Escreva sua nota'></textarea>
                <button>Criar Nota</button>
            </form>
        )
    }
}