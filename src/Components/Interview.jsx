import React from "react";
import { Check } from "lucide-react";

const RecruitmentProcess = () => {
  const steps = [
    {
      title: "Intro call & Project",
      description:
        "This is for both of us to understand if we're right for each other.",
    },
    {
      title: "Interview",
      description:
        "At this point, we'll discuss your project, experience, goals, and ambitions.",
    },
    {
      title: "Conversation with a co-founder",
      description:
        "For some roles, one of our co-founders will have a chat with you.",
    },
    {
      title: "Offer",
      description: "We make you an offer",
      isLast: true,
    },
  ];

  return (
    <div className="min-h-screen bg-black p-8 pb-16  ">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-sm uppercase tracking-wider text-[#a1a1aa] mb-4">
            RECRUITMENT PROCESS
          </h2>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4">
            Fast, constructive, <span className="font-semibold text-[#ab20fd]">kind</span>
          </h1>
          <p className="text-[#27272a] text-lg">
            We've tried to keep the rounds lesser and the experience richer.
          </p>
        </div>

        {/* Steps List */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              {/* Bullet point or check mark */}
              <div className="mt-2">
                {step.isLast ? (
                  <div className="w-6 h-6 rounded-full bg-[#ab20fd] flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                ) : (
                  <div className="w-3 h-3 rounded-full bg-[#ab20fd] mt-1" />
                )}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl text-white mb-2">{step.title}</h3>
                <p className="text-[#a1a1aa] text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecruitmentProcess;
