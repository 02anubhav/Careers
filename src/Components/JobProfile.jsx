import React from "react";
import { ArrowUpRight } from "lucide-react";

const JobProfile = () => {
  const jobs = [
    {
      id: "FE101",
      title: "Frontend Intern",
      date: "2025-01-26",
      techstack: ["React", "JavaScript", "TailwindCSS"],
      category: "Engineering",
      color: "bg-teal-400",
    },
    {
      id: "BE101",
      title: "Backend Intern",
      date: "2025-01-26",
      techstack: ["Node.js", "Express", "MongoDB"],
      category: "Engineering",
      color: "bg-teal-400",
    },
    {
      id: "SM101",
      title: "Social Marketing",
      date: "2025-01-26",
      techstack: ["SEO", "Content Marketing", "Social Media Management"],
      category: "Growth",
      color: "bg-rose-400",
    },
    {
      id: "UI101",
      title: "UI/UX Designer",
      date: "2025-01-26",
      techstack: ["Figma", "Adobe XD", "Prototyping"],
      category: "Design",
      color: "bg-purple-400",
    },
    {
      id: "AD101",
      title: "Android Developer",
      date: "2025-01-26",
      techstack: ["Java", "Kotlin", "Android Studio", "Firebase"],
      category: "Engineering",
      color: "bg-teal-400",
    },
  ];

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-sm uppercase tracking-wider text-zinc-400 mb-4">
            OPPORTUNITIES
          </h2>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
            Work on things
            <br />
            that matter
          </h1>
          <p className="text-zinc-400 max-w-md">
            Join our team of passionate individuals who thrive on challenging
            problems and desire personal growth. Every day we work to make
            technology more accessible and impactful.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs.map((job) => (
            <a
              key={job.id}
              href="#"
              className="p-6 rounded-lg bg-black border-2 border-zinc-800 
              transition-transform duration-200 hover:scale-105 hover:border-white
              flex flex-col justify-between h-60"
            >
              <div>
                <h3 className="text-xl font-medium mb-2 text-white">
                  {job.title}
                </h3>
                <p className="text-sm text-zinc-400 mb-6">{job.category}</p>
                <div className="flex flex-wrap gap-2">
                  {job.techstack.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs text-zinc-400 bg-zinc-800 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center 
                  transition-all duration-300 ${job.color} 
                  hover:ring-2 hover:ring-white hover:rotate-45`}
                >
                  <ArrowUpRight className="w-7 h-7 text-white" />
                </div>
              </div>
            </a>
          ))}

          {/* View All Card */}
          <a
            href="#"
            className="p-6 rounded-lg bg-purple-600 
            transition-transform duration-200 hover:scale-105
            flex flex-col justify-between h-60"
          >
            <div>
              <h3 className="text-xl font-medium text-white mb-2">View all</h3>
              <p className="text-sm text-emerald-300">open positions</p>
            </div>
            <div className="mt-4">
              <div
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center 
                transition-all duration-300 hover:ring-2 hover:ring-white hover:rotate-45"
              >
                <ArrowUpRight className="w-7 h-7 text-purple-600" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobProfile;
