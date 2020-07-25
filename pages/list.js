import { useState, useEffect } from 'react'

const List = ({ data }) => {

  return (
    <ul>
      {
        data.map(({ id, details }) => (
          <li key={id}>{details}</li>
        ))
      }
    </ul>
  )
}
export default List

List.getInitialProps = async () => {
  const res = await fetch('http://127.0.0.1:5000/vehicles')
  const json = await res.json()
  return { data: json }
}
