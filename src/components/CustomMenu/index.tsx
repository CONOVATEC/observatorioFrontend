import { HamburgerIcon } from "@chakra-ui/icons"
import { IconButton, Menu, MenuButton, MenuList } from "@chakra-ui/react"

interface CustomMenuProps {
  menuItems: JSX.Element | JSX.Element[]
}

const CustomMenu = ({menuItems}: CustomMenuProps)=>{
  return (
    <Menu>
      <MenuButton
        height='4rem'
        width='4rem'
        icon={<HamburgerIcon height='3rem'width='3rem'/>}
        variant='outline'
        aria-label='Options' 
        as={IconButton} />
      <MenuList width='100vw'>
        {menuItems}
      </MenuList>
    </Menu>
  )
}

export default CustomMenu