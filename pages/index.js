import Background from "../components/layouts/Background"
import Layout from "../components/layouts/Main"

export default function Home() {
  return (
    <div className="p-5">
      Learn Next Js
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