import { materialDesign } from "./MaterialDesign";
const { bgDarkColor } = materialDesign().colors;

export function Header() {
  return (
    <header className={`p-5 ${bgDarkColor}`}>
      <nav className={`flex items-center justify-between`}>
        <a href="/">
          <img
            src="./img/SVG/logo-isbm.svg"
            className={`w-[130px]`}
            alt="Logo ISBM"
          />
        </a>
        <ul className={`hidden`}>
          <li></li>
        </ul>
        <img
          src="./img/SVG/amburgIsbm.svg"
          className={`h-6`}
          alt="Menu Hamburg"
        />
      </nav>
    </header>
  );
}
