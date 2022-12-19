import DefaultLayout from '../src/views/DefaultLayout'
import BannerCmpjSection from '../src/containers/BannerCmpjSection'
import CommissionSection from '../src/containers/CommissionSection'
import JoinUsSection from '../src/containers/JoinUsSection'
import CustomButton from '../src/components/CustomButton'

const Cmpj = () => {
  return (
    <DefaultLayout>     
        <BannerCmpjSection />
        {/* //Instancias de direccion */}        
        <CommissionSection />
        <CustomButton text="Mas informacion"/>
        <JoinUsSection/>
    </ DefaultLayout>
  )
}

export default Cmpj
