import React from "react";
import { materialDesign } from "./MaterialDesign";
import { useState } from "react";

const { bgDarkColor, primaryColor, primaryColorActive } =
  materialDesign().colors;
const { textLightMenu } = materialDesign().texts;

export function Header() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const ToggleMode = () => {
    setActive(!active);
  };

  const handleMenuMobile = () => {
    setOpen(!open)
    ToggleMode()
  }

  const itemsMenu = [
    {
      nome: "Início",
      link: "/",
    },
    {
      nome: "Quem Somos",
      link: "/quem-somos",
    },
    {
      nome: "Programação",
      link: "/programacao",
    },
    {
      nome: "Apoiadores",
      link: "/programacao",
    },
  ];

  return (
    <header
      className={`p-4 px-7 lg:mt-9 h-[80px] flex items-center ${textLightMenu} ${bgDarkColor}  absolute right-0 left-0`}
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
          className={`lg:flex lg:items-center gap-5 sm:opacity-100 ${
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
           - Apoiar
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
        <ul
          onClick={handleMenuMobile}
          className="md:hidden relative flex h-10 w-10 flex-col items-center justify-center gap-3 cursor-pointer hover:bg-[#e0234e] rounded transition duration-150 ease-in hover:transform hover:scale-105"
        >
          <li
            className={`${
              open ? "transform rotate-45 absolute" : ""
            } w-7 h-[3px] rounded-[2px] bg-white transition duration-150 ease-in-out`}
          ></li>
          <li
            className={`${
              open ? "transform -rotate-45 absolute" : ""
            } w-7 h-[3px] rounded-[2px] bg-white transition duration ease-in-out`}
          ></li>
        </ul>
      </nav>
    </header>
  );
}
