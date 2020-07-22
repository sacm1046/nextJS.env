
const Home = ({data}) => {
  return (
    <pre>
      {JSON.stringify(data, null, 4)}
    </pre>
  )
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch('http://127.0.0.1:5000/vehicles')
  const json= await res.json()
  return { data: json }
}

export default Home