import { useState, useEffect, ReactElement, ReactNode } from 'react';
import { ReactComponent as ArrowLeft } from '../../assets/image/arrow_left.svg';
import { ReactComponent as ArrowRight } from '../../assets/image/arrow_right.svg';
import mod from './Carousel.module.scss';
import Pagination from './Pagination/Pagination';

type CarouselProps = {
  children: ReactNode[];
  quantitySlides: number;
  paginationQuantity?: number;
  pagination: boolean;
  pt?: number;
  pb?: number;
};

const Carousel: React.FC<CarouselProps> = ({
  children,
  quantitySlides,
  pagination,
  paginationQuantity,
  pt,
  pb,
}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [paginationIndex, setPaginationIndex] = useState(0);
  const slides = children.length;
  const paglength = paginationQuantity ? paginationQuantity : 0;

  useEffect(() => {
    if (slideIndex >= slides - 1 && quantitySlides === 2) {
      setSlideIndex(slideIndex - (slides - 1));
    }

    if (slideIndex >= slides - 2 && quantitySlides === 3) {
      setSlideIndex(slideIndex - (slides - 2));
    }

    if (slideIndex >= slides) {
      setSlideIndex(slideIndex - slides);
    }

    if (slideIndex < 0 && quantitySlides !== 2 && quantitySlides !== 3) {
      setSlideIndex(slideIndex + slides);
    }

    if (slideIndex < 0 && quantitySlides === 2) {
      setSlideIndex(slideIndex + (slides - 1));
    }

    if (slideIndex < 0 && quantitySlides === 3) {
      setSlideIndex(slideIndex + (slides - 2));
    }
  }, [slideIndex, slides, quantitySlides]);

  useEffect(() => {
    if (paginationIndex === paglength) {
      setPaginationIndex(0);
    }
    if (paginationIndex < 0) {
      setPaginationIndex(paglength - 1);
    }
  }, [paginationIndex, slides, quantitySlides]);

  const clickLeftArrow = () => {
    slideIndexMove('left');
    paginationIndexMove('left');
  };

  const clickRightArrow = () => {
    slideIndexMove('right');
    paginationIndexMove('right');
  };

  const slideIndexMove = (direction: string) => {
    if (direction === 'right') {
      setSlideIndex(slideIndex + 1);
    }
    if (direction === 'left') {
      setSlideIndex(slideIndex - 1);
    }
  };

  const paginationIndexMove = (direction: string) => {
    if (direction === 'right') {
      setPaginationIndex(paginationIndex + 1);
    }
    if (direction === 'left') {
      setPaginationIndex(paginationIndex - 1);
    }
  };

  return (
    <div className="container">
      <div className={mod.slider}>
        <div
          className={mod.wrapper}
          style={{
            transform: `translateX(${slideIndex * -(100 / quantitySlides)}%)`,
            padding: `${pt}px 0 ${pb}px 0`,
          }}>
          {children}
        </div>

        {pagination === false ? (
          <div className={mod.buttonsMove}>
            <button onClick={clickLeftArrow} className={`${mod.prev} ${mod.button}`}>
              <ArrowLeft />
            </button>
            <button onClick={clickRightArrow} className={`${mod.next} ${mod.button}`}>
              <ArrowRight />
            </button>
          </div>
        ) : (
          <div className={mod.buttonsWithPagination}>
            <button onClick={clickLeftArrow} className={`${mod.prev} ${mod.button_pagination}`}>
              <ArrowLeft className={mod.arrow} />
            </button>
            <Pagination
              quantity={paginationQuantity || 0}
              paginationIndex={paginationIndex}
              setPaginationIndex={setPaginationIndex}
              slideIndex={slideIndex}
              setSlideIndex={setSlideIndex}
            />
            <button onClick={clickRightArrow} className={`${mod.next} ${mod.button_pagination}`}>
              <ArrowRight className={mod.arrow} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
