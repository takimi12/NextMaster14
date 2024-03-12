import { getAllProductsCount, getAllProductsPaginated } from "@/app/api/product";
import { ProductList } from "@/components/ProductList";
import { SortOrder } from "@/components/SortByPrice";
// Zmodyfikuj funkcję generującą statyczne parametry
export async function generateStaticParams() {
	const count = await getAllProductsCount();
	const numOfPages = Math.ceil(count / 20);; // Ustaw ilość produktów na stronie
	const pages = Array.from({ length: numOfPages }, (_, i) => i + 1);
	return pages.map((page) => ({ params: { page: page.toString() } }));
}

// Zmodyfikuj funkcję strony produktów
export default async function ProductsPage({ params,searchParams }: { params: { page: string },searchParams?:{ [key: string]: string | undefined } }) {


	const currentPage = parseInt(params.page) || 1; // Pobierz aktualną stronę z parametrów URL
	const perPage = 5; // Ustaw ilość produktów na stronie
	const { sort: sortValue } = searchParams as { "sort": string };
	const sortQuery = sortValue ?? "asc";
	console.log("sortQuery",sortQuery)

	const products = await getAllProductsPaginated(currentPage, perPage, sortQuery);


	return <>
	<SortOrder />
	<ProductList products={products} />
	</>;
}