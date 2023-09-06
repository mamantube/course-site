function ShowPrice({ products }) {
  if (products.discountPrice) {
    return <p><s>{products.price}</s>{products.discountPrice}</p>
  }
  return <p>{products.price}</p>
}

export default ShowPrice