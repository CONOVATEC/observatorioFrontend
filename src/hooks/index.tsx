import { MouseEventHandler, useCallback } from 'react';

import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ILogoData, IMenuItem, SectionProps } from '../types';
export const useRenderPropsLogosCards = () => {
  const handleStackRender = useCallback(
    (
      { url_image, social_media }: ILogoData,
      index: number,
      array: ILogoData[]
    ) => (
      <Link
        href={social_media}
        cursor={social_media ? 'pointer' : 'default'}
        style={{ width: `calc(96%/${array.length})` }}
        isExternal
        key={`sponsor-${index}`}
      >
        <Box
          height='50vh'
          backgroundPosition='center'
          backgroundRepeat='no-repeat'
          backgroundSize='contain'
          backgroundImage={`url(${url_image})`}
        />
      </Link>
    ),
    []
  );

  return [
    useCallback(
      ({ url_image, name }: ILogoData, index: number) => (
        <Box
          aria-label={name}
          key={`carousel-image-${index}`}
          height={{ base: '50vh', md: '1xl' }}
          backgroundSize='50%'
          position='relative'
          backgroundPosition='center'
          backgroundRepeat='no-repeat'
          backgroundImage={`url(${url_image})`}
        />
      ),
      []
    ),
    handleStackRender,
  ];
};

export const useRenderPropsMainCards = () => {
  const _handleMainCardsRender = useCallback(
    (data: SectionProps, index: number) => {
      const { name, url_icono, description, alt_image } = data;

      return (
        <Card
          key={`card-carousel-first-${index}`}
          maxW={'250px'}
          minW={'200px'}
          rounded={0}
          height={'auto'}
          backgroundColor='Background'
        >
          <CardBody
            backgroundColor='Background'
            paddingX={'15px'}
            height='450px'
          >
            <Image
              src={url_icono}
              alt={alt_image}
              borderRadius='lg'
              boxSize='100px'
              width='100%'
              height='auto'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{name}</Heading>
              <Text
                size='xs'
                textOverflow={'ellipsis'}
                height='120px'
                overflow={'hidden'}
                noOfLines={5}
              >
                {description}{' '}
              </Text>
            </Stack>
          </CardBody>
          <Box bg='purple.500' h='5px' />
        </Card>
      );
    },
    []
  );

  const _handleStackMainCardsRender = useCallback(
    (data: SectionProps, index: number) => {
      const { name, url_icono, description, alt_image } = data;
      return (
        <Box
          height={{ base: '50vh', md: '40vh' }}
          key={`render-card-carousel-first-${index}`}
        >
          <Card height={'100%'} rounded={0} backgroundColor='Background'>
            <CardBody backgroundColor='Background'>
              <Image
                src={url_icono}
                alt={alt_image}
                borderRadius='lg'
                boxSize='100px'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{name}</Heading>
                <Text size='xs'>{description} </Text>
              </Stack>
            </CardBody>
            <Box bg='purple.500' h='5px' />
          </Card>
        </Box>
      );
    },
    []
  );

  return [_handleMainCardsRender, _handleStackMainCardsRender];
};

export const useRenderPropsMenuItems = () => {
  const router = useRouter();
  const handlerRenderMenuItems = useCallback(
    (menuItem: IMenuItem, index: number) => {
      const { subLabels, label, href } = menuItem;
      if (!subLabels?.length)
        return (
          <Link
            key={`menu-item-${index}`}
            href={href}
            style={{
              height: '22px',
            }}
          >
            {label}
          </Link>
        );

      return (
        <Menu key={`menu-item-${index}`}>
          <MenuButton
            sx={{
              color: menuItem.subLabels?.some(({ href }) =>
                router.asPath.includes(href)
              )
                ? '#9537D3'
                : 'inherit',
              fontWeight: menuItem.subLabels?.some(({ href }) =>
                router.asPath.includes(href)
              )
                ? 'bold'
                : 'normal',
            }}
          >
            {label} <ChevronDownIcon />{' '}
          </MenuButton>
          <MenuList>
            {menuItem.subLabels?.map(({ label, href }, index) => (
              <MenuItem
                as='li'
                key={`sub-menu-item-${index}`}
                style={{
                  color: router.asPath.slice(0, -1) === href ? 'white' : 'none',
                  backgroundColor:
                    router.asPath.slice(0, -1) === href ? 'purple' : 'none',
                }}
              >
                <Link href={href}>{label}</Link>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      );
    },
    [router.asPath]
  );

  const handlerRenderMobileMenuItems = useCallback(
    (menuItem: IMenuItem, index: number) => {
      const _handleClickAccordion: MouseEventHandler = (event) => {
        event.stopPropagation();
      };
      const { label, href, subLabels, isCollapsable } = menuItem;

      return (
        <MenuItem
          as={isCollapsable ? 'div' : 'button'}
          key={`nav-bar-item-${index}`}
        >
          {!isCollapsable && (
            <Link
              style={{ width: '100%' }}
              key={`nav-bar-mobile-item-${index}`}
              href={href}
            >
              {label}
            </Link>
          )}
          {isCollapsable && (
            <Accordion width='100%' allowToggle>
              <AccordionItem width='100%'>
                <AccordionButton
                  pl={0}
                  width='100%'
                  onClick={_handleClickAccordion}
                >
                  <Box as='span' flex='1' textAlign='left'>
                    {label}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  {subLabels?.map(({ label, href }, index) => (
                    <MenuItem key={`sub-label-${index}`}>
                      <Link style={{ width: '100%' }} href={href}>
                        {label}
                      </Link>
                    </MenuItem>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          )}
        </MenuItem>
      );
    },
    []
  );

  return [handlerRenderMenuItems, handlerRenderMobileMenuItems];
};
