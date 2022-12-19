import { memo, MouseEventHandler } from 'react'
import Link from 'next/link'
import {
  Accordion, AccordionButton, AccordionIcon, AccordionItem,
  AccordionPanel, Box, HStack, Image,
  MenuItem, StackProps, useColorModeValue
} from '@chakra-ui/react'
import { menuItems } from './config'
import { useRenderPropsMenuItems } from '../../hooks'
import CustomMenu from '../../components/CustomMenu'
import ModeSwitcher from '../../components/ModeSwitcher'
import style from './style.module.css'

const Logo = ()=>{
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

const CustomNavBar = () => {
  const _handleClickAccordion: MouseEventHandler = (event) => {
    event.stopPropagation()
  }

  const [ handlerRenderMenuItems ] = useRenderPropsMenuItems()

  return (
    <HStack {...hstack} >
      <Box>
       <Logo />
      </Box>
      <HStack display={{ base: 'none', md: 'flex' }}>
        {menuItems.map(handlerRenderMenuItems)}
        <ModeSwitcher />
      </HStack>
      <HStack display={{ base: 'flex', md: 'none' }}>
        <ModeSwitcher />
        <CustomMenu menuItems={
          menuItems
            .map(({ label, isCollapsable, href, subLabels }, index) =>
              <MenuItem as={isCollapsable ? 'div' : 'button'} key={`nav-bar-item-${index}`}>
                {!isCollapsable && <Link className={style.a} key={`nav-bar-mobile-item-${index}`} href={href}>{label}</Link>}

                {isCollapsable && <Accordion width='100%' allowToggle>
                  <AccordionItem width='100%' >
                    <AccordionButton pl={0} width='100%' onClick={_handleClickAccordion}>
                      <Box as='span' flex='1' textAlign='left'>
                        {label}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      {subLabels?.map(({ label, href }, index) => <MenuItem
                        key={`sub-label-${index}`}
                      >
                        <Link className={style.a} href={href}>{label}</Link>
                      </MenuItem>
                      )}
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>}
              </MenuItem>)
        } />
      </HStack>
    </HStack>
  )
}

const hstack : StackProps = {
  padding:'1rem',
  minHeight:100,
  as:'nav',
  justifyContent:'space-between',
  position:'sticky',
  top:0,
  backgroundColor:'Background',
  zIndex:1000,
  boxShadow:'0 2px 20px 0px #1D1D1B'
}



export default memo(CustomNavBar)
