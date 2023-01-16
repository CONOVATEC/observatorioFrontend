import { Center, CircularProgress, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import { FieldValue, FieldValues, SubmitHandler } from 'react-hook-form'
import Form from '../src/containers/Form'
import { usePostFormContactMutation } from '../src/redux/form/slice'
import DefaultLayout from '../src/views/DefaultLayout'
import Head from 'next/head'

const benefits = [
  {
    src: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075059/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/CONTACTANOS/estadistica-inferencial_gjtawj.png',
    title: 'Información Estadistica',
    content: 'Deseas obtener los reportes estadísticos en documentos digitales.'
  },
  {
    src: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075060/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/CONTACTANOS/colaborar_d0wjq6.png',
    title: 'Socio',
    content: 'Te interesa ser uno de nuestros aliados estratégicos.'
  },
  {
    src: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075059/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/CONTACTANOS/%C3%8Dcono_Junta_Directiva_1_lqoder.png',
    title: 'Unete',
    content: 'Deseas formar parte del equipo del Observatorio Joven '
  }
]

const Contact = () => {
  const [handlePostForm, { isLoading }] = usePostFormContactMutation()

  const _handleSubmit: SubmitHandler<FieldValues> = (values) => {
    handlePostForm(values)
  }

  return (
    <DefaultLayout>
      <Head>
        <title>Observatorio de joven del Perú - Información de contacto</title>
      </Head>
      <VStack as='main' maxWidth={1250} margin='auto'>
        <Stack width='100%' overflow='hidden'>
          <Center
            height={350}
            minW={300}
            backgroundImage='https://res.cloudinary.com/df5nwnlnu/image/upload/v1671496760/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/CONTACTANOS/portada_contacto_zyulgy.png'
            backgroundRepeat='no-repeat'
            backgroundSize='cover'
            backgroundPosition='center'
          >
            <Heading>Contacto</Heading>
          </Center>
        </Stack>
        <HStack
          py={12}
          gap={16}
          flexWrap='wrap'
          justifyContent='space-around'
          w='100%'
          textAlign='center'
        >
          {benefits.map(({ src, title, content }, index) => <VStack
            key={`benefit-index-${index}`}
            width='250px'
            gap={4}
          >
            <Image
              boxSize={150}
              alt={title}
              src={src}
            />
            <Heading as='h3' size='lg'>{title}</Heading>
            <Text>{content}</Text>
          </VStack>)}
        </HStack>
        <VStack minH={'80vh'} w={'100%'} justifyContent='center'>
          <Heading>Contáctenos</Heading>
          {isLoading && <CircularProgress />}
          {!isLoading && <Form onSubmit={_handleSubmit} />}
        </VStack>
      </VStack>
    </DefaultLayout>
  )
}

export default Contact
