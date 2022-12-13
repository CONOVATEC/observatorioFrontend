import { Box, HStack, Image, MenuItem } from "@chakra-ui/react"
import { memo } from "react"
import { sponsorImagesApi } from '../../redux/sponsors/slice'

const logoItems = sponsorImagesApi;
console.log(sponsorImagesApi);

const LogoSection = ()=> { 
  return (
    <HStack justifyContent="space-between">
      <Box>
        {
            <Image
              boxSize='300px'
              objectFit='cover'
              height='100%'
              title='aaaa'
              src=''
            />
        }
      </Box>
    </HStack>
  )
}

export default memo(LogoSection)