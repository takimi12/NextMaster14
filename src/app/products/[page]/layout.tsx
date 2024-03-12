
export default async function RootLayout({ children }: { children: React.ReactNode }) {
	//TODO: zamienić na graphql

	return (
		<>
			<section>{children}</section>

		</>
	);
}
