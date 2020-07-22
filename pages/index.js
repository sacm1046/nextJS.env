import { useState, useEffect } from 'react'

const Home = ({ data }) => {

  const [dat, setDat] = useState(data)

  useEffect(() => {
      const loadData = async () => {
        const res = await fetch('http://127.0.0.1:5000/vehicles')
        const json = await res.json()
        setDat(json)
      }
      if(data.length == 0) {
          loadData()
      }
      if (!data) {
          <div>Loading...</div>
      }
  }, [])

  return (
    <pre>
      {JSON.stringify(dat, null, 4)}
    </pre>
  )
}
export async function getServerSideProps(ctx) {

  !ctx.req && { ownerList: [] }
  const res = await fetch('http://127.0.0.1:5000/vehicles')
  const data = await res.json()
  return { props: { data } }
}
export default Home