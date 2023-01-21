import GenSnow from "@/components/gen/snow";
import styles from "./index.module.css";
const Main: React.FC = () => {
	return (
		<main className={styles.main}>
			<GenSnow />
			<div className={styles.container}></div>
		</main>
	);
};
export default Main;
