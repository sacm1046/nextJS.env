import { useState, useEffect } from 'react'

const List = ({ products }) => {

  const [prod, setProd] = useState([])

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch('https://aact.pythonanywhere.com/products')
      const data = await res.json()
      setProd(data)
    }
    if (products?.length == 0) {
      loadData()
    }
    //if the owners[0] is undefined show the div with "loading..." content
    if (!prod?.[0]) {
      <div>Loading...</div>
    }
  }, [])

  return <pre>{JSON.stringify(products, null, 3)}</pre>
}

List.getInitialProps = async (ctx) => {
  const res = await fetch('https://aact.pythonanywhere.com/products')
  const data = await res.json()
  return { products: data }
}
export default List