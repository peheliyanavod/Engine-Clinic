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

      <div className="relative isolate overflow-hidden bg-gray-900 py-20 sm:py-15">
        <img
          alt=""
          src={About_image}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              About Us
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Committed to Excellence in Vehicle Care Engine-Clinic was founded
              with one goal in mind: to offer the best vehicle repair services
              with modern conveniences like online reservations. With years of
              experience in the industry, we’ve built a reputation for trust,
              quality, and customer satisfaction. Our team of skilled mechanics
              is dedicated to providing expert care for every vehicle, ensuring
              your peace of mind on the road. Learn more about our mission,
              values, and the team that drives our commitment to excellence.{" "}
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {services.map((sevice) => (
                <h3 key={sevice.name}>{sevice.name}</h3>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">
                    {stat.name}
                  </dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
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
