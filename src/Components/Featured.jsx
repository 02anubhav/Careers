
import React, { useState } from "react";
import {
  ArrowRight,
  LineChart,
  BarChart2,
  History,
  Lightbulb,
  Users,
  Sparkles,
  Clock,
  ShieldCheck,
} from "lucide-react";

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  isHovered,
  onHover,
  index,
}) => (
  <div
    className="group cursor-pointer"
    onMouseEnter={() => onHover(true)}
    onMouseLeave={() => onHover(false)}
    style={{
      transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      transitionDelay: `${index * 50}ms`,
    }}
  >
    <div className="relative h-full rounded-[1.5vw] p-[2vw] transition-all duration-300">
      {/* Card Background with Depth */}
      <div className="absolute inset-0 rounded-[1.5vw] bg-[#0A0A0A] border border-white/5 transition-colors duration-300 group-hover:border-[#ab20fd]/20" />

      {/* Inner Shadow Effect */}
      <div className="absolute inset-[1px] rounded-[1.5vw] bg-gradient-to-b from-white/[0.02] to-transparent" />

      {/* Card Content */}
      <div className="relative flex flex-col gap-[1.5vw]">
        {/* Icon Container */}
        <div className="relative flex items-start gap-[1vw]">
          <div
            className={`relative flex items-center justify-center w-[4vw] h-[4vw] rounded-2xl transition-all duration-300
            ${isHovered ? "bg-[#ab20fd]/10" : "bg-black"}`}
          >
            {/* Icon Background Glow */}
            <div
              className={`absolute inset-0 rounded-2xl transition-opacity duration-300 
              ${isHovered ? "opacity-100" : "opacity-0"}`}
              style={{
                background:
                  "radial-gradient(circle at center, rgba(171,32,253,0.15) 0%, transparent 70%)",
              }}
            />
            <Icon
              className={`relative w-[2vw] h-[2vw] transition-all duration-300 
              ${isHovered ? "text-[#ab20fd] scale-110" : "text-zinc-500"}`}
            />
          </div>

          {/* Number Label */}
          <span
            className={`text-[0.8vw] font-medium transition-colors duration-300 
            ${isHovered ? "text-[#ab20fd]" : "text-zinc-700"}`}
          >
            {(index + 1).toString().padStart(2, "0")}
          </span>
        </div>

        {/* Content Area */}
        <div className="space-y-[1vw]">
          <h3 className="font-semibold text-[1.3vw] text-white/90 tracking-tight transition-colors duration-300 group-hover:text-[#ab20fd]">
            {title}
          </h3>
          <p className="text-[0.9vw] text-zinc-500 leading-relaxed transition-all duration-300 group-hover:text-zinc-400">
            {description}
          </p>
        </div>

        {/* Learn More Link */}
        <div className="mt-auto pt-[1vw] border-t border-white/5">
          <div
            className={`flex items-center gap-[0.5vw] text-[0.9vw] font-medium transition-all duration-300 
            ${isHovered ? "text-[#ab20fd]" : "text-zinc-600"}`}
          >
            <span className="tracking-wide">Explore Feature</span>
            <ArrowRight
              className={`w-[0.9vw] h-[0.9vw] transition-all duration-300 transform 
              ${isHovered ? "translate-x-[0.3vw]" : ""}`}
            />
          </div>
        </div>
      </div>

      {/* Corner Accent */}
      <div
        className={`absolute top-[2vw] right-[2vw] w-[3vw] h-[3vw] transition-all duration-500
        ${isHovered ? "opacity-100" : "opacity-0"}`}
      >
        <div className="absolute top-0 right-0 w-[1px] h-[1vw] bg-[#ab20fd]/30" />
        <div className="absolute top-0 right-0 w-[1vw] h-[1px] bg-[#ab20fd]/30" />
      </div>
    </div>
  </div>
);

const FeaturesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: LineChart,
      title: "Auto-Sync with Brokers",
      description:
        "Seamlessly fetch trading data from your broker accounts to eliminate manual entry.",
    },
    {
      icon: BarChart2,
      title: "Comprehensive Analytics",
      description:
        "Gain a clear overview of key metrics like P&L, win rates, and drawdowns at a glance.",
    },
    {
      icon: History,
      title: "Strategy Backtesting",
      description:
        "Test trading strategies on historical data to refine and optimize performance.",
    },
    {
      icon: Lightbulb,
      title: "Trade Insights",
      description:
        "Receive actionable insights to identify profitable patterns and areas for improvement.",
    },
    {
      icon: Users,
      title: "Community Forum",
      description:
        "Engage with a vibrant trader community to exchange strategies, tips, and learnings.",
    },
    {
      icon: Sparkles,
      title: "AI-Powered Insights",
      description:
        "Leverage AI to analyze trades, detect patterns, and suggest smarter strategies.",
    },
    {
      icon: Clock,
      title: "Performance Breakdown",
      description:
        "Track P&L by day and time to uncover when you perform best in the market.",
    },
    {
      icon: ShieldCheck,
      title: "Risk Management Tools",
      description:
        "Monitor critical metrics like drawdowns and position sizes to stay in control of risks.",
    },
  ];

  return (
    <section className="relative py-[10vw] bg-black overflow-hidden">
      {/* Enhanced Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(20,20,20,1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,20,20,1)_1px,transparent_1px)] bg-[size:4vw_4vw]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative max-w-[90vw] mx-auto">
        {/* Enhanced Section Header */}
        <div className="text-center mb-[8vw]">
          <div className="inline-flex items-center px-[1.2vw] py-[0.6vw] bg-[#14031D] rounded-full mb-[2vw] border border-white/5">
            <span className="text-[0.9vw]  text-[#ab20fd] font-medium tracking-widest uppercase">
              Features
            </span>
          </div>

          <div className="max-w-[60vw] mx-auto space-y-[2vw]">
            <h2 className="text-[4vw] font-bold tracking-tight">
              <span className="text-white/90">Power Your Trading with </span>
              <span className="text-[#ab20fd]">Advanced Features</span>
            </h2>

            <p className="text-[1.2vw] text-zinc-500 font-light leading-relaxed">
              Everything you need to analyze, track, and improve your trading
              performance
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1.5vw]">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              index={index}
              isHovered={hoveredIndex === index}
              onHover={(isHovered) => setHoveredIndex(isHovered ? index : null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;






