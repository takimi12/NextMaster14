import { redirect } from "next/navigation";
import { executeGraphql } from "./graphql";
import { Collection } from "@/model/collection";
import { CollectionGetByIdDocument, CollectionsGetListDocument } from "@/gql/graphql";

export const getCollectionsList = async (): Promise<Collection[]> => {
	const graphqlResponse = await executeGraphql(CollectionsGetListDocument, {});

	return graphqlResponse.collections.map((collection) => ({
		id: collection.id,
		name: collection.name,
	}));
};

export const getCollectionById = async (id: string) => {
	console.log("id",id)
	const graphqlResponse = await executeGraphql(CollectionGetByIdDocument, { id:id });
	if (!graphqlResponse.collection) {
		redirect("/");
	}
	return {
		name: graphqlResponse.collection.name,
		products: graphqlResponse.collection.products,
	};
};