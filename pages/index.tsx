import GenSnow from "@/components/gen/snow";
import { Footer, Main, Nav } from "@/dynamic/index";
import styles from "./index.module.css";
import { NextPageWithLayout } from "./_app";
const Index: NextPageWithLayout = () => {
	return (
		<>
			<Nav />
			<Main />
			<Footer />
		</>
	);
};
export default Index;
