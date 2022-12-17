import { AspectRatio, Heading, Stack } from '@chakra-ui/react'
import React, { memo } from 'react'
import { POWER_BI_LINK } from '../../config'

const PoweBISection = () => {
	return (
		<Stack as='section' padding='2rem' gap={8}>
			<Heading textAlign='center' as='h2'>Situación de la población joven en el Perú</Heading>
			<AspectRatio ratio={16 / 7}>
				<iframe
					title='Report Section'
					allowFullScreen
					src={POWER_BI_LINK} >
				</iframe>
			</AspectRatio>
		</Stack>
	)
}

export default memo(PoweBISection)