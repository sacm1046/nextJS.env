import { useState, useEffect } from 'react'

const List = ({products}) => {
  console.log(products)
  return <pre>{JSON.stringify(products,null,3)}</pre>
}

List.getInitialProps = async (ctx) => {
  const res = await fetch('https://aact.pythonanywhere.com/products')
  const data = await res.json()
  return { products: data}
}
export default List