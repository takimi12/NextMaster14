/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CartCreate($email: String!, $stripeCheckoutId: String!) {\n  createOrder(\n    data: {email: $email, stripeCheckoutId: $stripeCheckoutId, total: 0}\n  ) {\n    id\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    id\n  }\n}": types.CartGetByIdDocument,
    "query CollectionGetById($id: ID!) {\n  collection(where: {id: $id}) {\n    id\n    name\n    products {\n      description\n      id\n      name\n      price\n      description\n      categories {\n        name\n      }\n      images {\n        url\n      }\n    }\n  }\n}": types.CollectionGetByIdDocument,
    "query CollectionsGetList {\n  collections {\n    id\n    name\n  }\n}": types.CollectionsGetListDocument,
    "query GetProductById($id: ID) {\n  product(where: {id: $id}) {\n    name\n    description\n    price\n    images {\n      url\n    }\n  }\n}": types.GetProductByIdDocument,
    "query ProductGetReviewsById($id: ID) {\n  product(where: {id: $id}) {\n    reviews {\n      content\n      headline\n      email\n      name\n      rating\n    }\n  }\n}": types.ProductGetReviewsByIdDocument,
    "query ProductGetSimilar($categoryName: String!) {\n  products(where: {categories_every: {_search: $categoryName}}, first: 4) {\n    description\n    id\n    name\n    price\n    description\n    categories {\n      name\n    }\n    images {\n      url\n    }\n  }\n}": types.ProductGetSimilarDocument,
    "query GetSingleProduct($id: ID) {\n  product(where: {id: $id}) {\n    name\n    description\n    price\n    categories {\n      name\n    }\n    images {\n      url\n    }\n    variants {\n      ... on ProductSizeColorVariant {\n        id\n        name\n        size\n        color\n      }\n    }\n  }\n}": types.GetSingleProductDocument,
    "query ProductsGetAll {\n  products {\n    id\n    name\n    price\n    description\n    reviews {\n      rating\n    }\n    categories {\n      name\n    }\n    images {\n      url\n    }\n  }\n}": types.ProductsGetAllDocument,
    "query ProductsGetAllPaginated($skip: Int!, $first: Int!) {\n  products(skip: $skip, first: $first, orderBy: price_DESC) {\n    id\n    name\n    price\n    description\n    categories {\n      name\n    }\n    images {\n      url\n    }\n  }\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetAllPaginatedDocument,
    "query ProductsGetAllPaginatedAsc($skip: Int!, $first: Int!) {\n  products(skip: $skip, first: $first, orderBy: price_ASC) {\n    id\n    name\n    price\n    description\n    categories {\n      name\n    }\n    images {\n      url\n    }\n  }\n}": types.ProductsGetAllPaginatedAscDocument,
    "query ProductsByName($name: String!) {\n  products(where: {name_contains: $name}) {\n    id\n    name\n    description\n    images {\n      id\n      url\n    }\n    categories {\n      name\n      id\n    }\n    price\n  }\n}": types.ProductsByNameDocument,
    "mutation ReviewAdd($id: ID!, $content: String!, $name: String!, $headline: String!, $email: String!, $rating: Int) {\n  createReview(\n    data: {headline: $headline, name: $name, email: $email, content: $content, product: {connect: {id: $id}}, rating: $rating}\n  ) {\n    id\n  }\n}": types.ReviewAddDocument,
    "mutation ReviewPublushAdd($id: ID!) {\n  publishReview(where: {id: $id}) {\n    id\n  }\n}": types.ReviewPublushAddDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate($email: String!, $stripeCheckoutId: String!) {\n  createOrder(\n    data: {email: $email, stripeCheckoutId: $stripeCheckoutId, total: 0}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    id\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetById($id: ID!) {\n  collection(where: {id: $id}) {\n    id\n    name\n    products {\n      description\n      id\n      name\n      price\n      description\n      categories {\n        name\n      }\n      images {\n        url\n      }\n    }\n  }\n}"): typeof import('./graphql').CollectionGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  collections {\n    id\n    name\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProductById($id: ID) {\n  product(where: {id: $id}) {\n    name\n    description\n    price\n    images {\n      url\n    }\n  }\n}"): typeof import('./graphql').GetProductByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetReviewsById($id: ID) {\n  product(where: {id: $id}) {\n    reviews {\n      content\n      headline\n      email\n      name\n      rating\n    }\n  }\n}"): typeof import('./graphql').ProductGetReviewsByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetSimilar($categoryName: String!) {\n  products(where: {categories_every: {_search: $categoryName}}, first: 4) {\n    description\n    id\n    name\n    price\n    description\n    categories {\n      name\n    }\n    images {\n      url\n    }\n  }\n}"): typeof import('./graphql').ProductGetSimilarDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetSingleProduct($id: ID) {\n  product(where: {id: $id}) {\n    name\n    description\n    price\n    categories {\n      name\n    }\n    images {\n      url\n    }\n    variants {\n      ... on ProductSizeColorVariant {\n        id\n        name\n        size\n        color\n      }\n    }\n  }\n}"): typeof import('./graphql').GetSingleProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetAll {\n  products {\n    id\n    name\n    price\n    description\n    reviews {\n      rating\n    }\n    categories {\n      name\n    }\n    images {\n      url\n    }\n  }\n}"): typeof import('./graphql').ProductsGetAllDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetAllPaginated($skip: Int!, $first: Int!) {\n  products(skip: $skip, first: $first, orderBy: price_DESC) {\n    id\n    name\n    price\n    description\n    categories {\n      name\n    }\n    images {\n      url\n    }\n  }\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetAllPaginatedDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetAllPaginatedAsc($skip: Int!, $first: Int!) {\n  products(skip: $skip, first: $first, orderBy: price_ASC) {\n    id\n    name\n    price\n    description\n    categories {\n      name\n    }\n    images {\n      url\n    }\n  }\n}"): typeof import('./graphql').ProductsGetAllPaginatedAscDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsByName($name: String!) {\n  products(where: {name_contains: $name}) {\n    id\n    name\n    description\n    images {\n      id\n      url\n    }\n    categories {\n      name\n      id\n    }\n    price\n  }\n}"): typeof import('./graphql').ProductsByNameDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewAdd($id: ID!, $content: String!, $name: String!, $headline: String!, $email: String!, $rating: Int) {\n  createReview(\n    data: {headline: $headline, name: $name, email: $email, content: $content, product: {connect: {id: $id}}, rating: $rating}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').ReviewAddDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewPublushAdd($id: ID!) {\n  publishReview(where: {id: $id}) {\n    id\n  }\n}"): typeof import('./graphql').ReviewPublushAddDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
