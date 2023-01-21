import GenImage from "@/components/gen/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./index.module.css";
const Nav: React.FC = () => {
	const scrollRef = useRef<HTMLDivElement>(null);
	const scrollListener = () => {
		if (scrollRef.current) {
			const { scrollTop, scrollHeight, clientHeight } =
				document.documentElement;
			const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
			scrollRef.current.style.width = `${scrolled}%`;
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", scrollListener);
		return () => window.removeEventListener("scroll", scrollListener);
	}, []);
	return (
		<nav className={styles.nav}>
			<div className={styles.container}>
				<div className={styles.bar} ref={scrollRef}></div>
			</div>
			<span className={styles.flex}>
				<Link href={"."} className={styles.logo}>
					<GenImage
						props={{
							src: "/feuacm.png",
							alt: "Logo",
							width: 80,
							height: 45,
						}}
					/>
					<div>FEU&nbsp;TECH&nbsp;ACM</div>
				</Link>
				<span className={styles.links}>
					<Link href={"#about"}>About</Link>
					<Link href={"#committees"}>Committees</Link>
					<Link href={"#events"}>Events</Link>
					<Link href={"#Register"}>Register</Link>
					<Link href={"#contact"}>Contact</Link>
				</span>
			</span>
		</nav>
	);
};
export default Nav;
