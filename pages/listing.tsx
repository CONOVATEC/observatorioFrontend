import CustomHero from '../src/containers/CustomHero';
import NewsSection from '../src/containers/NewsSection';
import DefaultLayout from '../src/views/DefaultLayout';

export default function Listing() {

  return (
    <DefaultLayout>
      <CustomHero />
      <NewsSection/>
    </DefaultLayout>
  )
}
