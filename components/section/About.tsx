import React from 'react'

export default function About() {
  return (
    <div className="w-full h-[80vh] flex flex-col md:flex-row px-10 -mb-10 ">
      <div className="flex flex-grow-0 w-1/3 flex-col justify-start items-start  p-10 ">
        <h1 className="text-5xl text-pretty font-semibold ">
         About me 
        </h1>
      </div>
      <div className="flex  flex-col justify-center items-center w-2/3 p-10 md:pt-0 bg-blue-700  ">
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus minima molestias recusandae, repellat deserunt temporibus, possimus voluptas suscipit eaque sequi assumenda! Debitis maxime sint reiciendis fuga aut labore voluptatibus sunt illum, obcaecati praesentium enim culpa eum necessitatibus minima quas nobis aperiam odio aspernatur ratione rerum explicabo porro voluptatum? Eos, cum.</p> 
      </div>
    </div>
  )
}
