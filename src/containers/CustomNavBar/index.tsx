import { Box, HStack, Image, MenuItem } from "@chakra-ui/react"
import Link from "next/link"
import { memo } from "react"
import CustomMenu from "../../components/CustomMenu"

const menuItems = [
  {label: 'Incio', isCollapsable: false, href:'' },
  {label: 'Nosotros', isCollapsable: true , href:'/about' },
  {label: 'Boletin', isCollapsable: false, href:'' }
]

const CustomNavBar = ()=> { 
  return (
    <HStack justifyContent="space-between">
      <Box>
        <Image
          boxSize='300px'
          objectFit='cover'
          height='100%' 
          alt="logo observatorio"
          src="http://drive.google.com/uc?export=view&id=1OVvy3iD6Ou-QFZIurS7S4NrqAYk9WFo7"/>
      </Box>
      <CustomMenu menuItems={
        menuItems
          .map( ({label, href}, index)=> <MenuItem key={`nav-bar-item-${index}`}>
            <Link href={href}>{label}</Link>
          </MenuItem>)
      }/>
    </HStack>
  )
}

export default memo(CustomNavBar)
