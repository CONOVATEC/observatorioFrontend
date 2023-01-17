import DefaultLayout from '../src/views/DefaultLayout'
import BannerCmpjSection from '../src/containers/BannerCmpjSection'
import CommissionSection from '../src/containers/CommissionSection'
import JoinUsSection from '../src/containers/JoinUsSection'
import CustomButton from '../src/components/CustomButton'
import Head from 'next/head'
import { organizationName } from '../src/utils/constants'

const Cmpj = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>{organizationName} - Consejo Metropolitano de participación de la juventud de Lima</title>
      </Head>
      <BannerCmpjSection />
      <CommissionSection />
      <CustomButton text="Mas informacion" />
      <JoinUsSection />
    </ DefaultLayout>
  )
}

export default Cmpj
