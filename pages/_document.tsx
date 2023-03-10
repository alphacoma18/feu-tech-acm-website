import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta name="author" content="Alpha Romer Coma, alphacoma18@gmail.com" />
				<meta name="reply-to" content="alphacoma18@gmail.com" />
				<meta name="designer" content="Alpha Romer Coma" />
				<meta name="publisher" content="Alpha Romer Coma" />
				<meta name="owner" content="FEU TECH ACM Student Chapter" />
				<meta name="copyright" content="FEU TECH ACM Student Chapter" />
				<meta name="target" content="all" />
				<meta name="url" content="https://feutech.acm.org" />
				<meta name="keywords" content="" />
				<meta name="Classification" content="Editor" />
				<meta name="language" content="EN" />
				<meta name="coverage" content="Worldwide" />
				<meta name="distribution" content="Global" />
				<meta name="rating" content="General" />
				<meta name="subject" content="" />
				<meta name="topic" content="" />
				<meta name="abstract" content="" />

				{/* Robot Meta Tags */}
				<meta name="robots" content="all" />
				<meta name="Googlebot" content="all" />
				<meta name="Bingbot" content="all" />
				<meta name="Baiduspider" content="all" />
				<meta name="YandexBot" content="all" />
				<meta name="revisit-after" content="2 days" />

				{/* Open Graph Meta Tags */}
				<meta property="og:title" content="FEU TECH ACM" />

				<meta property="og:description" content="" />
				<meta property="og:url" content="https://feutech.acm.org" />
				<meta property="og:site_name" content="FEU TECH ACM" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="" />
				<meta property="og:image:type" content="image/jpg" />
				<meta
					property="og:image:alt"
					content="FEU TECH ACM Student Chapter Logo"
				/>
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:locale" content="en_US" />
				<meta name="og:country-name" content="Philippines" />
				<meta property="og:email" content="alphacoma18@gmail.com" />
				<meta property="og:locale:alternative" content="ja_JP" />

				{/* Twitter Meta Tags */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@senodesuzo" />
				<meta name="twitter:site:id" content="1267687960742248449" />
				<meta name="twitter:creator" content="@senodesuzo" />
				<meta name="twitter:creator:id" content="1267687960742248449" />
				<meta property="twitter:description" content="" />
				<meta property="twitter:title" content="FEU Tech ACM Student Chapter" />
				<meta name="twitter:image" content="" />
				<meta
					name="twitter:image:alt"
					content="FEU Tech ACM Student Chapter Logo"
				/>
				<meta property="twitter:url" content="https://feutech.acm.org" />
				<meta name="twitter:app:country" content="EN" />
				<meta name="twitter:image:type" content="image/jpg" />
				<meta name="twitter:image:width" content="1200" />
				<meta name="twitter:image:height" content="630" />
				<link rel="canonical" href="https://feutech.acm.org" />

				{/* Do not put this meta tag if you want to work and debug with next.js on mobile */}

				{/* <meta
					httpEquiv="Content-Security-Policy"
					content="upgrade-insecure-requests"
				/> */}

				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-title" content="FEU TECH ACM" />
				<meta name="apple-touch-fullscreen" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="#ffffff" />
				<meta name="application-name" content="FEU TECH ACM" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="msapplication-navbutton-color" content="#ffffff" />
				<meta name="msapplication-TileImage" content="/mstile-144x144.png" />
				<meta name="msapplication-config" content="/browserconfig.xml" />
				<meta name="msapplication-tap-highlight" content="no" />
				<meta name="theme-color" content="#ffffff" />
				<meta name="format-detection" content="telephone=no" />

				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="194x194"
					href="/favicon-194x194.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="/android-chrome-192x192.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" />
				<link rel="manifest" href="/manifest.webmanifest" />
				<meta name="color-scheme" content="dark light" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
