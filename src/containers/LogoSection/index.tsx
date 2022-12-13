import { Box, HStack, Image } from "@chakra-ui/react"
import { memo } from "react"
import { sponsorImagesApi, useGetSponsorImagesQuery } from '../../redux/sponsors/slice'
import { ILogoData } from "../../types";

const logoItems = sponsorImagesApi;

const LogoSection = ()=> {
  const { data, error } = useGetSponsorImagesQuery(null)

  return (
    <HStack justifyContent="space-between">
      <Box>
        {
          (data?.data as ILogoData[] | undefined)
            ?.map(({ url_image }, index)=> <Image
              alt="asdsad"
              key={`sponsor-${index}`}
              boxSize='300px'
              objectFit='cover'
              height='100%'
              title='aaaa'
              src={url_image}
          />)
        }
      </Box>
    </HStack>
  )
}

export default memo(LogoSection)
