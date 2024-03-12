import Image from "next/image";
import { notFound } from "next/navigation";
import { ImageResponse } from 'next/og'
import { getProduct } from '@/app/api/product'




// Image metadata
export const alt = 'Sklep'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
// Image generation
export default async function OgImage({ params }: { params: { productId: string } }) {
  const { product } = await getProduct(params.productId)
  if(!product){
    notFound()
  }
 
  return new ImageResponse(
    (
      <div>
        <p>Name: {product.name}</p>
        <p>Desc: {product.description}</p>
        {product.categories.map(category=><p key={category.name}>{category.name}</p>)}
        <Image width={400} height={400} src={product.images[0].url} alt={product.name} />
      </div>
    ),
  )
}