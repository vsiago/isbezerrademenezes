import { materialDesign } from "./MaterialDesign";
import { useState } from "react";

const { bgDarkColor, primaryColor, primaryColorActive } =
  materialDesign().colors;
const { textLightMenu } = materialDesign().texts;

export function Header() {
  const [active, setActive] = useState(false);

  const ToggleMode = () => {
    console.log("clicou");
    setActive(!active);
  };

  return (
    <header
      className={`p-4 px-7 h-[80px] flex items-center ${textLightMenu} ${bgDarkColor}  absolute right-0 left-0`}
    >
      <nav className={`flex items-center justify-between container mx-auto`}>
        <a className={`${active ? "hidden" : ""}`} href="/">
          <img
            src="./img/SVG/logo-isbm.svg"
            className={`w-[130px] lg:w-[200px]`}
            alt="Logo ISBM"
          />
        </a>
        <ul
          className={`lg:flex gap-5 sm:opacity-100 ${
            active
              ? " px-5 absolute top-[80px] right-0 left-0 w-full h-auto pb-4 opacity-90 sm:pb-0 bg-[#0F0D0E] duration-300"
              : "opacity-0 h-0"
          }`}
        >
          <li>
            <a
              className={`px-2 py-3 border-b-2 border-black sm:border-0 w-full inline-block transition ease delay-100 text-white hover:text-[#F43D5C] duration-300`}
              href="/"
            >
              Início
            </a>
          </li>
          <li>
            <a
              className={`px-2 py-3 border-b-2 border-black sm:border-0 w-full inline-block transition ease-in-out delay-150 hover:text-[#F43D5C] duration-300`}
              href="/"
            >
              Quem Somos
            </a>
          </li>
          <li>
            <a
              className={`px-2 py-3 border-b-2 border-black sm:border-0 w-full inline-block transition ease-in-out delay-150 hover:text-[#F43D5C] duration-300`}
              href="/"
            >
              Programação
            </a>
          </li>
          <li>
            <a
              className={`px-2 py-3 border-b-2 border-black sm:border-0 w-full inline-block transition ease-in-out delay-150 hover:text-[#F43D5C] duration-300`}
              href="/"
            >
              Apoiadores
            </a>
          </li>
          <li>
            <a
              className={`px-2 py-3 w-full inline-block transition ease-in-out delay-150 hover:text-[#F43D5C] duration-300`}
              href="/"
            >
              Blog
            </a>
          </li>
        </ul>
        <div
          className={`${active ? "flex" : "hidden"} sm:flex items-center gap-2`}
        >
          <button
            className={`text-white px-9 py-3 rounded-full transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) hover:scale-[1.23] hover:border-5 duration-300 bg-[#e0234e]`}
          >
            Apoiar
          </button>
          <a className="ml-2 md:ml-4" href="./">
            <img
              width={30}
              src="./img/SVG/icon-instagram.svg"
              alt="Ícone Instagram"
            />
          </a>
          <a href="./">
            <img
              width={30}
              src="./img/SVG/icon-facebook.svg"
              alt="Ícone Facebook"
            />
          </a>
        </div>
        <img
          onClick={ToggleMode}
          src="./img/SVG/amburgIsbm.svg"
          className={`h-7 md:hidden`}
          alt="Menu Hamburg"
        />
      </nav>
    </header>
  );
}
