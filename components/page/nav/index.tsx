import GenImage from "@/components/gen/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";

export default () => {
	const [isToggled, setIsToggled] = useState<boolean>(false);
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
				<span
					className={`${styles.links} ${
						isToggled ? styles.toggledNav : styles.untoggledNav
					}`}
				>
					<Link href={"#about"}>About</Link>
					<Link href={"#committees"}>Committees</Link>
					<Link href={"#events"}>Events</Link>
					<Link href={"#sponsors"}>Sponsors</Link>
					<Link href={"#contact"}>Contact</Link>
				</span>
				<button
					className={`omitFromMobile ${styles.menuContainer}`}
					onClick={() => setIsToggled((prev) => !prev)}
				>
					<div className={styles.menuLines}></div>
					<div className={styles.menuLines}></div>
					<div className={styles.menuLines}></div>
				</button>
			</span>
		</nav>
	);
};
