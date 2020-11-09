export type ImageProduit = {
  src: string
}

export type Produits = {
  id: Number
  libelle: string
  description: string
  image: ImageProduit,
  price: Number
}
