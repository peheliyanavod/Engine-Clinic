import React from "react";
import Navbar from "../components/Navbar";
import Logo from "../assets/Engine Clinic.png";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img
            src={Logo}
            alt="Engine-Clinic Logo"
            className="w-24 h-24 rounded-full shadow-lg mx-auto"
          />
          <div className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                Get in Touch with Engine-Clinic. Have questions or need
                assistance? Our dedicated team is here to help. Whether you're
                booking a service or have inquiries about vehicle maintenance,
                we’re just a call or email away. Visit us at our location or
                reach out through the contact form, and we'll get back to you
                promptly. Engine-Clinic is always ready to assist you with all
                your automotive needs.
              </p>
            </blockquote>

            {/* Contact Details Section */}
            <div className="mt-12 text-center space-y-8 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-8">
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-12 h-12 text-indigo-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12.75V10.5c0-4.418-3.582-8-8-8s-8 3.582-8 8v2.25m0 0A3.75 3.75 0 0012 16.5v5.25M5.25 12.75h13.5"
                  />
                </svg>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  Address
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Engine-Clinic, Main street, Colombo 10
                </p>
              </div>

              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-12 h-12 text-indigo-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25l-7.5 4.5L6 8.25m7.5-4.5v9m0 0l7.5-4.5m-7.5 4.5L6 8.25"
                  />
                </svg>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  Email
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  support@engine-clinic.com
                </p>
              </div>

              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-12 h-12 text-indigo-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 4.5l16.5 6m0 0l-16.5 6m16.5-6V5.25a2.25 2.25 0 00-2.25-2.25h-13.5A2.25 2.25 0 002.25 5.25v13.5A2.25 2.25 0 004.5 21h13.5a2.25 2.25 0 002.25-2.25V13.5m-16.5-3l16.5-6"
                  />
                </svg>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  Phone
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  +94 (47) 143-6739
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
