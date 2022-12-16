import React, { memo } from 'react'
import { Box, Center, Container, Divider, HStack, Image, MenuItem, MenuList, Stack, Text } from '@chakra-ui/react';
import { menuItems } from '../CustomNavBar/config';
import DesktopMenuItem from '../../components/DesktopMenuItem';
import style from './style.module.css'
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaSpotify, FaTiktok } from 'react-icons/fa';

const socialIcons = [
  {name: <FaFacebook/>, href: ''},
  {name: <FaTiktok/>, href: ''},
  {name: <FaSpotify/>, href: ''},
  {name: <FaInstagram/>, href: ''}
]

interface ICredit{
  text: string, srcImg: string
}

const CustomFooter = () => {
  
  const Credit = ({text, srcImg}: ICredit)=>{
    return (
      <HStack display={{base:'none', md:'flex'}}>
          <Text as="p" color="white">{text}</Text>
          <Image
            boxSize='100px'
            objectFit='cover'
            height='100%' 
            alt="logo conova tec"
            src={srcImg}/>
      </HStack>
    )
  }
   
  const LineCenter = () => {
    return (
      <Center width='80px' display={{base: 'block', md:'none'}}>
        <Divider/>
      </Center>
    )
  }

  return (
    <Stack as="footer" padding="2rem" gap="1rem" bg="#1D1D1B" >
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
        <LineCenter />
        <HStack color="white" className={style.listItems}>
          {
            menuItems
              .map((menuItem, index) =>
                <DesktopMenuItem
                  listProp={
                    <MenuList bg='#1D1D1B'>
                      {menuItem.subLabels?.map(({ label, href }, index) => <MenuItem
                        bg='#1D1D1B'
                        key={`sub-menu-item-${index}`}
                    >
                      <Link href={href}>{label}</Link>
                    </MenuItem>
                    )}
                  </MenuList>
                  }
                  key={`data-index-${index}`} 
                  {...menuItem }/> 
              )
          }
        </HStack>
        <LineCenter />
        <HStack color="white"  className={style.listItems}>
          {
            socialIcons
              .map(({name, href}, index) => <Link key={`social-index${index}`} href={href}>{name}</Link>)
          }
        </HStack>
      </Stack>
      <Divider display={{base: 'none', md:'block'}}/>
      <Credit 
        text='En asocio  con:'
        srcImg='https://res.cloudinary.com/df5nwnlnu/image/upload/v1671164559/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/Plan_internacional_q2nt3x.png' />
      <Stack alignItems="center" >
        <Text color="white">Todos los derechos reservados-2022</Text>
        <Credit 
          text='Desarrollado por' 
          srcImg='https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075064/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/INDEX/PNGs%20LOGOS%20ORG/Conovatec_xqvsjs.png'/>
      </Stack>
    </Stack>
  )
}

export default memo(CustomFooter)