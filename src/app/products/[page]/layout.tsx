import { getAllProductsCount } from "@/app/api/product";
import { Pagination } from "@/components/Pagination";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const count = await getAllProductsCount();
	const numOfPages = Math.ceil(count / 20);
	return (
		<>
			<section>{children}</section>
			<Pagination numOfPages={numOfPages} />
		</>
	);
}