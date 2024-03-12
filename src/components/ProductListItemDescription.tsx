

type ProductListItemDescriptionProps = {
	name: string;
};

export const ProductListItemDescription = ({ name }: ProductListItemDescriptionProps) => {
	return (
		<div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
			<h3 className="text-sm text-zinc-700">{name}</h3>

			<p className="font-mono text-sm font-medium text-zinc-900">
				<span className="sr-only">Cena:</span>
			</p>
		</div>
	);
};