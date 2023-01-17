import { useMemo } from 'react'
import { useGetInfoAboutObservatoryQuery } from '../../redux/aboutObservatory/slice'

export const useAboutObservatoryInfo = () => {
  const { data } = useGetInfoAboutObservatoryQuery(null)
  const observatoryInfo = useMemo(() => {
    const [firstItem] = [data?.data]
    return firstItem
  }, [data])

  const [firstValue] = observatoryInfo ?? []

  return {
    mission: firstValue?.mission,
    vision: firstValue?.vision,
    description: firstValue?.about,
  }
}