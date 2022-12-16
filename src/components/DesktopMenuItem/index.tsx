import { memo } from 'react'
import Link from 'next/link'
import { IMenuItem } from '../../types'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const DesktopMenuItem = ({ label, isCollapsable, href, listProp}: IMenuItem) => {
  if (!isCollapsable) 
    return <Link href={href}>{label}</Link>

  return (
    <Menu >
      <MenuButton>{label} <ChevronDownIcon /> </MenuButton>
      {listProp}
    </Menu>


  )
}
export default memo(DesktopMenuItem)