import { useEffect } from 'react';
import fachada from '../../assets/images/home-banner.webp';

import './style.css';

export default function QuemSomos() {
  useEffect(() => {
    document.title = 'GB Zincagem | Quem Somos';
  }, []);

  return (
    <>
      <div className="qs-container">
        <div className="qs-img">
          <img src={fachada} alt="Fachada da GB Zincagem" />
        </div>
        <div className="qs-txt">
          <h2>Nossa história</h2>
          <h4>Proteção e qualidade para o seu metal desde 1986</h4>
          <p>
            Com muitos anos de mercado atuante em galvanoplastia, sempre
            aprimorando nossos banhos e tecnologias de controles. Somos
            referência em tratamentos protetivos. Atendemos aos segmentos:
          </p>
          <ul>
            <li>Eólico (onshore e offshore)</li>
            <li>Solar</li>
            <li>Aéreo</li>
            <li>Óleo e gás</li>
            <li>Construção civil</li>
            <li>Fixadores</li>
            <li>Linha branca</li>
            <li>Eletro-nuclear</li>
            <li>Petrolífera</li>
            <li>Telecomunicações</li>
          </ul>
          <p>
            Homologada pelos principais players de mercado, trabalhamos com os
            melhores fornecedores em matérias-primas, em processos e tecnologias
            em equipamentos. Possuímos um contingente altamente treinado,
            controle laboratorial (próprio), com as certificações e licenças de
            órgãos públicos e sistema de gestão de qualidade certificado com
            base na norma NBR ISO 9001.
          </p>
          <p>
            Possuímos todos os certificados e licenças requeridas para o total
            funcionamento dentro de todos os cuidados com o meio ambiente e
            controles governamentais. Nossa central de tratamento de efluentes
            conta com total estrutura homologada pelos padrões da Cetesb.
          </p>
        </div>
      </div>
    </>
  );
}
