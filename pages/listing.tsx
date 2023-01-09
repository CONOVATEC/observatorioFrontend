import { FaLaptopHouse } from 'react-icons/fa';
import CustomHero from '../src/containers/CustomHero';
import NewsSection from '../src/containers/NewsSection';
import DefaultLayout from '../src/views/DefaultLayout';

export default function Listing() {

  return (
    <DefaultLayout>
      <CustomHero  existButton = { false }/>
      <NewsSection/>
    </DefaultLayout>
  )
}
