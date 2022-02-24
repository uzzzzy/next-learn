import Background from "../components/layouts/Background"
import Layout from "../components/layouts/Main"

export default function Home() {
  return (
    <div>
      Nomaden
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout >
      <Background>
        {page}
      </Background>
    </Layout>
  )
}