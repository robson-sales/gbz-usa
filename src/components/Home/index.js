import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import usaFlag from '../../assets/images/flag-usa.png';
import braFlag from '../../assets/images/flag-brazil.png';
import './style.css';

export default function Home() {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contato');
  };

  const title = 'GB Zinc Plating | Zinc plating and hot dip coatings';
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <div className="banner">
      <div className="flags">
        <img src={usaFlag} />
        <img src={braFlag} />
      </div>
      <h2>We are about to arrive in Florida</h2>
      <h1>We can help you protect your metals</h1>
      <div className="text-paragraph">
        <p>
          Founded in 1986, our company is a leader in the electroplating market
          in Brazil, offering protection and quality for metals. We serve a wide
          range of sectors, such as wind, solar, aviation, oil and gas, civil
          construction, fasteners, white goods, electro-nuclear, oil and
          telecommunications.
        </p>
        <button type="submit" onClick={handleContact} className="button">
          Contact us
        </button>
      </div>
    </div>
  );
}
