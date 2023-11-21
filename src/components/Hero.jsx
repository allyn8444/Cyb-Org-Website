import cybLogo from "../assets/PNG/cyb-logo.png";
import HeroImg from "../assets/PNG/Hero.png";

export default function Hero() {
  return (
    <div className="relative">
      <img
        src={HeroImg}
        alt=""
        className="hero absolute z-0 rotate-[-124.661deg] max-w-[800px] w-[100%] m-[-10px]"
      />
      <div className="z-10 absolute left-0 right-0 m-auto h-[100vh] flex flex-col items-center justify-center w-[65rem] ">
        {/*  */}
        <div className="title-area display flex contents-center h-auto pt-20">
          <img src={cybLogo} alt="cyb:org logo" className="h-40 self-center" />
          <div className="title-texts pl-4">
            <h1 className="text-[4.8rem] font-bold">CYB ROBOTICS</h1>
            <h2 className="text-[4.4rem] font-bold mt-[-25px] ">
              Organization
            </h2>
          </div>
        </div>
        {/*  */}
        <div className="flex justify-center flex-col items-center">
          <p className="info-area text-center flex-wrap px-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
            massa vel purus fringilla venenatis. Proin eget fermentum quam.
            Donec id dolor eget orci dapibus consectetur.
          </p>
          <button className="bg-[#CEDFDB] px-10 py-4 rounded-2xl text-black mt-6 w-auto h-auto">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
