import type { IconType } from "react-icons";

import {
  DartIcon,
  DbeaverIcon,
  FigmaIcon,
  FlutterIcon,
  GithubBrandIcon,
  JavaIcon,
  JavascriptIcon,
  MysqlIcon,
  NextIcon,
  NodeIcon,
  OracleIcon,
  PostgresIcon,
  PostmanIcon,
  PythonIcon,
  ReactIcon,
  SqlIcon,
  TypescriptIcon,
} from "./ui/icons";

// Each skill is an app icon. `bg` fills the tile in the brand's colour;
// without it the tile stays dark and only the logo takes the colour.
export interface Skill {
  name: string;
  Icon: IconType;
  color: string;
  bg?: string;
}

// Every skill, by name, shared by Field of Expertise and the project cards
export const skills = {
  Dart: { name: "Dart", Icon: DartIcon, color: "#40c4ff" },
  JavaScript: {
    name: "JavaScript",
    Icon: JavascriptIcon,
    color: "#1a1a1a",
    bg: "#f7df1e",
  },
  SQL: { name: "SQL", Icon: SqlIcon, color: "#7fb2ff" },
  TypeScript: {
    name: "TypeScript",
    Icon: TypescriptIcon,
    color: "#ffffff",
    bg: "#3178c6",
  },
  Java: { name: "Java", Icon: JavaIcon, color: "#f89820" },
  Python: { name: "Python", Icon: PythonIcon, color: "#ffd43b", bg: "#306998" },
  Flutter: { name: "Flutter", Icon: FlutterIcon, color: "#54c5f8" },
  React: { name: "React", Icon: ReactIcon, color: "#61dafb", bg: "#20232a" },
  "Next.js": { name: "Next.js", Icon: NextIcon, color: "#000000", bg: "#eaf0fd" },
  "Node.js": { name: "Node.js", Icon: NodeIcon, color: "#6cc24a" },
  PostgreSQL: {
    name: "PostgreSQL",
    Icon: PostgresIcon,
    color: "#ffffff",
    bg: "#336791",
  },
  Oracle: { name: "Oracle", Icon: OracleIcon, color: "#ff3b30" },
  MySQL: { name: "MySQL", Icon: MysqlIcon, color: "#f29111", bg: "#00546b" },
  DBeaver: { name: "DBeaver", Icon: DbeaverIcon, color: "#c8a27a" },
  Postman: { name: "Postman", Icon: PostmanIcon, color: "#ffffff", bg: "#ff6c37" },
  GitHub: { name: "GitHub", Icon: GithubBrandIcon, color: "#eaf0fd" },
  Figma: { name: "Figma", Icon: FigmaIcon, color: "#ffffff", bg: "#1e1e1e" },
} satisfies Record<string, Skill>;

export type SkillName = keyof typeof skills;
