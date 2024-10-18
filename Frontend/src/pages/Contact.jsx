import React from "react";
import Navbar from "../components/Navbar";
import Logo from "../assets/Logo.png";

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
            alt=""
            className="w-24 h-24 rounded-full shadow-lg mx-auto"
          />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                Get in Touch with Engine-Clinic Have questions or need
                assistance? Our dedicated team is here to help. Whether you're
                booking a service or have inquiries about vehicle maintenance,
                we’re just a call or email away. Visit us at our location or
                reach out through the contact form, and we'll get back to you
                promptly. Engine-Clinic is always ready to assist you with all
                your automotive needs.
              </p>
            </blockquote>
          </figure>
        </div>
      </section>
    </div>
  );
};

export default Contact;
