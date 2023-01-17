import { Image, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'

const Logo = () => {
  const colorLogo = useColorModeValue('none', 'brightness(0) invert(1)')

  return (
    <Link href={'/'}>
      <Image
        filter={colorLogo}
        boxSize={200}
        objectFit='cover'
        height='100%'
        alt="logo observatorio"
        src="https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075067/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/Logo_Observatorio_Joven_Extended-07_vfotme.png" />
    </Link>
  )
}

export default Logo