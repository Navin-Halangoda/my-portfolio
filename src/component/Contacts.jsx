import React from 'react';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 flex-wrap">
          
          {/* Email Button */}
          <a
            href="mailto:naveenshanak186@gmail.com"
            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all"
          >
            <Mail className="w-6 h-6" /> <span>Email Me</span>
          </a>

          {/* Call Button */}
          <a
            href="tel:+94716376739"
            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all"
          >
            <Phone className="w-6 h-6" /> <span>Call Me</span>
          </a>

          {/* GitHub Button */}
          <a
            href="https://github.com/Navin-Halangoda"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
          >
            <Github className="w-6 h-6" /> <span>GitHub</span>
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/navin-halangoda-595301248"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
          >
            <Linkedin className="w-6 h-6" /> <span>LinkedIn</span>
          </a>

        </div>
      </div>
    </section>
  );
}
