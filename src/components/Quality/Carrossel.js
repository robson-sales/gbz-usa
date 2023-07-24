import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import laboratorio1 from '../../assets/images/laboratorio-01.webp';
import laboratorio2 from '../../assets/images/laboratorio-02.webp';
import laboratorio3 from '../../assets/images/laboratorio-03.webp';
import laboratorio4 from '../../assets/images/laboratorio-04.webp';
import laboratorio5 from '../../assets/images/laboratorio-05.webp';
import laboratorio6 from '../../assets/images/laboratorio-06.webp';
import laboratorio7 from '../../assets/images/laboratorio-07.webp';
import laboratorio8 from '../../assets/images/laboratorio-08.webp';

export default function CarrosselQualidade() {
  const altTxt = 'Fotos do nosso laboratório';
  const images = [
    { src: laboratorio1, alt: altTxt },
    { src: laboratorio2, alt: altTxt },
    { src: laboratorio3, alt: altTxt },
    { src: laboratorio4, alt: altTxt },
    { src: laboratorio5, alt: altTxt },
    { src: laboratorio6, alt: altTxt },
    { src: laboratorio7, alt: altTxt },
    { src: laboratorio8, alt: altTxt },
  ];

  return (
    <Carousel
      images={images}
      isAutoPlaying={true}
      autoPlayInterval={3000}
      hasThumbnails={false}
      hasSizeButton={false}
      hasIndexBoard={false}
    />
  );
}
