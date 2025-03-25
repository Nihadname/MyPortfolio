import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Server, Menu, X, ChevronDown, Globe, Award, BookOpen } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import SkillBar from './components/SkillBar';
import Image1 from "./image/photo-1546410531-bb4caa6b424d.avif";
import image2 from "./image/photo-1519389950473-47ba0277781c.avif"
import image3 from "./image/photo-1518773553398-650c184e0bb3.avif";
import image4 from "./image/Screenshot (1455).png";
function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "E-commerce Backend API",
      description:
        "Developed a scalable REST API using ASP.NET Core, featuring user authentication, product management, and order processing.",
      technologies: [
        "ASP.NET Core",
        "Entity Framework Core",
        "SQL Server",
        "JWT",
      ],
      image:image3,
      projectLink: "https://github.com/Nihadname/SmartElectronicsApi",
    },
    {
      title: "School Management System",
      description:
        "Built a comprehensive backend system for managing student records, attendance, and grades using ASP.NET Core and PostgreSQL.",
      technologies: [
        "ASP.NET Core",
        "Entity Framework Core",
        "PostgreSQL",
        "Redis",
      ],
      image:Image1,
      projectLink: "https://github.com/Nihadname/EbuBridgeLmsSystem",
      SecondLink: "https://github.com/Nihadname/EduBridgeApi",
    },
    {
      title: "Car Rental API",
      description:
        "Designed and implemented a RESTful API for managing car rentals, including vehicle availability, booking, and payment processing.",
      technologies: [
        "ASP.NET Core",
        "Entity Framework Core",
        "SQL Server",
        "JWT",
      ],
      // Updated image: now depicts a car, making the project context clearer
      image:image4,
      projectLink: "https://github.com/TeymurDevv/OtoKiralama.API",
    },
    {
      title: "AI VSCode Extension",
      description:
        "Developed a VSCode extension that leverages AI-powered code assistance by integrating Deepsekk's technology, enhancing code suggestions, debugging, and refactoring directly within the editor.",
      technologies: ["TypeScript", "VSCode API", "Node.js", "Deepsekk"],
      image:image2,
      projectLink: "https://github.com/Nihadname/DeepSeekAiVsCodeExtension",
    },
    {
      title: "Full Auth Service for Internship",
      description:
        "Implemented a robust authentication service as part of an internship project, featuring secure user login functionality with refresh token support and comprehensive token management.",
      technologies: [
        "ASP.NET Core",
        "Entity Framework Core",
        "SQL Server",
        "JWT",
      ],
      // Updated image: reflects security and authentication themes (e.g., a padlock)
      image:
        "data:image/jpeg;base64,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",
      projectLink:
        "https://github.com/Nihadname/internIntelligence_userloginfunctionality",
    },
    {
      title: "Fiorello",
      description:
        "A beginner project developed using ASP.NET Core MVC. This flower selling website showcases basic e-commerce functionalities and modern web design.",
      technologies: ["ASP.NET Core", "MVC", "Entity Framework Core", "SQL Server"],
      image:
        "https://images.unsplash.com/photo-1498842812179-c81beecf902c?auto=format&fit=crop&q=80&w=1000",
      projectLink: "https://github.com/Nihadname/Fiorello",
    },
  ];
  


  const navLinks = ['about', 'projects', 'skills', 'contact'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors">
              Portfolio
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-blue-900 hover:text-blue-700 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <a
                  key={link}
                  href={`#${link}`}
                  className="text-blue-900 hover:text-blue-700 capitalize transition-colors relative group"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg p-4 transform transition-all duration-300">
              {navLinks.map(link => (
                <a
                  key={link}
                  href={`#${link}`}
                  className="block py-2 text-blue-900 hover:text-blue-700 capitalize transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072')] opacity-10 bg-cover bg-center bg-fixed"></div>
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-blue-800/50 rounded-full border border-blue-700/30 backdrop-blur-sm">
                <p className="text-blue-200">Backend Developer & Problem Solver</p>
              </div>
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Crafting Robust<br />
                <span className="bg-gradient-to-r from-blue-400 to-blue-200 text-transparent bg-clip-text">Backend Solutions</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 max-w-2xl leading-relaxed">
                I'm a passionate 16-year-old backend developer dedicated to creating efficient, scalable web applications. 
                With a strong foundation in modern technologies and a drive for excellence, I turn complex problems into elegant solutions.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <a 
                  href="#contact" 
                  className="group px-8 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
                >
                  <span className="relative z-10">Get in Touch</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a 
                  href="#projects" 
                  className="group px-8 py-3 bg-blue-800/30 text-white rounded-lg font-semibold hover:bg-blue-800/40 transition-all duration-300 border border-blue-700/50 backdrop-blur-sm"
                >
                  View Projects
                </a>
              </div>
              <div className="flex items-center gap-6">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-blue-800/30 p-3 rounded-full text-white hover:text-blue-200 transition-all duration-300 hover:bg-blue-800/50 backdrop-blur-sm border border-blue-700/30"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-blue-800/30 p-3 rounded-full text-white hover:text-blue-200 transition-all duration-300 hover:bg-blue-800/50 backdrop-blur-sm border border-blue-700/30"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="mailto:contact@example.com" 
                  className="bg-blue-800/30 p-3 rounded-full text-white hover:text-blue-200 transition-all duration-300 hover:bg-blue-800/50 backdrop-blur-sm border border-blue-700/30"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="hidden md:grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-blue-800/30 p-6 rounded-2xl backdrop-blur-sm border border-blue-700/30 transform hover:-translate-y-2 transition-all duration-300">
                  <Globe className="text-blue-200 mb-4" size={32} />
                  <h3 className="text-xl font-semibold text-white mb-2">Global Reach</h3>
                  <p className="text-blue-100">Working with clients and projects worldwide</p>
                </div>
                <div className="bg-blue-800/30 p-6 rounded-2xl backdrop-blur-sm border border-blue-700/30 transform hover:-translate-y-2 transition-all duration-300">
                  <Award className="text-blue-200 mb-4" size={32} />
                  <h3 className="text-xl font-semibold text-white mb-2">IELTS 7.0</h3>
                  <p className="text-blue-100">Strong communication skills</p>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="bg-blue-800/30 p-6 rounded-2xl backdrop-blur-sm border border-blue-700/30 transform hover:-translate-y-2 transition-all duration-300">
                  <Server className="text-blue-200 mb-4" size={32} />
                  <h3 className="text-xl font-semibold text-white mb-2">Backend Dev</h3>
                  <p className="text-blue-100">Specialized in scalable solutions</p>
                </div>
                <div className="bg-blue-800/30 p-6 rounded-2xl backdrop-blur-sm border border-blue-700/30 transform hover:-translate-y-2 transition-all duration-300">
                  <BookOpen className="text-blue-200 mb-4" size={32} />
                  <h3 className="text-xl font-semibold text-white mb-2">Continuous Learning</h3>
                  <p className="text-blue-100">Always expanding knowledge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24 fill-current text-gray-50" viewBox="0 0 1440 74" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 C240,70 480,70 720,35 C960,0 1200,0 1440,35 L1440,74 L0,74 Z" />
          </svg>
        </div>
        <a 
          href="#about" 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-blue-200 transition-colors animate-bounce"
        >
          <ChevronDown size={32} />
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mb-8"></div>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 backdrop-blur-lg bg-white/90 hover:shadow-2xl transition-shadow duration-300">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-blue-900">My Journey</h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    As a 16-year-old backend developer, I've developed a strong foundation in creating reliable and efficient server-side solutions. My journey in technology started with a curiosity about how web applications work behind the scenes, which led me to dive deep into backend development.
                  </p>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    With an IELTS score of 7.0, I demonstrate strong communication skills that complement my technical abilities. I'm particularly proud of this achievement as it showcases my capability to effectively communicate complex technical concepts.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="group bg-blue-50 p-6 rounded-xl hover:bg-blue-100/50 transition-colors duration-300">
                    <h4 className="text-lg font-semibold mb-2 text-blue-900">Education</h4>
                    <p className="text-gray-700">Currently pursuing  studies in High School</p>
                  </div>
                  <div className="group bg-blue-50 p-6 rounded-xl hover:bg-blue-100/50 transition-colors duration-300">
                    <h4 className="text-lg font-semibold mb-2 text-blue-900">Languages</h4>
                    <p className="text-gray-700">IELTS Score: 7.0</p>
                  </div>
                  <div className="group bg-blue-50 p-6 rounded-xl hover:bg-blue-100/50 transition-colors duration-300">
                    <h4 className="text-lg font-semibold mb-2 text-blue-900">Interests</h4>
                    <p className="text-gray-700">System Architecture, Database Design, API Development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl text-center">
              Here are some of my recent backend projects that showcase my technical skills and problem-solving abilities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">Technical Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl text-center">
              My expertise spans across various technologies and tools in backend development.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-lg bg-white/90 hover:shadow-2xl transition-shadow duration-300">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-blue-50 rounded-lg">
          <Code2 className="text-blue-600" size={28} />
        </div>
        <h3 className="text-2xl font-semibold text-blue-900">Programming Languages</h3>
      </div>
      <div className="space-y-6">
        <SkillBar skill="C#" level={90} />
        <SkillBar skill="JavaScript" level={65} />
        <SkillBar skill="ASP.NET Core" level={90} />
      </div>
    </div>
    <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-lg bg-white/90 hover:shadow-2xl transition-shadow duration-300">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-blue-50 rounded-lg">
          <Database className="text-blue-600" size={28} />
        </div>
        <h3 className="text-2xl font-semibold text-blue-900">Tools &amp; Technologies</h3>
      </div>
      <div className="space-y-6">
        <SkillBar skill="SQL Server" level={85} />
        <SkillBar skill="Git" level={90} />
        <SkillBar skill="Docker" level={60} />
      </div>
    </div>
  </div>
</div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-b from-gray-100 to-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">Get in Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl text-center">
              Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <form className="bg-white rounded-2xl shadow-xl p-8 md:p-12 backdrop-blur-lg bg-white/90 hover:shadow-2xl transition-shadow duration-300">
              <div className="mb-8">
                <label htmlFor="name" className="block text-gray-700 mb-2 text-lg">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-gray-50 hover:bg-white"
                  required
                />
              </div>
              <div className="mb-8">
                <label htmlFor="email" className="block text-gray-700 mb-2 text-lg">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-gray-50 hover:bg-white"
                  required
                />
              </div>
              <div className="mb-8">
                <label htmlFor="message" className="block text-gray-700 mb-2 text-lg">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none bg-gray-50 hover:bg-white"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl text-lg transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
