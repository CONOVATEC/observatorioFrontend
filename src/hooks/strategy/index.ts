import { useMemo } from 'react'
import { useGetInfoStrategyQuery } from '../../redux/strategy/slice'

export const useStrategyInfo = () => {
  const { data } = useGetInfoStrategyQuery(null)
  const strategyInfo = useMemo(() => {
    const [firstItem] = [data?.data]
    return firstItem
  }, [data])

  const [firstValue] = strategyInfo ?? []

  return {
    name: firstValue?.name,
    linkYoutube: firstValue?.link_youtube,
    linkDrive: firstValue?.link_drive,
    urlImage: firstValue?.url_image,
  }
}