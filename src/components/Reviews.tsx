"use client";

import { useOptimistic } from "react";

export type Review={
            content: string;
            headline: string;
            email: string;
            name: string;
            rating?: number | null;
        }

type ReviewsProps = {
	productId: string;
	reviews: Review[];
	addReviewAction: (review: any) => void; // Dodaj dokładny typ funkcji addReviewAction
};

export const Reviews = ({  reviews, addReviewAction }: ReviewsProps) => {

	const [productReviews,setProductReviews]=useOptimistic(
		reviews,
		//@ts-ignore
		(_state,newReview)=>{
			return [..._state,newReview]
		}
	)


	//pobieranie recenzji
	//dodawanie recenzji
	const addReview = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const headline = (event.target as any).headline.value;
		const content = (event.target as any).content.value;
		const rating = Number((event.target as any).rating.value);
		const name = (event.target as any).name.value;
		const email = (event.target as any).email.value;
	
		setProductReviews([...productReviews, { headline, content, rating, name, email }]);
		addReviewAction({ headline, content, rating, name, email });
	  };

	return (
		<>
			<form onSubmit={addReview} data-testid="add-review-form">
				<input type="text" name="headline" placeholder="Headline" />
				<input type="text" name="content" placeholder="Content" />
				<input type="text" name="rating" placeholder="Rating" />
				<input type="text" name="name" placeholder="Name" />
				<input type="email" name="email" placeholder="Email" />
				<button type="submit">Wyślij</button>
			</form>
			{productReviews && productReviews.map((el,index) => (
				<div key={el.name}>
					<p>Headline: {el.headline}</p>
					<p>Content: {el.content}</p>
					<p>Name: {el.name}</p>
					<p>Email: {el.email}</p>
					<p>Rating: {el.rating}</p>
					{index !== productReviews.length - 1 && <hr />}
				</div>
			))}
		</>
	);
};