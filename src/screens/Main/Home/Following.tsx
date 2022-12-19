import { View } from 'react-native'
import MyLoading from '../../../components/MyLoading'
import Timeline from '../../../components/Timeline'
import { useTimelineQuery } from '../../../slices/apiSlice'

const Following = () => {
  const { data, isFetching } = useTimelineQuery({
    endpoint: 'home',
  })

  return isFetching ? (
    <MyLoading />
  ) : (
    <View>
      <Timeline data={data} />
    </View>
  )
}

export default Following
