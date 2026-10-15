import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  italicWord?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark" | "mist";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  italicWord,
  subtitle,
  align = "center",
  theme = "light",
  className = "",
}) => {
  const alignmentClass = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[align];

  const eyebrowColor =
    theme === "dark"
      ? "text-[#C8F169] border-[#C8F169]/30 bg-[#C8F169]/10"
      : "text-[#087F5B] border-[#087F5B]/25 bg-[#EAF6EF]";

  const titleColor = theme === "dark" ? "text-[#FFFFFF]" : "text-[#174A3A]";
  const subtitleColor = theme === "dark" ? "text-[#EAF6EF]/85" : "text-[#64716A]";
  const accentColor = theme === "dark" ? "text-[#C8F169]" : "text-[#087F5B]";

  return (
    <div className={`flex flex-col max-w-3xl ${alignmentClass} ${className}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-widest uppercase border mb-3.5 font-display ${eyebrowColor}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${theme === "dark" ? "bg-[#C8F169]" : "bg-[#087F5B]"}`} />
          <span>{eyebrow}</span>
        </span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] ${titleColor}`}
      >
        {title}
        {italicWord && (
          <>
            {" "}
            <span className={`font-editorial italic font-normal ${accentColor}`}>
              {italicWord}
            </span>
          </>
        )}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed font-sans ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
