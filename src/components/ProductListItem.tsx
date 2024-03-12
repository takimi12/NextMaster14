import Link from "next/link";
import { ProductCoverImage } from "@/components/ProductCoverImage";
import { ProductListItemDescription } from "@/components/ProductListItemDescription";
import { ProductsGetAllPaginatedQuery } from "@/gql/graphql";

type ProductListItemProps = {
	product: ProductsGetAllPaginatedQuery["products"][0];
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li key={product.id} className="group">
			<Link href={`/product/${product.id}`}>
				<article>
					<ProductCoverImage src={product.images[0].url} alt={"TOOD: alt of image"} />
					<ProductListItemDescription name={product.name} />
				</article>
			</Link>
		</li>
	);
};
