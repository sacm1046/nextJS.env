import { useState, useEffect } from 'react'

const List = ({ data }) => {

  const [dat, setDat] = useState(data)

  return (
    <pre>
      {JSON.stringify(dat, null, 4)}
    </pre>
  )
}
export default List

List.getInitialProps = async () => {
  const res = await fetch('http://127.0.0.1:5000/vehicles')
  const json = await res.json()
  return { data: json }
}
