import React from "react";

const Education = () => {
  const Educations = [
    {
      institute: "G.H. Raisoni Institute of Engineering And Technology",
      name: "B.Tech in Computer Engineering",
      duration: "2020-2024",
      location: "Pune, Maharashtra",
      percentage: "7.10 CGPA",
    },
    {
      institute: "Vidyadham Science Jr College",
      name: "HSC",
      duration: "2019-2020",
      location: "Aurangabd, Maharashtra",
      percentage: "68.46%",
    },
    {
      institute: "Saint Lawrence High School",
      name: "SSC",
      duration: "2017-2018",
      location: "Aurangabd, Maharashtra",
      percentage: "77.20%",
    },
  ];

  return (
    <>
      <div className="pb-10 px-28 ">
        <p className="border-t border-stone-900"></p>
      </div>
      <div className="pb-6 lg:px-72 sm:px-8">
        <h2 className="py-4 pb-14 text-center text-4xl font-bold bg-gradient-to-r from-pink-600 to-cyan-400 bg-clip-text text-transparent">
          Education
        </h2>
        <div>
          {Educations.map((education, index) => (
            <div
              key={index}
              className="mb-8 flex flex-wrap py-4 lg:justify-center"
            >
              <div className="w-full">
                <h3 className="mb-2 font-medium text-3xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent">
                  {education.institute}
                </h3>
                <h3 className="mb-2 font-medium text-3xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent">
                  {education.name}
                </h3>
                <div className="flex items-center gap-4 mb-2">
                  <p className="rounded bg-stone-900 p-2 text-sm font-medium text-stone-300">
                    {education.duration}
                  </p>
                  <p className="rounded bg-stone-900 p-2 text-sm font-medium text-stone-300">
                    {education.location}
                  </p>
                  <p className="rounded bg-stone-900 p-2 text-sm font-medium text-stone-300">
                    {education.percentage}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Education;
