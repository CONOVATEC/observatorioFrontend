import { Image, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'

const Logo = () => {
  const colorLogo = useColorModeValue('none', 'invert(1)')

  return (
    <Link href={'/'}>
      <Image
        filter={colorLogo}
        boxSize={200}
        objectFit='cover'
        height='100%'
        alt="logo observatorio"
        src="https://drive.google.com/uc?export=view&id=1OVvy3iD6Ou-QFZIurS7S4NrqAYk9WFo7" />
    </Link>
  )
}

export default Logo