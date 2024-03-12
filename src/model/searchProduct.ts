export type SearchProduct = {
	id: string;
	name: string;
	description: string;
	price: number;
	images: { id: string; url: string }[];
	categories: { name: string; id: string }[];
};
