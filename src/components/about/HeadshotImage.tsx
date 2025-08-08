import React from "react";

const HeadshotImage = () => {
  return (
    <div className="mx-auto flex justify-center max-w-[250px] mb-6 md:mb-8">
      <img
        src="project-imgs/Graduate.jpg"
        alt="Harry's Headshot"
        style={{ borderRadius: "10%" }}
        className="w-full h-auto"
      />
    </div>
  );
};

export default HeadshotImage;
