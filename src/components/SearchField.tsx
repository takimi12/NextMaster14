"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "@uidotdev/usehooks";
import { Input } from "@/components/ui/input";



export const SearchField = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const debouncedSearchTerm = useDebounce(searchTerm, 500);
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};
	const router = useRouter();

	useEffect(() => {
		if (debouncedSearchTerm) {
			router.push(`/search?query=${debouncedSearchTerm}`);
		}
	}, [debouncedSearchTerm, router]);

	return <Input placeholder="search" type="search" onChange={handleChange} />;
};