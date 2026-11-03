"use client";

// react-icons v4 is not marked as a client module; re-export the icons here
// so server components can render them.
export {
  FaArrowRight as ArrowRightIcon,
  FaArrowUp as ArrowUpIcon,
  FaGithub as GithubIcon,
  FaLinkedinIn as LinkedinIcon,
  FaWhatsapp as WhatsappIcon,
} from "react-icons/fa6";
export { FiArrowUpRight as ArrowUpRightIcon } from "react-icons/fi";

// Skill logos for the Field of Expertise tiles
export {
  SiDart as DartIcon,
  SiJavascript as JavascriptIcon,
  SiTypescript as TypescriptIcon,
  SiPython as PythonIcon,
  SiFlutter as FlutterIcon,
  SiReact as ReactIcon,
  SiNextdotjs as NextIcon,
  SiNodedotjs as NodeIcon,
  SiPostgresql as PostgresIcon,
  SiOracle as OracleIcon,
  SiMysql as MysqlIcon,
  SiPostman as PostmanIcon,
  SiGithub as GithubBrandIcon,
  SiFigma as FigmaIcon,
} from "react-icons/si";
export { FaJava as JavaIcon } from "react-icons/fa6";
export { TbSql as SqlIcon, TbDatabaseSearch as DbeaverIcon } from "react-icons/tb";
