import React, { memo } from 'react'
import { Box, HStack, Image, Stack } from '@chakra-ui/react';
import { menuItems } from '../CustomNavBar/config';
import DesktopMenuItem from '../../molecules/DesktopMenuItem';
import style from './style.module.css'
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaSpotify, FaTiktok } from 'react-icons/fa';

const Socialicons = [
  {name: <FaFacebook/>, href: ''},
  {name: <FaTiktok/>, href: ''},
  {name: <FaSpotify/>, href: ''},
  {name: <FaInstagram/>, href: ''}
]

const CustomFooter = () => {
  return (
    <footer className={style.footer}>
        <Stack 
          flexDirection={{base: 'column', md:'row'}} 
          alignItems="center" 
          justifyContent="space-between"
          gap="1rem"
        >
          <Image
              filter="invert(1)"
              boxSize='200px'
              objectFit='cover'
              height='100%' 
              alt="logo observatorio"
              src="https://drive.google.com/uc?export=view&id=1OVvy3iD6Ou-QFZIurS7S4NrqAYk9WFo7"/>
          <HStack
            flexWrap="wrap"
            justifyContent="center"
            gap="1rem"
           >
            {
              menuItems
                .map((menuItem, index) => <DesktopMenuItem key={`data-index-${index}`} {...menuItem}/> )
            }
          </HStack>
          <HStack
            flexWrap="wrap"
            justifyContent="center"
            gap="1rem"
           >
            {
              Socialicons
                .map(({name, href}, index) => <Link key={`social-index${index}`} href={href}>{name}</Link>)
            }
          </HStack>
        </Stack>
        <Stack display={{base:'none', md:'flex'}}>
          <hr />
          <HStack>

            <p>En asocio  con:</p>
            <Image
              boxSize='150px'
              objectFit='cover'
              height='100%' 
              alt="logo conova tec"
              src="https://drive.google.com/uc?export=view&id=1gRulxE0s2xZAzrxVaJZj6POkTKOJmG-C"/>
          </HStack>
        </Stack>
        <Stack alignItems="center" >

          <p>Todos los derechos reservados-2022</p>
          <HStack display={{base:'none', md:'flex'}}>
              <p>Desarrollado por </p>
              <Image
              boxSize='90px'
              objectFit='cover'
              height='100%' 
              alt="logo conova tec"
              src="https://drive.google.com/uc?export=view&id=1ng9k1SH-ZmzTW4amC1gyGILe3P7mak7Y"/>
          </HStack>
        </Stack>
    </footer>
  )
}

export default memo(CustomFooter)