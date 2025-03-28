import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-blue-600">Thony</span>
          </h1>
          <p className="text-xl mb-6">
            Full Stack Developer & UI/UX Designer
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a 
              href="https://github.com/thony32" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
            >
              GitHub
            </a>
            <a 
              href="/resume.pdf" 
              download 
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600">
            <Image 
              src="/profile.jpg" 
              alt="Thony Profile" 
              width={500} 
              height={500} 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;