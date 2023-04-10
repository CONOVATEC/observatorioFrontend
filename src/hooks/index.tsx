import { MouseEventHandler, useCallback } from 'react'
import Link from 'next/link'
import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Accordion, AccordionButton,
  AccordionIcon, AccordionItem,
  AccordionPanel, Box, Card,
  CardBody, Divider, Heading,
  Image, Menu, MenuButton,
  MenuItem, MenuList,
  Stack, Text
} from '@chakra-ui/react'
import { ILogoData, IMenuItem, SectionProps } from '../types'

export const useRenderPropsLogosCards = () => {

  const handleCarousel = useCallback(({ url_image, name }: ILogoData, index: number) =>
    <Box
      aria-label={name}
      key={`carousel-image-${index}`}
      height={{ base: '50vh', md: '1xl' }}
      backgroundSize='50%'
      position='relative'
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      backgroundImage={`url(${url_image})`} />
    , [])

  const handleStackRender = useCallback(({ url_image }: ILogoData, index: number, array: ILogoData[]) =>
    <Box
      key={`sponsor-${index}`}
      width={`calc(96%/${array.length})`}
      height='50vh'
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      backgroundSize='contain'
      backgroundImage={`url(${url_image})`} />
    , [])


  return [handleCarousel, handleStackRender]
}

export const useRenderPropsMainCards = () => {
  const _handleMainCardsRender = useCallback((data: SectionProps, index: number) => {
    const { title, image, content_body, alt_image } = data

    return (
      <Card
        key={`card-carousel-first-${index}`}
        maxW={'250px'}
        rounded={0}
        height={'200%'}
        backgroundColor='Background'
        >
        <CardBody backgroundColor='Background' paddingX={'15px'}>
          <Image src={image} alt={alt_image} borderRadius='lg' boxSize='100px' />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{title}</Heading>
            <Text size='xs'>{content_body} </Text>
          </Stack>
        </CardBody>
        <Box bg='purple.500' h='5px' />
      </Card>
    )
  }, [])

  const _handleStackMainCardsRender = useCallback((data: SectionProps, index: number) => {
    const { title, image, content_body, alt_image } = data
    return (
      <Box height={{ base: '50vh', md: '40vh' }} key={`render-card-carousel-first-${index}`}>
        <Card
          height={'100%'}
          rounded={0}
          backgroundColor='Background'>
          <CardBody backgroundColor='Background'>
            <Image src={image} alt={alt_image} borderRadius='lg' boxSize='100px' />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{title}</Heading>
              <Text size='xs'>{content_body} </Text>
            </Stack>
          </CardBody>
          <Box bg='purple.500' h='5px' />
        </Card>
      </Box>
    )
  }, [])

  return [_handleMainCardsRender, _handleStackMainCardsRender]
}

export const useRenderPropsMenuItems = () => {
  const handlerRenderMenuItems = useCallback((menuItem: IMenuItem, index: number) => {
    const { subLabels, label, href } = menuItem
    if (!subLabels?.length)
      return <Link key={`menu-item-${index}`} href={href}>{label}</Link>

    return (<Menu key={`menu-item-${index}`}>
      <MenuButton>{label} <ChevronDownIcon /> </MenuButton>
      <MenuList as='ul'>
        {menuItem.subLabels?.map(({ label, href }, index) => <MenuItem
          as='li'
          key={`sub-menu-item-${index}`}
        >
          <Link href={href}>{label}</Link>
        </MenuItem>
        )}
      </MenuList>
    </Menu>)
  }, [])

  const handlerRenderMobileMenuItems = useCallback((menuItem: IMenuItem, index: number) => {
    const _handleClickAccordion: MouseEventHandler = (event) => {
      event.stopPropagation()
    }
    const { label, href, subLabels, isCollapsable } = menuItem

    return (
      <MenuItem as={isCollapsable ? 'div' : 'button'} key={`nav-bar-item-${index}`}>
        {!isCollapsable && <Link style={{ width: '100%' }} key={`nav-bar-mobile-item-${index}`} href={href}>{label}</Link>}
        {isCollapsable && <Accordion width='100%' allowToggle>
          <AccordionItem width='100%' >
            <AccordionButton pl={0} width='100%' onClick={_handleClickAccordion}>
              <Box as='span' flex='1' textAlign='left'>
                {label}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              {subLabels?.map(({ label, href }, index) => <MenuItem
                key={`sub-label-${index}`}
              >
                <Link style={{ width: '100%' }} href={href}>{label}</Link>
              </MenuItem>
              )}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>}
      </MenuItem>
    )

  }, [])

  return [handlerRenderMenuItems, handlerRenderMobileMenuItems]
}

