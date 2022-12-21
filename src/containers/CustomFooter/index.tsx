import { memo } from 'react';
import Link from 'next/link';
import { Center, Divider, HStack, Image, Stack, Text } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaSpotify, FaTiktok } from 'react-icons/fa';
import { menuItems } from '../CustomNavBar/config';
import Logo from '../../atoms/Logo';
import { useRenderPropsMenuItems } from '../../hooks';
import style from './style.module.css'

const socialIcons = [
  { name: <FaFacebook />, href: '' },
  { name: <FaTiktok />, href: '' },
  { name: <FaSpotify />, href: '' },
  { name: <FaInstagram />, href: '' }
]

interface ICredit {
  text: string,
  srcImg: string
}

const CustomFooter = () => {
  const [handlerRenderMenuItems] = useRenderPropsMenuItems()

  const Credit = ({ text, srcImg }: ICredit) => {
    return (
      <HStack display={{ base: 'none', md: 'flex' }}>
        <Text as="p" color="white">{text}</Text>
        <Image
          boxSize='100px'
          objectFit='cover'
          height='100%'
          alt='logo conova tec'
          src={srcImg} />
      </HStack>
    )
  }

  const LineCenter = () => {
    return (
      <Center width='80px' display={{ base: 'block', md: 'none' }}>
        <Divider />
      </Center>
    )
  }

  return (
    <Stack as='footer' padding='2rem' gap='1rem' bg='#1D1D1B' >
      <Stack
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems='center'
        justifyContent='space-between'
        gap='1rem'
      >
        <Logo />
        <LineCenter />
        <HStack color='white' className={style.flexWrap} >
          {menuItems.map(handlerRenderMenuItems)}
        </HStack>
        <LineCenter />
        <HStack color='white' className={style.flexWrap}>
          {
            socialIcons
              .map(({ name, href }, index) => <Link
                key={`social-index${index}`}
                href={href}>
                {name}
              </Link>)
          }
        </HStack>
      </Stack>
      <Divider display={{ base: 'none', md: 'block' }} />
      <Credit
        text='En asocio  con:'
        srcImg='https://res.cloudinary.com/df5nwnlnu/image/upload/v1671164559/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/Plan_internacional_q2nt3x.png' />
      <Stack alignItems="center" >
        <Text color="white">Todos los derechos reservados-2022</Text>
        <Credit
          text='Desarrollado por'
          srcImg='https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075064/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/INDEX/PNGs%20LOGOS%20ORG/Conovatec_xqvsjs.png' />
      </Stack>
    </Stack>
  )
}

export default memo(CustomFooter)