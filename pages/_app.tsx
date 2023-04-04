import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import { ReactElement, ReactNode } from "react";
import "../styles/globals.css";
export type NextPageWithLayout<P = Record<string, never>, IP = P> = NextPage<
	P,
	IP
> & {
	getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};
export default function App(props: AppPropsWithLayout) {
	const {
		Component,
		pageProps: { ...pageProps },
	} = props;
	const getLayout = Component.getLayout ?? ((page) => page);
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>FEU TECH ACM Student Chapter</title>
				<meta
					name="description"
					content="The Official Website of the 2nd internationally recognized student chapter of ACM in the country."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, minimum-scale=1.0, shrink-to-fit=no, viewport-fit=cover"
				/>
			</Head>
			<NextNProgress
				// puts the loader at the bottom right
				color={"#5f24a4"}
				transformCSS={(css) => {
					return <style>{css.replace("top: 15px;", "bottom: 15px;")}</style>;
				}}
			/>
			{getLayout(<Component {...pageProps} />)}
		</>
	);
}
