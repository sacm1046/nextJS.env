
const Home = ({data}) => {
  return (
    <pre>
      {JSON.stringify(data, null, 4)}
    </pre>
  )
}
export default Home

Home.getInitialProps = async () => {
  const res = await fetch('http://127.0.0.1:5000/vehicles')
  const data= await res.json()
  return { data: data }
}