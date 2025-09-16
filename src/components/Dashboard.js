import React, { useState } from "react";
import { projects } from "../data";

function Dashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState("about");
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Handle smooth tab transitions with animation
  const handleTabChange = (newTab) => {
    if (newTab === activeTab) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(newTab);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header with profile info and logout */}
      <header className="relative bg-white/90 backdrop-blur-sm border-b border-amber-200/30 shadow-md">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/5 to-orange-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center py-6 space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="w-16 h-16 rounded-md overflow-hidden shadow-md border-2 border-white mx-auto sm:mx-0">
                <img 
                  src="/william.jpg" 
                  alt="William N. Kungu"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                  William N. Kungu
                </h1>
                <p className="text-gray-600 text-base sm:text-lg font-medium">Senior Software Engineer</p>
                <div className="flex flex-col sm:flex-row sm:items-center mt-2 space-y-2 sm:space-y-0 sm:space-x-4">
                  <div className="flex items-center justify-center sm:justify-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-500">Available for opportunities</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start">
                    <svg className="w-4 h-4 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm text-gray-500">Nairobi, Kenya</span>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="group relative bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:shadow-lg hover:from-red-700 hover:to-red-800 transition-all duration-200 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Navigation Tabs */}
            <div className="flex space-x-1 mb-8 bg-white/80 backdrop-blur-sm rounded-lg p-2 shadow-md border border-amber-200/30">
              <button
                onClick={() => handleTabChange("about")}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                  activeTab === "about"
                    ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white/70"
                }`}
              >
                About
              </button>
              <button
                onClick={() => handleTabChange("projects")}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                  activeTab === "projects"
                    ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white/70"
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => handleTabChange("cv")}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                  activeTab === "cv"
                    ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white/70"
                }`}
              >
                CV
              </button>
              <button
                onClick={() => handleTabChange("contact")}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                  activeTab === "contact"
                    ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white/70"
                }`}
              >
                Contact
              </button>
            </div>

        {/* Loading spinner during tab transitions */}
        {isTransitioning && (
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-amber-600"></div>
          </div>
        )}

        {/* About Section */}
        {activeTab === "about" && (
          <div className={`bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-amber-200/30 p-8 mb-8 transition-all duration-500 ease-out ${
            isTransitioning ? "opacity-0 transform translate-y-8" : "opacity-100 transform translate-y-0"
          }`}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="relative">
                  <div className="w-40 h-40 rounded-lg overflow-hidden shadow-lg mx-auto border-4 border-white">
                    <img 
                      src="/william.jpg" 
                      alt="William N. Kungu - Senior Software Engineer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  About Me
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  A seasoned and accomplished Senior Software Engineer with <span className="font-semibold text-amber-600">12+ years</span> of extensive experience. 
                  I have demonstrated expertise in delivering high-performing and scalable software solutions, leveraging cutting-edge technologies 
                  including Laravel, ReactJS, GraphQL, NodeJS, NextJS, AWS services, and more.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg p-4 border border-amber-200">
                    <h3 className="font-semibold text-amber-900 mb-2">Education</h3>
                    <p className="text-amber-700">BA Computer Science</p>
                    <p className="text-amber-600 text-sm">Messiah University, USA</p>
                  </div>
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-4 border border-orange-200">
                    <h3 className="font-semibold text-orange-900 mb-2">Current Role</h3>
                    <p className="text-orange-700">Software Engineering Consultant</p>
                    <p className="text-orange-600 text-sm">Leader Publishing Worldwide</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["Laravel", "ReactJS", "GraphQL", "NodeJS", "NextJS", "AWS", "Docker", "Kubernetes", "Python", "FastAPI", "PostgreSQL", "MongoDB"].map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-700 px-4 py-2 rounded-md text-sm font-medium border border-amber-200/50 hover:from-amber-500/20 hover:to-orange-500/20 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeTab === "projects" && (
          <div className={`bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-amber-200/30 p-8 transition-all duration-500 ease-out ${
            isTransitioning ? "opacity-0 transform translate-y-8" : "opacity-100 transform translate-y-0"
          }`}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Featured Projects
              </h2>
              <p className="text-gray-600 text-lg">A showcase of my most impactful work</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, idx) => (
                <div key={idx} className={`group relative bg-white/80 backdrop-blur-sm rounded-lg shadow-md transition-all duration-300 border border-amber-200/30 overflow-hidden ${
                  project.link && project.link !== "#" 
                    ? "hover:shadow-lg cursor-pointer" 
                    : "cursor-default"
                }`}>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Clickable overlay for projects with links */}
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-10"
                      aria-label={`Visit ${project.title} project`}
                    ></a>
                  )}
                  
                  {/* Project header */}
                  <div className="relative p-6 pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-md flex items-center justify-center shadow-md">
                        <span className="text-white font-bold text-lg">{project.title.charAt(0)}</span>
                      </div>
                      {project.link && project.link !== "#" ? (
                        <div className="w-8 h-8 bg-gray-100 group-hover:bg-amber-500 rounded-md flex items-center justify-center transition-all duration-200">
                          <svg className="w-4 h-4 text-gray-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                      ) : (
                        <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-200">
                        {project.title}
                      </h3>
                      {project.period && (
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                          {project.period}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Technologies */}
                  <div className="px-6 pb-6">
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-md p-4 border border-amber-200/50">
                      <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Technologies</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.split(', ').slice(0, 4).map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="bg-white text-gray-700 px-3 py-1 rounded-md text-xs font-medium shadow-sm border border-amber-200/50"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.split(', ').length > 4 && (
                          <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-md text-xs font-medium">
                            +{project.tech.split(', ').length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover effect border */}
                  <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-amber-500/20 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CV Section */}
        {activeTab === "cv" && (
          <div className={`bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-amber-200/30 p-8 transition-all duration-500 ease-out ${
            isTransitioning ? "opacity-0 transform translate-y-8" : "opacity-100 transform translate-y-0"
          }`}>
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Curriculum Vitae
              </h2>
              <p className="text-gray-600 text-lg">Complete professional background and experience</p>
            </div>

            {/* CV Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/cv.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-3 rounded-md font-semibold shadow-md hover:shadow-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-200 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </a>
              <a 
                href="/cv.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-gray-700 px-8 py-3 rounded-md font-semibold shadow-md hover:shadow-lg border border-gray-200 hover:border-amber-300 transition-all duration-200 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View in New Tab
              </a>
            </div>

            {/* Embedded PDF Viewer */}
            <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
              <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-gray-700">William N. Kungu - CV.pdf</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">PDF Document</span>
                </div>
              </div>
              <div className="relative" style={{ height: '800px' }}>
                <iframe
                  src="/cv.pdf#toolbar=1&navpanes=1&scrollbar=1"
                  className="w-full h-full border-0"
                  title="William N. Kungu CV"
                  style={{ minHeight: '800px' }}
                />
                {/* Fallback for browsers that don't support PDF embedding */}
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center hidden" id="pdf-fallback">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="text-gray-600 mb-4">PDF viewer not supported in this browser</p>
                    <a 
                      href="/cv.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-2 rounded-md font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-200"
                    >
                      Open PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CV Summary */}
            <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border border-amber-200/50">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                    </svg>
                    <span className="font-semibold text-gray-700">Experience:</span>
                    <span className="text-gray-600 ml-2">12+ Years</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                    <span className="font-semibold text-gray-700">Education:</span>
                    <span className="text-gray-600 ml-2">BA Computer Science</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    <span className="font-semibold text-gray-700">Specialization:</span>
                    <span className="text-gray-600 ml-2">Full-Stack Development</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-semibold text-gray-700">Location:</span>
                    <span className="text-gray-600 ml-2">Nairobi, Kenya</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeTab === "contact" && (
          <div className={`bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-amber-200/30 p-8 transition-all duration-500 ease-out ${
            isTransitioning ? "opacity-0 transform translate-y-8" : "opacity-100 transform translate-y-0"
          }`}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Get In Touch
              </h2>
              <p className="text-gray-600 text-lg">Let's discuss opportunities and collaborations</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="group text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg border border-amber-200/50 hover:shadow-md transition-all duration-200">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-md flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Email</h3>
                <p className="text-gray-600 mb-4">wkungu@gmail.com</p>
                <a href="mailto:wkungu@gmail.com" className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors duration-200">
                  Send Email
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              
              <div className="group text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200/50 hover:shadow-md transition-all duration-200">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-md flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Phone</h3>
                <p className="text-gray-600 mb-4">+254 713 015 501</p>
                <a href="tel:+254713015501" className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200">
                  Call Now
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              
              <div className="group text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-lg border border-red-200/50 hover:shadow-md transition-all duration-200">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-md flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">LinkedIn</h3>
                <p className="text-gray-600 mb-4">linkedin.com/in/wkungu</p>
                <a href="https://www.linkedin.com/in/wkungu/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-red-600 hover:text-red-700 font-medium transition-colors duration-200">
                  Connect
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Call to action */}
            <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-lg p-8 border border-amber-200/50 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Work Together?</h3>
              <p className="text-gray-600 mb-6">I'm always excited to discuss new opportunities and innovative projects.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:wkungu@gmail.com" className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-3 rounded-md font-semibold shadow-md hover:shadow-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-200">
                  Start a Conversation
                </a>
                <a href="https://www.linkedin.com/in/wkungu/" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-700 px-8 py-3 rounded-md font-semibold shadow-md hover:shadow-lg border border-gray-200 hover:border-amber-300 transition-all duration-200">
                  View LinkedIn
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
