import React from "react";
import Navbar from "../components/Navbar";

const Services = () => {
  const features = [
    {
      name: "Oil Change Service",
      description:
        "Ensure smooth engine performance with regular oil changes. We use high-quality oil and filters to maintain your vehicle’s longevity and efficiency.",
    },
    {
      name: "Brake Inspection & Repair",
      description:
        "Our certified technicians inspect, repair, or replace your brake pads and rotors, ensuring your safety with top-notch brake services.",
    },
    {
      name: "Tire Rotation & Alignment",
      description:
        "Enhance your vehicle’s handling and extend tire life with our tire rotation and alignment services, providing optimal balance and performance.",
    },
    {
      name: "Battery Replacement",
      description:
        "Get your vehicle back on the road quickly with our battery testing and replacement services. We install durable batteries that keep your car running smoothly.",
    },
    {
      name: "Scheduled Maintenance",
      description:
        "Keep your vehicle in peak condition with manufacturer-recommended scheduled maintenance, including fluid checks, filter replacements, and system diagnostics.",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="overflow-hidden bg-white py-1 sm:py-1">
        <div className="mx-auto max-w-7xl px-1 lg:px-1">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-3 gap-y-5 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-1 lg:pt-2">
              <div className="lg:max-w-lg">
                <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Services by Engine-Clinic
                </p>

                <dl className="mt-4 max-w-xl space-y-4 text-base leading-6 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <li>{feature.name}</li>
                      </dt>
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              alt="Product screenshot"
              src="https://img.freepik.com/free-photo/male-mechanics-working-together-car-shop_23-2150376968.jpg?w=996&t=st=1729264938~exp=1729265538~hmac=f7bc07ab0f5066a2198e96f89a03df45bf171bdc9b7176c9036007ee3f172a7f"
              width={2500}
              height={1500}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
