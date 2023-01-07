import { memo } from 'react'
import { Box, HStack } from '@chakra-ui/react'
import { menuItems } from './config'
import { useRenderPropsMenuItems } from '../../hooks'
import CustomMenu from '../../components/CustomMenu'
import ModeSwitcher from '../../components/ModeSwitcher'
import Logo from '../../atoms/Logo'
import style from './style.module.css'

const CustomNavBar = () => {
  const [handlerRenderMenuItems, handlerRenderMobileMenuItems] = useRenderPropsMenuItems()

  return (
    <HStack className={style.menu} as='nav' backgroundColor='Background' >
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
          menuItems.map(handlerRenderMobileMenuItems)
        } />
      </HStack>
    </HStack>
  )
}

export default memo(CustomNavBar)
