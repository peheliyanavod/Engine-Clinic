import React from "react";
import Navbar from "../components/Navbar";
import About_image from "../assets/About.png";

const services = [
  { name: "Oil Change" },
  { name: "Brake Inspection & Repair" },
  { name: "Tire Rotation & Alignment" },
  { name: "Battery Replacement" },
  { name: "Scheduled Maintenance" },
];

const stats = [
  { name: "Completed Services", value: "500+" },
  { name: "Happy Clients", value: "1200+" },
  { name: "Years of Experience", value: "10+" },
  { name: "Awards", value: "15+" },
];

const About = () => {
  return (
    <div>
      <Navbar />

      <div className="relative isolate overflow-hidden bg-gray-900 py-20 sm:py-24">
        <img
          alt="About Engine-Clinic"
          src={About_image}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center lg:text-left lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              About Us
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Committed to Excellence in Vehicle Care. Engine-Clinic was founded
              with one goal in mind: to offer the best vehicle repair services
              with modern conveniences like online reservations. With years of
              experience in the industry, we’ve built a reputation for trust,
              quality, and customer satisfaction. Our team of skilled mechanics
              is dedicated to providing expert care for every vehicle, ensuring
              your peace of mind on the road. Learn more about our mission,
              values, and the team that drives our commitment to excellence.
            </p>
          </div>

          <div className="mt-12 max-w-2xl lg:max-w-none lg:mx-0">
            <h3 className="text-xl font-semibold text-white mb-8 lg:mb-10">
              Our Services
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap lg:gap-10">
              {services.map((service) => (
                <h3
                  key={service.name}
                  className="text-lg font-semibold text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {service.name}
                </h3>
              ))}
            </div>
          </div>

          <div className="mt-16 sm:mt-20">
            <h3 className="text-xl font-semibold text-white mb-8 lg:mb-10">
              Our Achievements
            </h3>
            <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.name}
                  className="flex flex-col items-center lg:items-start"
                >
                  <dt className="text-base leading-7 text-gray-300">
                    {stat.name}
                  </dt>
                  <dd className="text-3xl font-bold leading-9 tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
