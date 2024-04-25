import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import './Carousel.css';

const Carousel = ({ images }) =>
{


  const [currentImage, setCurrentImage] = useState(0);
  const timeoutRef = useRef(null);
  const next = () =>
  {
    setCurrentImage((prev) => (prev + 1) % images.length);

  }

  useEffect(() =>
  {
    timeoutRef.current = setTimeout(next, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, [timeoutRef.current]);

  return (
    <div className="carousel" ref={timeoutRef}>
      <AnimatePresence initial={false}  >
        <motion.img
          key={currentImage}
          src={images[currentImage].src}
          alt={images[currentImage].alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="carousel-image"
        />
      </AnimatePresence>
    </div>
  );
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Carousel;
