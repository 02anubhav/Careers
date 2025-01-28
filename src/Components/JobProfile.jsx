import React from "react";
import { ArrowUpRight } from "lucide-react";

// Job data structure
const jobListings = [
  {
    id: 1,
    title: "Frontend Intern",
    department: "Engineering",
    skills: ["React", "JavaScript", "TailwindCSS"],
  },
  {
    id: 2,
    title: "Backend Intern",
    department: "Engineering",
    skills: ["Nodejs", "Express", "MongoDB"],
  },
  {
    id: 3,
    title: "Social Marketing",
    department: "Growth",
    skills: ["SEO", "Content Marketing", "Social Media Management"],
  },
  {
    id: 4,
    title: "UI/UX Designer",
    department: "Design",
    skills: ["Figma", "Adobe XD", "Prototyping"],
  },
  {
    id: 5,
    title: "Android Developer",
    department: "Engineering",
    skills: ["Java", "Kotlin", "Android Studio", "Firebase"],
  },
];

// Job Card Component
const JobCard = ({ title, department, skills }) => (
  <div className="p-6 border border-gray-800 rounded-lg bg-black hover:border-gray-700 transition-all group cursor-pointer h-64 flex flex-col justify-between">
    <div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-500 mb-4">{department}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-sm bg-gray-900 text-gray-400 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
    <div className="flex justify-end">
      <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center group-hover:bg-purple-500 transition-all">
        <ArrowUpRight className="w-5 h-5 text-white transform group-hover:rotate-45 transition-all duration-300" />
      </div>
    </div>
  </div>
);

// Main Component
const JobOpportunities = () => {
  return (
    <div className="min-h-screen bg-black  text-white p-12 2xl:pt-32">
      <div className="max-w-full mx-auto ">
        {/* Header Section */}
        <div className="mb-12">
          <span className="text-[#a1a1aa] text-sm tracking-wider">
            OPPORTUNITIES
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Work on things
            <br />
            that matter
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Join our team of passionate individuals who thrive on challenging
            problems and desire personal growth. Every day we work to make
            technology more accessible and impactful.
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {jobListings.map((job, index) => (
            <React.Fragment key={job.id}>
              {index < 5 && <JobCard {...job} />}
              {index === 4 && (
                <div className="p-6 bg-purple-600 rounded-lg flex flex-col justify-between hover:bg-purple-500 transition-colors cursor-pointer h-64">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">View all</h3>
                    <p className="text-purple-200">open positions</p>
                  </div>
                  <div className="flex justify-end">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <ArrowUpRight className="w-5 h-5 text-purple-600 transform group-hover:rotate-45 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobOpportunities;
