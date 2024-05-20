import { useEffect, useState } from "react";
import "./Carousels.css";

const slides = [
  {
    image: "https://picsum.photos/id/1/1920/1080",
  },
  {
    image: "https://picsum.photos/id/2/1920/1080",
  },
  {
    image: "https://picsum.photos/id/3/1920/1080",
  },
  {
    image: "https://picsum.photos/id/4/1920/1080",
  },
];

const carouselText = {
  title: "Lorem ipsum dolor sit amet",
  body: "consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

const Carousels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const imageDotSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((item, index) => (
          <div className="carouselItem" key={index}>
            <img src={item.image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="carouselTextContainer">
        <div className="carouselBorder" />
        <div>
          <p className="textHeader">{carouselText.title}</p>
          <p className="textBody">{carouselText.body}</p>
        </div>
      </div>
      <button className="carouselContactButton">
        <p>İletişime Geç</p>
      </button>
      <div className="indexOverlay">
        {Array.from({ length: slides.length }).map((element, index) => (
          <div
            key={index}
            onClick={() => imageDotSlide(index)}
            className={`imageDot ${index === currentIndex && "activeİmage"}`}
          >
            <div />
          </div>
        ))}
      </div>
      <button className="carouselButton prev" onClick={prevSlide}>
        <img src="./Vector.svg" />
      </button>
      <button className="carouselButton next" onClick={nextSlide}>
        <img src="./Vector.svg" />
      </button>
    </div>
  );
};

export default Carousels;
