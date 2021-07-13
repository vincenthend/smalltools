import Head from 'next/head'
import 'antd/dist/antd.css'
import {Layout, Typography} from 'antd'
import SoftcobraDecoder from '../components/SoftcobraDecoder'

export default function Home() {
  return (
    <>
      <Head>
        <title>smalltools</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Layout>
        <Layout.Content>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', flexDirection: 'column'}}>
            <div>
              <Typography.Title>smalltools</Typography.Title>
            </div>
            <SoftcobraDecoder/>
          </div>
        </Layout.Content>
      </Layout>
    </>
  )
}
