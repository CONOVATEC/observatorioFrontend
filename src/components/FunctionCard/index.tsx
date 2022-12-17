import { Heading, Image, Text, VStack } from '@chakra-ui/react'
import { FunctionsCardProps } from '../../types'

const FunctionsCard = ({ primary, secondary, src }: FunctionsCardProps) => (
    <VStack width={{base: '80vw', md: 'max(24vw, 200px)'}} >
      <Image alt={String(primary)} src={src} boxSize='100'/>
      <Heading as='h5' color={'purple.900'}>
        {primary}
      </Heading>
      <Text variant='b2'>
        {secondary}
      </Text>
    </VStack>
  )

export default FunctionsCard