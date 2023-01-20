import Head from 'next/head'
import TimelineSection from '../src/containers/TimelineSection'
import DefaultLayout from '../src/views/DefaultLayout'
import { organizationName } from '../src/utils/constants'

function National() {
  return (
    <DefaultLayout>
      <Head>
        <title>{organizationName} - Política nacional de juventudes</title>
      </Head>
      <TimelineSection />
    </ DefaultLayout>
  )
}

export default National