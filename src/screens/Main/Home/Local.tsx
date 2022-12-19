import { View } from 'react-native'
import MyLoading from '../../../components/MyLoading'
import Timeline from '../../../components/Timeline'
import { useTimelineQuery } from '../../../slices/apiSlice'

const Local = () => {
  const { data, isFetching } = useTimelineQuery({
    endpoint: 'public',
    params: { local: 'true' },
  })

  return isFetching ? (
    <MyLoading />
  ) : (
    <View>
      <Timeline data={data} />
    </View>
  )
}

export default Local
