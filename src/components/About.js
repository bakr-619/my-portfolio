import React from 'react';

const About = () => {
  const skills = [
    'JavaScript', 'React', 'Next.js', 'Node.js', 
    'TypeScript', 'Tailwind CSS', 'Python', 'Django'
  ];

  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <p className="text-lg mb-6">
              I'm a passionate Full Stack Developer with expertise in creating 
              responsive and innovative web applications. With a strong background 
              in both frontend and backend technologies, I transform ideas into 
              elegant, efficient digital solutions.
            </p>
            <p className="text-lg">
              My goal is to build scalable and user-friendly applications that 
              solve real-world problems and provide exceptional user experiences.
            </p>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">My Skills</h3>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;