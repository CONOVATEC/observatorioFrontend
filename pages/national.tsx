import Head from 'next/head'
import TimelineSection from '../src/containers/TimelineSection'
import DefaultLayout from '../src/views/DefaultLayout'

function National() {
  return (
    <DefaultLayout>
      <Head>
        <title>Observatorio de joven del Perú - Política nacional de juventudes</title>
      </Head>
      <TimelineSection />
    </ DefaultLayout>
  )
}

export default National