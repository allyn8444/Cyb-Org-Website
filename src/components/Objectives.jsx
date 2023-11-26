import BGM from "../assets/PNG/Hero.png";

export default function Objectives() {
  return (
    <>
      {/* 80 VH screen size */}
      <div className="relative bg-white h-[80vh]">
        <div className="h-full flex justify-center items-center gap-16">
          {/*  */}
          <div className="bg-white z-[1] text-black h-[45%] w-[40%] rounded-lg shadow-2xl">
            <h1 className=" text-[2.5rem] font-bold px-11 py-8">MISSION</h1>
            <p className="ml-[4.5rem] mr-11 text-xl">
              To create a platform that will inspire students to become leaders
              and innovators in the field of science, technology and engineering
              through research and development in the field of robotics.
            </p>
          </div>
          {/*  */}
          <div className="bg-white z-[1] text-black h-[45%] w-[40%] rounded-lg shadow-2xl">
            <h1 className=" text-[2.5rem] font-bold px-11 py-8">VISION</h1>
            <p className="ml-[4.5rem] mr-11 text-xl">
              To create a culture where science, technology, and engineering are
              celebrated and students are equipped with the necessary skills to
              be leaders and innovators of the future.
            </p>
          </div>
          <img
            src={BGM}
            alt=""
            className="absolute h-[110%] w-auto rotate-[53.977deg] right-[45%] bottom-[10%]"
          />
          <img
            src={BGM}
            alt=""
            className="absolute h-[100%] w-auto rotate-[-66.956deg] left-[52%] bottom-[10%]"
          />
        </div>
        {/*  */}
      </div>
    </>
  );
}
