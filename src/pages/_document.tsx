import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="pt-BR">
				<Head>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css?family=Roboto:wgh@400;700;900t&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body className="bg-gray-200">
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
