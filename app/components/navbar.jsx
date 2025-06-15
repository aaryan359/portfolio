// @flow strict
import Link from "next/link";
import Image from "next/image";


function Navbar() {
  return (
    <nav className="bg-transparent sticky backdrop-blur-sm rounded-[20px]   p-1 top-0  z-[1000]">
      <div className="flex items-center justify-between  ">
        <div className="flex flex-shrink-0 items-center">
          <Image 
          src={'/logo.jpeg'}
          width={60}
          height={60}
          className="rounded-lg"
          >

          </Image>
        </div>

        <ul className="mt-4   flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </Link>
          </li>

          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div></Link>
          </li>
          
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div></Link>
          </li>

          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#blogs"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">BLOGS</div></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;