import cybLogo from "../assets/PNG/cyb-logo.png";
export default function Footer() {
  return (
    <footer className="h-full bg-primary shadow text-white">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href=""
            className="flex items-center mb-2 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={cybLogo} className="h-12" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              CYB:ORG
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-4 text-sm font-medium  sm:mb-0 ">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <span className="block text-sm  sm:text-center ">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            CYB:ORG™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
