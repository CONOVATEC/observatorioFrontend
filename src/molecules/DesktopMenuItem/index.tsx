import { memo } from 'react'
import Link from 'next/link'
import { IMenuItem } from '../../types'
import { Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const DesktopMenuItem = ( {label, isCollapsable, href, subLabels}: IMenuItem)=>{
    return (
      <>
        {
          isCollapsable?
            <Menu>
              <MenuButton>{label} <ChevronDownIcon/> </MenuButton>
                <MenuList>
                { subLabels?.map(({label, href}, index)=><MenuItem
                    key={`sub-menu-item-${index}`}
                  >
                    <Link href={href}>{label}</Link>
                </MenuItem>
                )}
              </MenuList>
            </Menu>
            :<Link href={href}>{label}</Link>
        }
      </>
    )
  }

export default memo(DesktopMenuItem)