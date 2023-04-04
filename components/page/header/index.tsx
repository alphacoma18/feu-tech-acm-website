import GenImage from "@/components/gen/image";
import Script from "next/script";
import styles from "./index.module.css";
export default () => {
	return (
		<div className={styles.hero}>
			<GenImage
				props={{
					src: "/feuacm.png",
					alt: "Logo",
					width: 240,
					height: 135,
				}}
			/>
			<h1>FEU Institute of Technology</h1>
			<h2>Association of Computing Machinery</h2>
			<h2>Student Chapter</h2>
			<q>The dreams of the past, coming in fast</q>
			{/* use Script to add google translate */}
			<Script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></Script>
			<div
				id="google_translate_element"
				className={styles.googleTranslate}
			></div>
			<Script type="text/javascript" id="google_translate_element_script">
				{`
                    function googleTranslateElementInit() {
                        new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
                    }
                `}
			</Script>
		</div>
	);
};
