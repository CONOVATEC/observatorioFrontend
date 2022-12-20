import {  Stack,Button  } from '@chakra-ui/react'
type TextProp = {
    text: string
}
const CustomButton = ({text}:TextProp) => {
    return (
        <Stack
            flexDir={{ base: 'column', md: 'row' }}
            justifyContent={{ base: 'center', md: 'center' }}
            alignItems='center'
            gap={8}
            p={8}
        >
            <Button colorScheme='purple'>{text}</Button>
        </Stack>
    )
}
export default CustomButton