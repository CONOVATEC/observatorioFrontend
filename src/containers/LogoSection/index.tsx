import { Box, HStack, Image } from '@chakra-ui/react'
import { memo } from 'react'
import { sponsorImagesApi } from '../../redux/sponsors/slice'
import { ILogoData } from '../../types';

const logoItems = sponsorImagesApi;

const LogoSection = ({ data }: {data: ILogoData[] | undefined;})=> {
  return (
    <HStack display={{base:'none', lg:'flex'}} justifyContent="space-between">
      {
        data
          ?.map(({ url_image }, index)=> <Image
            alt="asdsad"
            key={`sponsor-${index}`}
            boxSize={`calc(100%/${data.length})`}
            objectFit='cover'
            height='100%'
            title='aaaa'
            src={url_image}
        />)
      }
    </HStack>
  )
}

export default memo(LogoSection)
