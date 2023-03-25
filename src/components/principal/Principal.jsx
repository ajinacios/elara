import React from "react";
import '../../principal.css'
import CompMain from '../compMain/CompMain'


export default function Principal() {
    return(
        <div>
            <header>
                <div className="figura-header" id="header-left"></div>
                <div className="center-header">
                    <h2>Tribunal de Contas do Estado do Amazonas</h2>
                    <h2>Diretoria de Controle Externo de Tecnologia da Informação</h2>
                </div>
                <div className="figura-header" id="header-right"></div>
            </header>
            <CompMain/>
        </div>
    )
}