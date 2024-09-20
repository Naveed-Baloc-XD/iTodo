import { FaSquareWhatsapp } from "react-icons/fa6";
import { LuLinkedin } from "react-icons/lu";
import { VscGithub } from "react-icons/vsc";
const Navbar = () => {
  return (
    <header>
      <section className="container rounded-b-lg bg-violet-200 h-[40px] sm:h-[60px] w-[100%]  flex justify-between items-center">
        <h1 className="text-[20px] sm:text-2xl font-bold cursor-pointer">
          <span className="text-violet-700">&lt;</span>
          <span className="text-violet-700">i</span>
          <span className="text-gray-700">TODO</span>
          <span className="text-violet-700">/&gt;</span>
        </h1>

        <div className="flex justify-center items-center gap-2 sm:gap-3">
          <a target="_blank" href="https://github.com/Naveed-Baloc-XD/">
            <VscGithub
              className="cursor-pointer 
            sm:w-[27px] sm:h-[27px] w-[22px] h-[22px] text-violet-700 duration-500 active:scale-95 hover:text-violet-800"
            />
          </a>

          <a target="_blank" href="https://wa.link/3r6fob">
            <FaSquareWhatsapp className="cursor-pointer sm:w-[27px] sm:h-[27px] w-[22px] h-[22px]  text-violet-700 duration-500 active:scale-95 hover:text-violet-800" />
          </a>
          <a target="_blank" href="#">
            <LuLinkedin className="cursor-pointer sm:w-[27px] sm:h-[27px] w-[22px] h-[22px]  text-violet-700 duration-500 active:scale-95 hover:text-violet-800" />
          </a>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
