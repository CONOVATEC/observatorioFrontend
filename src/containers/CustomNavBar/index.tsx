import { memo, MouseEventHandler } from 'react'
import Link from 'next/link'
import { 
  Accordion, AccordionButton,
  AccordionIcon, AccordionItem,
  AccordionPanel, Box,
  HStack, Image,
  MenuItem, MenuList, useColorModeValue } from '@chakra-ui/react'
import CustomMenu from '../../components/CustomMenu'
import { menuItems } from './config'
import style from './style.module.css'
import ModeSwitcher from '../../components/ModeSwitcher'
import DesktopMenuItem from '../../components/DesktopMenuItem'

const CustomNavBar = ()=> {
  const value = useColorModeValue('none','invert(1)')

  const _handleClickAccordion: MouseEventHandler = (event) => {
    event.stopPropagation()
  }

  return (
    <HStack 
      padding="1rem" 
      minHeight={100} 
      as="nav" 
      justifyContent='space-between'
      position="sticky" 
      top={0} 
      backgroundColor='Background'
      zIndex={1000}
      boxShadow='0 2px 20px 0px #1D1D1B'
    >
      <Box>
        <Image
          filter={value}
          boxSize='200px'
          objectFit='cover'
          height='100%' 
          alt="logo observatorio"
          src="https://drive.google.com/uc?export=view&id=1OVvy3iD6Ou-QFZIurS7S4NrqAYk9WFo7"/>
      </Box>
      <HStack display={{base: 'none', md:'flex'}}>
        {
          menuItems
            .map((menuItem, index) =>
              <DesktopMenuItem
                listProp={
                  <MenuList >
                  {menuItem.subLabels?.map(({ label, href }, index) => <MenuItem
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
      <ModeSwitcher />
      </HStack>
      <HStack display={{base:'flex', md:'none'}}>
      <ModeSwitcher />
      <CustomMenu menuItems={
        menuItems
          .map(({label, isCollapsable, href, subLabels}, index)=> 
            <MenuItem as={isCollapsable ? 'div': 'button'} key={`nav-bar-item-${index}`}>
              {!isCollapsable && <Link className={style.a} key={`nav-bar-mobile-item-${index}`} href={href}>{label}</Link>}

              {isCollapsable && <Accordion width='100%' allowToggle>
                <AccordionItem width='100%' >
                    <AccordionButton pl={0} width='100%' onClick={_handleClickAccordion}>
                      <Box as='span' flex='1' textAlign='left'>
                        {label}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel  pb={4}>
                  {subLabels?.map(({label, href}, index)=> <MenuItem
                    key={`sub-label-${index}`}
                    >
                    <Link className={style.a}  href={href}>{label}</Link>
                  </MenuItem>
                  )}
                  </AccordionPanel>
                </AccordionItem>
              </Accordion> }
            </MenuItem>)
      }/>
      </HStack>
    </HStack>
  )
}

export default memo(CustomNavBar)
