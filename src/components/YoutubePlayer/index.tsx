import { AspectRatio } from '@chakra-ui/react'

type LinkProp = {
    link: string
}
const YoutubePlayer = ({link}:LinkProp )=> { 
    return (
        <AspectRatio ratio={16/9} 
            width="100%"
        >
         <iframe
            src={link}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            />
            
        </AspectRatio>
    )
}
export default YoutubePlayer