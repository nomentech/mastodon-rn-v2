import { View } from 'react-native'
import Loading from '../../../components/Loading'
import Timeline from '../../../components/Timeline'
import { useTimelineQuery } from '../../../slices/apiSlice'

const Local = () => {
  const { data, isFetching } = useTimelineQuery({
    endpoint: 'public',
    params: { local: 'true' },
  })

  return isFetching ? (
    <Loading />
  ) : (
    <View>
      <Timeline data={data} />
    </View>
  )
}

export default Local
