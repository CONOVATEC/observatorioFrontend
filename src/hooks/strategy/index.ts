import { useGetInfoStrategyQuery } from '../../redux/strategy/slice'

export const useStrategyInfo = () => {
  const { data } = useGetInfoStrategyQuery(null)
  const strategyInfo = data?.data
  
  const [firstValue] = strategyInfo ?? []

  return {
    name: firstValue?.name || 'Estrategia Metropolitana de Juventudes',
    linkYoutube: firstValue?.link_youtube || process.env.NEXT_PUBLIC_STRATEGY,
    linkDrive: firstValue?.link_drive,
    urlImage: firstValue?.url_image,
  }
}