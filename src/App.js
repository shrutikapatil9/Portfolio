/* jshint ignore:start */
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Shrutika Patil</h1>


        <p className="text-lg text-gray-600">Aspiring Full Stack Developer</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/shrutikapatil9" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/shrutika-patil" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:shrutika09.patil@gmail.com">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </header>

      {/* About */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-700">
          I’m an aspiring full stack developer with hands-on experience in building responsive
          applications using React, Node.js, and MongoDB. I love solving problems and building
          real-world software solutions with clean design and functionality.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <ul className="grid grid-cols-2 gap-2 text-gray-700 list-disc list-inside">
          <li>React.js</li>
          <li>Node.js</li>
          <li>JavaScript</li>
          <li>MongoDB</li>
          <li>HTML, CSS, Sass</li>
          <li>Bootstrap</li>
          <li>Git & GitHub</li>
          <li>Python, C++, DSA</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid gap-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">E-commerce Shopping Site</h3>
              <p className="text-gray-700 mb-2">
                React + Sass based shopping site with catalog, wishlist, and cart functionality.
              </p>
              <a
                href="https://github.com/shrutikapatil9/shopping-site"
                className="text-blue-600 text-sm"
                target="_blank"
              >
                View on GitHub
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">Responsive Landing Page</h3>
              <p className="text-gray-700 mb-2">
                Built with HTML, CSS, and Bootstrap. Mobile-friendly layout for marketing.
              </p>
              <a
                href="https://github.com/shrutikapatil9/landing-page"
                className="text-blue-600 text-sm"
                target="_blank"
              >
                View on GitHub
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resume */}
      <section className="text-center">
        <a
          href="/Shrutika_Patil_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Download Resume</Button>
        </a>
      </section>
    </main>
  );
}
