import React from 'react';

type CategoryPageParams = {
    categoryName: string;
    categoryPage: string;
};

export default async function  CategoryPage({ params }: { params: CategoryPageParams })  {

      return (
        <div>
            {params.categoryName} {params.categoryPage}
        </div>
    );
};
