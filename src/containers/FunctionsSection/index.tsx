import { memo } from 'react'
import { Heading, Stack } from '@chakra-ui/react'
import FunctionsCard from '../../components/FunctionCard'
import { functions } from '../../config'

const FuntionsSection = () => {
  return (
    <Stack as='section'>
      <Heading textAlign='center' as='h2' size='lg'>Nuestras</Heading>
      <Heading textAlign='center' color='#9537D3C9' as='h2' size='xl'>Funciones</Heading>
      <Stack
        flexDir={{ base: 'column', md: 'row' }}
        justifyContent={{ base: 'center', md: 'space-between' }}
        alignItems='center'
        gap={8}
        p={8}
      >
        { 
          functions
            .map((functionData, index) => (<FunctionsCard key={`function-${index}`} {...functionData} />))
        }
      </Stack>
    </Stack>
  )
}

export default memo(FuntionsSection)