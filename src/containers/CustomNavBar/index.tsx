import { Box, HStack } from '@chakra-ui/react';
import { memo } from 'react';
import Logo from '../../atoms/Logo';
import CustomMenu from '../../components/CustomMenu';
import ModeSwitcher from '../../components/ModeSwitcher';
import { useRenderPropsMenuItems } from '../../hooks';
import { useRouter } from 'next/router';
import { menuItems } from './config';
import style from './style.module.css';

const CustomNavBar = () => {
  const router = useRouter();
  const [handlerRenderMenuItems, handlerRenderMobileMenuItems] =
    useRenderPropsMenuItems();

  return (
    <HStack className={style.menu} as='nav' backgroundColor='Background'>
      <Box>
        <Logo />
      </Box>
      <HStack display={{ base: 'none', md: 'flex' }} spacing={3}>
        {menuItems.map((menuItem, index) => (
          <Box
            key={menuItem.href}
            className={router.pathname === menuItem.href ? style.active : ''}
          >
            {handlerRenderMenuItems(menuItem, index)}
          </Box>
        ))}
        <ModeSwitcher />
      </HStack>
      <HStack display={{ base: 'flex', md: 'none' }}>
        <ModeSwitcher />
        <CustomMenu menuItems={menuItems.map(handlerRenderMobileMenuItems)} />
      </HStack>
    </HStack>
  );
};

export default memo(CustomNavBar);
