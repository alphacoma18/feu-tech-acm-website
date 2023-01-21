import dynamic from "next/dynamic";

export const Nav = dynamic(() => import("../nav/index"), {
	loading: () => <p>Loading...</p>,
	ssr: false,
});

export const Footer = dynamic(() => import("../footer/index"), {
	loading: () => <p>Loading...</p>,
	ssr: false,
});
