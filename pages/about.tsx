import { CircularProgress, Image, Text, VStack } from '@chakra-ui/react'
import BannerAboutSection from '../src/containers/BannerAboutSection'
import DirectiveSection from '../src/containers/DirectiveSection'
import DefaultLayout from '../src/views/DefaultLayout'
import GoalAboutSection from '../src/containers/GoalAboutSection'
import Head from 'next/head'
import { organizationName } from '../src/utils/constants'
import { useMemo } from 'react'
import { useGetInfoAboutObservatoryQuery } from '../src/redux/aboutObservatory/slice'

const About = () => {
  const { data, isLoading } = useGetInfoAboutObservatoryQuery(null)
  const observatoryInfo = useMemo(() => {
    const [firstItem] = [data?.data]
    return firstItem
  }, [data])

  const [firstValue] = observatoryInfo ?? []

  return (
    <DefaultLayout>
      <Head>
        <title>{organizationName} - Nosotros</title>
      </Head>
      {isLoading ? <CircularProgress /> :
        <>
          <BannerAboutSection description={firstValue.about} />
          <GoalAboutSection mission={firstValue.mission} vision={firstValue.vision} />
        </>
      }
      <VStack spacing={4} my={10}>
        <Text fontWeight={'bold'} fontSize={'2xl'}>
          Organigrama
        </Text>
      </VStack>
      <Image src='https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075069/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOSOTROS/Organigrama_wrqzae.png'
        alt='organidrama-observatorio' boxSize='full'
        objectFit='cover' />
      <DirectiveSection />
    </ DefaultLayout>
  )
}

export default About
