import { View } from 'react-native'
import Loading from '../../../components/Loading'
import Timeline from '../../../components/Timeline'
import { useTimelineQuery } from '../../../slices/apiSlice'

const Following = () => {
  const { data, isFetching } = useTimelineQuery({
    endpoint: 'home',
  })

  return isFetching ? (
    <Loading />
  ) : (
    <View>
      <Timeline data={data} />
    </View>
  )
}

export default Following
