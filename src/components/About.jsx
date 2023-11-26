import AboutIMG from "../assets/JPEG/about-image.jpeg";

export default function About() {
  return (
    <>
      <div className="MAIN-CONTAINER relative bg-white flex justify-center items-center h-screen w-auto ">
        <div className="bg-[#CEDFDB] w-[95%] h-[75%] flex content-center">
          <div className="TEXT-CONTAINER  w-[50%] flex flex-col justify-center ml-12">
            <h1 className="text-primary text-[3.8rem] leading-none font-extrabold">
              We are CYB:ORG
            </h1>
            <h3 className="text-black text-3xl my-4">
              And for us, <span className="font-bold">nothing</span> is out of
              reach.
            </h3>
            <p className="text-black text-lg w-[70%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
              massa vel purus fringilla venenatis. Proin eget fermentum quam.
              Donec id dolor eget orci dapibus consectetur.
            </p>
          </div>
          <img
            src={AboutIMG}
            alt="about image"
            className="ABOUT-IMAGE absolute h-[70%] w-[55%] left-[56%] top-[25%] rounded-md z-[2]"
          />
        </div>
      </div>
    </>
  );
}
