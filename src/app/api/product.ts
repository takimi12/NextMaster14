import { executeGraphql } from "./graphql";
import {
	GetSingleProductDocument,
	ProductGetReviewsByIdDocument,
	ProductGetSimilarDocument,
	ProductsByNameDocument,
	ProductsGetAllDocument,
	ProductsGetAllPaginatedAscDocument,
	ProductsGetAllPaginatedDocument,
	ProductsGetAllQuery,
	ReviewAddDocument,
	ReviewPublushAddDocument,
	
} from "@/gql/graphql";
import { type SearchProduct } from "@/model/searchProduct";

export type ProductFromResponse = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: Rating;
	image: string;
	longDescription: string;
};

type Rating = {
	rate: number;
	count: number;
};


const getProductsWithAvgRating=(products:ProductsGetAllQuery["products"])=>{
	const productsWithAvgRating=products.map(product=>{
		const ratingsForReview=product.reviews.filter(rat=>rat.rating!==null)
		const ratingCount=ratingsForReview.length || 1;
		return {
			...product,
			avgRating: ratingsForReview.reduce((acc,cur)=>acc+(cur?.rating || 0), 0)/ratingCount
		}
	})
	return productsWithAvgRating
}

function sortASC(a:any, b:any) {
  if (a.avgRating > b.avgRating) {
    return 1;
  } else if (b.avgRating > a.avgRating) {
    return -1;
  } else {
    return 0;
  }
}

function sortDESC(a:any, b:any) {
   if (a.avgRating > b.avgRating) {
    return -1;;
  } else if (b.avgRating > a.avgRating) {
    return 1;;
  } else {
    return 0;
  }
}

export const getAllProductsCount=async ()=>{
		const {productsConnection}= await executeGraphql(ProductsGetAllPaginatedDocument, { skip: 0, first: 20 })
		return productsConnection.aggregate.count
}


export const getAllProductsPaginated = async (currentPage: number, perPage: number, sortOrder:string) => {
	const skip = (currentPage - 1) * perPage;
	if(sortOrder==="asc"){
		const {products}= await executeGraphql(ProductsGetAllPaginatedAscDocument, { skip, first: perPage });
		return products;
	}else if(sortOrder==="averageRating_ASC"){
		console.log("avg asc")
		const {products}= await executeGraphql(ProductsGetAllDocument,{})
		const sorted= getProductsWithAvgRating(products).sort(sortASC)
		return sorted;
	}else if(sortOrder==="averageRating_DESC"){
		console.log("avg desc")
		const {products}= await executeGraphql(ProductsGetAllDocument,{})
		return getProductsWithAvgRating(products).sort(sortDESC)
	}else{
		const {products}= await executeGraphql(ProductsGetAllPaginatedDocument, { skip, first: perPage });
		return products;
	}
};

export const getProduct = (id: string) => {
	return executeGraphql(GetSingleProductDocument, { id: id });
};

export const getProductsByName = async (name: string): Promise<SearchProduct[]> => {
	const graphqlResponse = await executeGraphql(ProductsByNameDocument, { name: name });

	// Access the products property directly
	const products: SearchProduct[] = graphqlResponse.products;

	return products;
};

export const getSimilarProductsByCategory = (categoryName: string) => {
	return executeGraphql(ProductGetSimilarDocument, { categoryName: categoryName });
};

export const getReviewsByProductId=(productId:string)=>{
	return executeGraphql(ProductGetReviewsByIdDocument, {id: productId})
}

export const addAndPublishReview=async ({id,content,email,headline,name,rating}:{id:string, content: string, email:string,headline:string, name:string, rating: number})=>{
	const {createReview}=await executeGraphql(ReviewAddDocument,{id:id, content: content, headline: headline, email: email, name: name, rating: rating})
	if(createReview){
		const published=await executeGraphql(ReviewPublushAddDocument,{id:createReview?.id})
		console.log("published",published)
	}
	
}