import { useEffect } from 'react';
import './style.css';
import certificateEn from '../../assets/docs/GB Zincagem - ISO 9001.2015 - en.pdf';
import CarrosselQualidade from './Carrossel';

export default function Qualidade() {
  useEffect(() => {
    document.title = 'GB Zinc Plating | Qua';
  }, []);

  return (
    <>
      <div className="qualidade-container">
        <div className="qualidade-img">
          <CarrosselQualidade />
        </div>
        <div className="qualidade-txt">
          <h2>Quality</h2>
          <h4>
            We are ISO 9001 certified and approved according to Petrobras, Wind,
            Aerospace, and Solar standards
          </h4>
          <p>
            The quality process is essential for any company that aims to stand
            out in a competitive market, and it`&apos;`s no different here at GB
            Zincagem. We provide galvanoplasty services with quality and
            efficiency, using modern equipment and top-notch raw materials.
          </p>
          <p>
            Our quality processes ensure that our services comply with
            industry-established norms and standards. We continuously monitor
            our processes, identifying weak points, and implementing
            improvements to ensure increasingly efficient and effective
            services.
          </p>
          <p>
            Our team is highly qualified to oversee all aspects of the process.
            We keep our employees up-to-date and engaged in continuous training
            programs.
          </p>
          <p>
            We have a complete in-house chemical laboratory for performing
            chemical and physicochemical analyses, periodic assessments of our
            baths, corrosion tests (Salt Spray), issuing quality certificates,
            and graphical control of dehydrogenation.
          </p>
          <div className="certificate">
            <div className="certificate-download">
              <a href={certificateEn} download="Certificado EN">
                Download Certificate (EN)
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
