import { useEffect } from 'react';
import fachada from '../../assets/images/home-banner.webp';

import './style.css';

export default function QuemSomos() {
  useEffect(() => {
    document.title = 'GB Zinc Plating | About Us';
  }, []);

  return (
    <>
      <div className="qs-container">
        <div className="qs-img">
          <img src={fachada} alt="Fachada da GB Zincagem" />
        </div>
        <div className="qs-txt">
          <h2>Our Story</h2>
          <h4>Protection and Quality for Your Metal since 1986</h4>
          <p>
            With many years of experience in the galvanization market,
            constantly improving our plating and control technologies, we are a
            reference in protective treatments. We serve the following segments:
          </p>
          <ul>
            <li>Wind (onshore and offshore)</li>
            <li>Solar</li>
            <li>Aerospace</li>
            <li>Oil and Gas</li>
            <li>Construction</li>
            <li>Fasteners</li>
            <li>White Goods</li>
            <li>Nuclear Power</li>
            <li>Oil Industry</li>
            <li>Telecommunications</li>
          </ul>
          <p>
            Approved by major market players, we work with the best suppliers of
            raw materials, processes, and equipment technologies. We have a
            highly trained workforce, in-house laboratory control, and
            certifications and licenses from public agencies, as well as a
            quality management system certified according to ISO 9001 standard.
          </p>
        </div>
      </div>
    </>
  );
}
