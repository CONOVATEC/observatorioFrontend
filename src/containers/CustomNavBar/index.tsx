import Link from "next/link"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { Box, HStack, Image, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { memo } from "react"
import CustomMenu from "../../components/CustomMenu"

const menuItems = [
  {label: 'Inicio', isCollapsable: false, href:'' },
  {
    label: 'Nosotros',
    isCollapsable: true ,
    href:'',
    subLabels: [{label:'option1', href: ''}, {label:'option2', href: ''}] 
  },
  {label: 'Boletín', isCollapsable: false, href:'' },
  {label: 'Politicas Juventudes', isCollapsable: false, href:'' },
  {label: 'Capacitaciones', isCollapsable: true , href:'' },
  {label: 'Contáctenos', isCollapsable: false, href:'' }
]

const CustomNavBar = ()=> { 
  return (
    <HStack
      justifyContent="space-between"
      margin="20px"
    >
      <Box
        className="image-container"
      >
        <Image
          boxSize='200px'
          objectFit='cover'
          height='100%' 
          alt="logo observatorio"
          src="http://drive.google.com/uc?export=view&id=1OVvy3iD6Ou-QFZIurS7S4NrqAYk9WFo7"/>
      </Box>
      <CustomMenu 
        
        menuItems={
        menuItems
          .map( ({label, isCollapsable, href, subLabels}, index)=> <MenuItem
            className="menu-item"
            key={`nav-bar-item-${index}`}
            background='none'
            color='black'
            border='none'
            fontWeight='500'
            fontSize='20px'
          >
            
            
            {isCollapsable ?
              <Menu>
                <MenuButton
                  color='black'
                  background='none'
                  border='none'
                  aria-label='Options'
                  fontSize="20px"
                >
                  {label}
                  <ChevronDownIcon/>
                </MenuButton>
                <MenuList
                  display='grid'
                  gap='15px'
                  margin='10px'
                >
                  {subLabels?.map(({label, href}, index)=> <MenuItem
                    key={`sub-label-${index}`}
                    background='none'
                    color='black'
                    border='none'
                    fontWeight='500'
                    fontSize='20px'
                    >
                    <Link href={href}>{label}</Link>
                  </MenuItem>
                  )}

                </MenuList>
              </Menu>:
              <Link href={href}>{label}</Link>
              
            }

            
          </MenuItem>)
      }/>
    </HStack>
  )
}

export default memo(CustomNavBar)
