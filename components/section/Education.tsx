import React from "react";

const Education = () => {
  //
  return (
    <div className="w-full h-[80vh] flex flex-col md:flex-row px-10 ">
      <div className="flex flex-grow-0 w-1/3 flex-col justify-start items-start   ">
        <h1 className="text-5xl text-pretty font-semibold ">
          Education, Certification & Others Works
        </h1>
      </div>
      <div className="flex  flex-col justify-center items-center w-2/3 p-10 md:pt-0 bg-blue-700 h-full ">
        
        <div>
          <h3 className="text-xl font-medium">Programming</h3>
          <h5 className=" text-lg font-normal italic">
            C, C++, Javascript,Typescript
          </h5>
          <h3 className="text-xl font-medium">Web Design</h3>
          <h5 className=" text-lg font-normal italic">HTML5, CSS3</h5>

        </div>
      </div>
    </div>
  );
};

export default Education;
