import GenImage from "@/components/gen/image";
import Link from "next/link";
import styles from "./index.module.css";
const Nav: React.FC = () => {
	return (
		<nav className={styles.nav}>
			<Link href={"."} className={styles.logo}>
				<GenImage
					props={{
						src: "/feuacm.png",
						alt: "Logo",
						width: 80,
						height: 45,
					}}
				/>
				FEU TECH ACM
			</Link>
			<span className={styles.links}>
				<Link href={"#"}>Home</Link>
				<Link href={"#about"}>About</Link>
				<Link href={"#committees"}>Committees</Link>
				<Link href={"#events"}>Events</Link>
				<Link href={"#contact"}>Contact</Link>
				<Link href={"#iteration"}>Iteration</Link>
			</span>
		</nav>
	);
};
export default Nav;
