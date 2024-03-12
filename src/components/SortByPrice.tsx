"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export const SortOrder = () => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();
	const [sortValue, setSortValue] = useState(searchParams?.get("sort") ?? "asc");

	useEffect(() => {
		if (sortValue !==  "asc") {
			const searchParams = sortValue ? `?sort=${encodeURIComponent(sortValue)}` : "";

			// @ts-ignore
			router.push(`${pathname}${searchParams}`);
		} else {
			// @ts-ignore
			router.push(pathname);
		}
	}, [sortValue]);
	const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value;
		setSortValue(value);
	};
	return (
		<select
			id="sort"
			onChange={(e) => onChangeSelect(e)}
			value={sortValue || ""}
			className="arrow-down-bg block w-48 cursor-pointer appearance-none rounded-md border-gray-300 px-2 py-1 text-sm font-light shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 lg:mt-1"
		>
			<option value="">Order by:</option>
			<option value="averageRating_ASC" data-testid="sort-by-rating">
				Rating (Low to High)
			</option>
			<option value="averageRating_DESC" data-testid="sort-by-rating">
				Rating (High to Low)
			</option>
			<option value="asc" data-testid="sort-by-price">
				Price (Low to High)
			</option>
			<option value="desc" data-testid="sort-by-price">
				Price (High to Low)
			</option>
		</select>
	);
};
