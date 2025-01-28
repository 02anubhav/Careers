import React from "react";
import { LineChart, Users, Briefcase } from "lucide-react";

const featureData = [
  {
    icon: Briefcase,
    title: "Fast-Paced Growth",
    description:
      "Accelerate your career in India's leading trading analytics platform",
  },
  {
    icon: LineChart,
    title: "Innovation First",
    description:
      "Work with cutting-edge technologies and shape the future of trading",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Join a team of passionate individuals building great solutions",
  },
];

const MidSection = () => {
  return (
    <div className="p-8 space-y-8 bg-black ">
      <h3 className="text-center text-4xl mb-20  font-regular text-white mt-10">
        Why Join TradyLytics?
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {featureData.map((feature, index) => (
          <div key={index} className="space-y-4">
            <div className="flex justify-center">
              <div className="bg-[#27272a] p-4 rounded-full">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
            </div>
            <h4 className="text-lg font-semibold text-[#ab20fd]">
              {feature.title}
            </h4>
            <p className="text-sm text-[#a1a1aa]">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8 mb-14">
        <button className="px-8 py-4 mt-16 bg-[#ab20fd] text-white font-semibold text- rounded-lg">
          Join Our Team
        </button>
      </div>
    </div>
  );
};

export default MidSection;
