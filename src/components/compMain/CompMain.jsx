import React from "react";
import '../../principal.css'


export default function CompMain() {
    return(
        <div>
            <main>
                <div className="fundo"></div>
                <div className="frente">
                    <div className="ajustediv"></div>
                    <h2>Inspeção na Secretaria de Finanças e Tecnologia da Informação do Município de Manaus - SEMEF</h2>
                    <div className="ajustediv"></div>
                    <div className="objeto">
                        <p><strong>Processo TCE nº:</strong> 11897/2022</p>
                        <p><strong>Órgão:</strong> Secretaria Municipal de Finanças e Tecnologia da Informação - SEMEF</p>
                        <p><strong>Objeto:</strong> Prestação de Contas Anual da Secretaria Municipal de Finanças e Tecnologia da Informação - SEMEF, de responsabilidade do Sr. Clécio da Cunha Freire, exercício de 2021.</p>
                        <p><strong>Responsáveis:</strong> Clécio da Cunha Freire, Secretário Municipal Finanças</p>
                        <p><strong>Relator:</strong> Conselheiro Ari Jorge Moutinho da Costa Júnior</p>
                        <p><strong>Assunto:</strong> Atendendo ao Despacho do Relator</p>
                    </div>
                    <div className="conteudo">
                        <a href="./docs/Matriz de planejamento SEMEF.pdf" target="_blank">Matriz de Planejamento</a>
                        <a href="https://protocolo.manaus.am.gov.br/proton/login.asp" target="_blank">Sistema SIGED</a>
                    </div>
                    <div className="conteudo">
                        <a href="./docs/PROCESSOS SOLICITADOS TCE.pdf" target="_blank">Processos a serem analizados</a>
                        <a href="docs/portaria_n__2_2023_gp_secex_diplaf.pdf" target="_blank">Portaria 2/2023</a>
                    </div>
                    <div className="conteudo">
                        <a href="docs/Solicitação 01 SEMEF.pdf" target="_blank">Solicitação de documentos à SEMEF</a>
                        <a href="docs/errata_n__01_2023_gp_secex_diplaf.pdf" target="_blank">Alteração da Portaria 2/2023</a>
                    </div>
                    <div className="contato">
                        <p><strong>Contato:</strong> amanda.fournier@manaus.am.gov.br</p>
                        <p><strong>Processo SEI:</strong> 15353/2022</p>
                        <p><strong>Situação:</strong> Aguardanado posição do Relator</p>
                    </div>
                </div>
            </main>
        </div>
    )
}