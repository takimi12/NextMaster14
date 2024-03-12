import { getCollectionById, getCollectionsList } from "@/app/api/collection";
import { ProductList } from "@/components/ProductList";

export default async function SingleCollectionPage({ params }: { params: { collection: string } }) {
	const collection = await getCollectionById(params.collection);
	
	return (
		<main className="mx-auto min-h-screen max-w-7xl">
			<h1 className="pb-20 text-4xl font-extrabold first-letter:uppercase" role="heading">
				{collection.name}
			</h1>
			<ProductList products={collection.products} />
		</main>
	);
}

export async function generateStaticParams() {
	const collections = await getCollectionsList();

	return collections.map((collection) => ({
		id: collection.id,
	}));
}

