import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import escritorio1 from '../../assets/images/escritorio-01.webp';
import escritorio2 from '../../assets/images/escritorio-02.webp';
import escritorio3 from '../../assets/images/escritorio-03.webp';
import escritorio4 from '../../assets/images/escritorio-04.webp';

export default function CarrosselContato() {
  const altTxt = 'Fotos do nosso escritório';
  const images = [
    { src: escritorio1, alt: altTxt },
    { src: escritorio2, alt: altTxt },
    { src: escritorio3, alt: altTxt },
    { src: escritorio4, alt: altTxt },
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
