import {
	type TypedDocumentString,
} from "@/gql/graphql";

type GraphQLResponse<T> =
		| { data?: undefined; errors: { message: string }[] }
		| { data: T; errors?: undefined };

export const executeGraphql = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) {
		throw TypeError("GRAPHQL_URL not set");
	}
	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});

	const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;
	if (graphqlResponse.errors) {
		console.log("graphql err",graphqlResponse.errors)
		throw TypeError(`GRAPHQL Error`, { cause: graphqlResponse.errors });
	}

	return graphqlResponse.data;
};