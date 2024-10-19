import React, { useState, useEffect } from "react";

const images = [
  {
    url: "https://img.freepik.com/free-photo/male-mechanics-working-together-car-shop_23-2150376968.jpg?w=996&t=st=1729264938~exp=1729265538~hmac=f7bc07ab0f5066a2198e96f89a03df45bf171bdc9b7176c9036007ee3f172a7f",
    alt: "Vehicle repair service 1",
    title: "Expert Repair Services",
    description:
      "Certified mechanics providing top-notch vehicle repair and maintenance.",
  },
  {
    url: "https://img.freepik.com/free-photo/male-female-mechanics-working-shop-car_23-2150170020.jpg?t=st=1729270101~exp=1729273701~hmac=c8226276562e166bd254caa5c8a0aee379c58050ad833151bf6e75f2704ffa0b&w=996",
    alt: "Vehicle repair service 2",
    title: "Team of Professionals",
    description:
      "Our dedicated team is committed to ensuring your vehicle is in perfect shape.",
  },
  {
    url: "https://img.freepik.com/free-photo/mechanic-man-repairing-car_1150-6496.jpg?size=626&ext=jpg&ga=GA1.1.389748410.1723200504&semt=ais_hybrid",
    alt: "Vehicle repair service 3",
    title: "Advanced Tools & Equipment",
    description:
      "Using state-of-the-art tools to deliver quick and reliable repair solutions.",
  },
];

const HomeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-between z-10">
        <button
          onClick={handlePrev}
          className="text-white text-4xl bg-gray-900 bg-opacity-50 p-4 rounded-full hover:bg-opacity-75"
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          className="text-white text-4xl bg-gray-900 bg-opacity-50 p-4 rounded-full hover:bg-opacity-75"
        >
          &#8594;
        </button>
      </div>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <img
        src={images[currentIndex].url}
        alt={images[currentIndex].alt}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-10 left-0 right-0 text-center text-white z-10">
        <h2 className="text-3xl md:text-5xl font-bold">
          Welcome to Engine-Clinic !
        </h2>
      </div>
      <div className="absolute bottom-12 left-0 right-0 text-center text-white z-10">
        <h2 className="text-3xl md:text-5xl font-bold">
          {images[currentIndex].title}
        </h2>
        <p className="mt-4 text-lg md:text-xl">
          {images[currentIndex].description}
        </p>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;
