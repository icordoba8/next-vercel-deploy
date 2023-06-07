import Link from "next/link";
import styles from "@/styles/Sidebar.module.css";
import LinkActive from "./LinkActive";

type MenuItem = {
  text: string;
  href: string;
};

const menuItems: MenuItem[] = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      {menuItems.map((item: MenuItem, index: number) => (
        <LinkActive text={item.text} href={item.href} key={index} />
      ))}
    </nav>
  );
}
