import { Heading, Image, } from '@chakra-ui/react'
import { joinUsImage } from '../../config'
function JoinUsSection() {
  return (
    <>
      <Heading textAlign='center' as='h2' size='lg'>Unete</Heading>
      <Image src={joinUsImage} alt={'...'} />
    </>
  )
}
export default JoinUsSection