"use client";
import React from "react";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  MapPin, 
  Link as LinkIcon, 
  Calendar, 
  Edit2
} from 'lucide-react';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = React.useState(false);

  const profile = {
    name: "Priyanshu Barode",
    role: "Senior Frontend Developer",
    bio: "Passionate web developer with 5+ years of experience in building modern web applications. Focused on creating beautiful, responsive, and user-friendly interfaces.",
    location: "indore, it park",
    email: "priyanshuvarodemp@gmail.com",
    website: "prisat.in",
    joinedDate:" Joined OCTOBER",
    socialLinks: {
      github: "github.com/jarvesjarv",
      twitter: "twitter.com/priyanshubarode",
      linkedin: "linkedin.com/in/priyanshubarode",
    },
    skills: [
      "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", 
      "GraphQL", "AWS", "Docker", "Git", "UI/UX Design"
    ],
    projects: [
      {
        name: "E-commerce Platform",
        description: "Built a full-stack e-commerce platform with Next.js and Stripe integration",
        tech: ["Next.js", "Stripe", "MongoDB"]
      },
      {
        name: "Task Management App",
        description: "Developed a real-time task management application with team collaboration features",
        tech: ["React", "Firebase", "Material-UI"]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Gradient Background */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 h-72">
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50/100 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-40">
        <div className="relative">
          {/* Profile Header Card */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Profile Image */}
              <div className="relative">
                <img
                  src="/api/placeholder/144/144"
                  alt="Profile"
                  className="w-36 h-36 rounded-full border-4 border-white shadow-lg object-cover"
                />
                {isEditing && (
                  <button className="absolute bottom-2 right-2 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-lg">
                    <Edit2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">{profile.name}</h1>
                    <p className="text-lg text-gray-600 mb-2">{profile.role}</p>
                  </div>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mt-4 sm:mt-0"
                  >
                    <Edit2 className="w-4 h-4 mr-2" />
                    {isEditing ? "Save Changes" : "Edit Profile"}
                  </button>
                </div>

                {/* Quick Info */}
                <div className="flex flex-wrap gap-4 mt-4 justify-center sm:justify-start text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{profile.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    <a href={`mailto:${profile.email}`} className="hover:text-blue-600">
                      {profile.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-1">
                    <LinkIcon className="w-4 h-4" />
                    <a href={`https://${profile.website}`} className="hover:text-blue-600">
                      {profile.website}
                    </a>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{profile.joinedDate}</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 mt-6 justify-center sm:justify-start">
                  <a href={`https://${profile.socialLinks.github}`} className="text-gray-600 hover:text-blue-600">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={`https://${profile.socialLinks.twitter}`} className="text-gray-600 hover:text-blue-600">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href={`https://${profile.socialLinks.linkedin}`} className="text-gray-600 hover:text-blue-600">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* About Section */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">About</h2>
                <p className="text-gray-600 leading-relaxed">{profile.bio}</p>
              </div>

              {/* Projects Section */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Projects</h2>
                <div className="space-y-6">
                  {profile.projects.map((project, index) => (
                    <div key={index} className="border-b last:border-0 pb-6 last:pb-0">
                      <h3 className="font-semibold text-lg text-gray-900">
                        {project.name}
                      </h3>
                      <p className="text-gray-600 mt-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Skills Section */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Get in touch</h2>
                <button className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}