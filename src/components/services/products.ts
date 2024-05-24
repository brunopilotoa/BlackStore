// pages/api/products.ts

import { NextApiRequest, NextApiResponse } from 'next';
import products from '/database.json'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(products)
}

export type ProductType = {
  id: number
  name: string
  description: string
  price: number
  imageUrl: string
  inStock: number
}

export const fetchProducts = async () => {
  const products: ProductType[] = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`).then(res => res.json())
  return products
}

export const fetchProduct = async (id: string | number) => {
  const product: ProductType = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`).then(res => res.json())
  return product
}