import GenSnow from "@/components/gen/snow";
import { Header } from "..";
import styles from "./index.module.css";
export default () => {
	return (
		<main className={styles.main}>
			<GenSnow />
			<div className={styles.container}>
				<Header />
			</div>
		</main>
	);
};
