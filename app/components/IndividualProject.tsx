import Image from "next/image";
import React from "react";

export const IndividualProject = () => {
  return (
    <div className="my-32 flex flex-col xl:flex-row justify-center items-center w-full">
      <div className="xl:w-1/2 xl:pr-24 max-xl:flex max-xl:flex-col max-xl:items-start max-xl:justify-center">
        <p className="font-mono text-[#f5f5f5] font-medium">
          SOUND BLA BLA BLA PROJECT COOL
        </p>
        <p className="font-mono text-[#f5f5f5] mt-12">
          Descriere. I liked creating this project because I learnt a lot about
          how sound works inside of the unity game engine as well as more
          advanced C# topics. Ceva Lorem ipsum dolor sit amet, qui minim labore
          adipisicing minim sint cillum sint consectetur cupidatat.
        </p>
        <div className="flex text-[#c3c3c3] items-start justify-start gap-2 xl:gap-6 text-lg xl:text-2xl font-mono my-4">
          <p>stack1</p>
          <p>stack2</p>
          <p>stack3</p>
          <p>stack4</p>
        </div>
        <div className="flex my-4 gap-2 text-[#c3c3c3] xl:gap-6 text-lg xl:text-2xl font-mono">
          <a>Github</a>
          <a>Test</a>
        </div>
      </div>
      <div className="xl:w-1/2 xl:pl-24">
        <Image
          src={
            "https://placehold.jp/3d4070/ffffff/1920x1080.png?text=SALUT%20FSDAFJKLSDFALJDK"
          }
          height={1080}
          width={1920}
          alt="poza"
        />
      </div>
    </div>
  );
};
