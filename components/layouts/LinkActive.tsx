import { useRouter } from "next/router";
import Link from "next/link";
import styles from "@/styles/Sidebar.module.css";

type Props = {
  text: string;
  href: string;
};

const LinkActive = ({ text, href }: Props) => {
  const router = useRouter();
  const asPath: boolean = router.asPath === href;
  return (
    <Link className={asPath ? styles.active : ""} href={href}>
      {text}
    </Link>
  );
};

export default LinkActive;
