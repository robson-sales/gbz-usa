import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import { getTratamento } from './tratamentosItems';

export default function Tratamentos() {
  const { item } = useParams();
  const tratamento = getTratamento(item);

  useEffect(() => {
    document.title = `GB Zincagem | ${tratamento.title}`;
  }, [tratamento.title]);

  return (
    <>
      <div className="service-container">
        <div className="service-img">
          <img src={tratamento.image} alt="Imagem do tratamento" />
        </div>
        <div className="service-txt">
          <h1>{tratamento.title}</h1>
          <br />
          {tratamento.description.map((paragrafo, index) => (
            <p key={index}>{paragrafo}</p>
          ))}
        </div>
      </div>
    </>
  );
}
