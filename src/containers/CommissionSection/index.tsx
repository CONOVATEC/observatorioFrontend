import { memo } from 'react'
import { Heading, HStack, Image, Stack, VStack } from '@chakra-ui/react'
import { comisionesCmpj } from '../../config';

const CommissionSection= () => {
  return (
    <Stack       
      as='section' 
      py={10}      
    >
      <Heading textAlign='center' as='h2' size='lg'>Comisiones</Heading>
      {/* <Heading textAlign='center' color='#9537D3C9' as='h2' size='xl'>Temáticas</Heading> */}
      <Stack        
        flexWrap={'wrap'}
        flexDir={{ base: 'column', md: 'row' }}
        justifyContent={{ base: 'center', md: 'space-between' }}
        alignItems='center'
        gap={8}
        p={8}
      >
        {
          comisionesCmpj
            .map((data, index) => {
              const {label, href} = data;
              return (
                <Stack key={index} width='30%' justifyContent={{ base: 'space-evenly', md: 'space-around' }} alignItems={'center'} >
                  
                    <Image boxSize='75' alt={label} src={href} />
                    <Heading as='h5' size='md' 
                      

                      color='#9537D3C9' textAlign="center">{label}</Heading >
                  
                </Stack>
              )
            })
        }
      </Stack>
    </Stack>
  )
}

export default memo(CommissionSection)