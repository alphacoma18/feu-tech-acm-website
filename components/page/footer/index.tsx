import styles from "./index.module.css";
const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.copyright}>
				Copyright &copy; 2021 FEU TECH ACM. All rights reserved.
			</div>
		</footer>
	);
};
export default Footer;
