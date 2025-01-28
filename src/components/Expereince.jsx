import React from "react";

const Expereince = () => {
  const Expereinces = [
    {
      company: "MERN Stack Intern, SDLC Corp",
      duration: "Dec 2024 - Present",
      location: "Aurangabad, Maharashtra",
      description: [
        "Audience Pool Project : Developed dynamic frontend pages to enhance user interaction. Integrated backend APIs with frontend components for seamless data flow.",
        "ICO Token Project : Built dynamic and responsive frontend pages for a blockchain application. Successfully integrated backend APIs to enable real-time functionalities. Fixed bugs, ensuring application stability and performance.",
      ],
    },
    {
      company: "React Js Developer Intern, AHEN Technology",
      duration: "Jan 2024 - Jun 2024",
      location: "Pune, Maharashtra",
      description: [
        "Developed React based Web Application to help users to access, manage their driving license, learning license related work & book driving school session.",
      ],
    },
  ];
  return (
    <>
      <div className="pb-10 px-28 ">
        <p className="border-t border-stone-900"></p>
      </div>
      <div className="pb-12 lg:px-72 sm:px-8">
        <h2 className="py-4 pb-14 text-center text-4xl font-bold bg-gradient-to-r from-pink-600 to-cyan-400 bg-clip-text text-transparent">
          Work Expereinces
        </h2>
        <div>
          {Expereinces.map((expereince, index) => (
            <div
              key={index}
              className="mb-8 flex flex-wrap py-4 lg:justify-center"
            >
              <div className="w-full">
                <h3 className="mb-2 font-medium text-3xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent">
                  {expereince.company}
                </h3>
                <div className="flex items-center gap-4 mb-2">
                  <p className="rounded bg-stone-900 p-2 text-sm">
                    {expereince.duration}
                  </p>
                  <p className="rounded bg-stone-900 p-2 text-sm font-medium text-stone-300">
                    {expereince.location}
                  </p>
                </div>
                <div>
                  {expereince.description.map((desc, descIndex) => (
                    <div
                      className="mb-1 bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent"
                      key={descIndex}
                    >
                      {desc}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Expereince;
