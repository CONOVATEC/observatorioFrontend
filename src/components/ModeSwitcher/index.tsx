import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Button, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'

const ModeSwitcher = ()=>{
  const { colorMode, toggleColorMode } = useColorMode()

  const Icon = useColorModeValue(MoonIcon, SunIcon)

  return (
    <IconButton
      borderRadius='50%'
      variant='ghost'
      aria-label='change color mode'
      icon={<Icon/>}
      onClick={toggleColorMode} />

  )
}

export default ModeSwitcher
