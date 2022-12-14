import { memo, MouseEventHandler } from 'react'
import Link from 'next/link'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, HStack, Image, MenuItem } from '@chakra-ui/react'
import CustomMenu from '../../components/CustomMenu'
import { menuItems } from './config'
import style from './style.module.css'

const CustomNavBar = ()=> {
  const _handleClickAccordion: MouseEventHandler = (event) => {
    event.stopPropagation()
  } 

  return (
    <HStack padding="1rem" minHeight={100} as="nav" justifyContent='space-between' position="sticky" top={0} backgroundColor='white'>
      <Box>
        <Image
          boxSize='200px'
          objectFit='cover'
          height='100%' 
          alt="logo observatorio"
          src="https://drive.google.com/uc?export=view&id=1OVvy3iD6Ou-QFZIurS7S4NrqAYk9WFo7"/>
      </Box>
      <HStack display={{base: 'none', md:'flex'}}>
        {
          menuItems
            .map(({label, isCollapsable, href}, index) => {
              return (
                <>
                  {!isCollapsable && <Link key={`desktop-${index}`} href={href}>{label}</Link>}
                </>
              )
            })
        }
      </HStack>
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
  )
}

export default memo(CustomNavBar)
