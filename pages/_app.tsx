import type { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";
export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>FEU TECH ACM</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, minimum-scale=1.0, shrink-to-fit=no, viewport-fit=cover"
				/>
			</Head>
			<NextNProgress
				// puts the loader at the bottom right
				color={"#007acc"}
				transformCSS={(css) => {
					return <style>{css.replace("top: 15px;", "bottom: 15px;")}</style>;
				}}
			/>
			<Component {...pageProps} />;
		</>
	);
}
