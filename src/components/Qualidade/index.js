import { useEffect } from 'react';
import './style.css';
import certificateEn from '../../assets/docs/GB Zincagem - ISO 9001.2015 - en.pdf';
import certificatePt from '../../assets/docs/GB Zincagem - ISO 9001.2015 - pt-br.pdf';
import CarrosselQualidade from './Carrossel';

export default function Qualidade() {
  useEffect(() => {
    document.title = 'GB Zincagem | Qualidade';
  }, []);

  return (
    <>
      <div className="qualidade-container">
        <div className="qualidade-img">
          <CarrosselQualidade />
        </div>
        <div className="qualidade-txt">
          <h2>Qualidade</h2>
          <h4>
            Somos certificados ISO 9001 e homologados nos padrões Petrobras,
            Eólica, Aérea e Solar
          </h4>
          <p>
            O processo de qualidade é fundamental para qualquer empresa que
            deseja se destacar em um mercado competitivo, e isso não é diferente
            aqui na GB Zincagem. Oferecemos serviços de galvanoplastia com
            qualidade e eficiência, com equipamentos modernos e matéria-prima de
            primeira linha.
          </p>
          <p>
            Nossos processos de qualidade garantem que nossos serviços estejam
            de acordo com as normas e padrões estabelecidos pela indústria.
            Monitoramos continuamente nossos processos, identificando pontos
            fracos e implementando melhorias para garantir serviços cada vez
            mais eficientes e eficazes.
          </p>
          <p>
            Nossa equipe é altamente qualificada para atuar no controle de todos
            os pontos do processo. Mantemos nossa equipe de colaboradores
            atualizados e em contínuo programa de capacitação.
          </p>
          <p>
            Possuímos um laboratório químico próprio completo, para realização
            de análises (químicas e físico-química), para a análises periódicas
            em nossos banhos, ensaios de corrosão (Salt Spray), emissão de
            certificados de qualidade e controle gráfico de desidrogenização.
          </p>
          <div className="certificate">
            <div className="certificate-download">
              <a href={certificateEn} download="Certificado EN">
                Baixar Certificado (EN)
              </a>
            </div>
            <div className="certificate-download">
              <a href={certificatePt} download="Certificado PT-BR">
                Baixar Certificado (PT-BR)
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
