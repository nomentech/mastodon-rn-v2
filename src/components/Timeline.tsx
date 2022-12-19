import { FlatList, Text } from 'react-native'
import Divider from './Divider'
import Toot from './Toot'

const Timeline = ({ data }: any) => {
  return (
    <FlatList
      ItemSeparatorComponent={() => <Divider />}
      showsVerticalScrollIndicator={false}
      data={data}
      onEndReachedThreshold={0.3}
      // onEndReached={onEndReached}
      keyExtractor={(item: any) => item.id}
      // refreshControl={
      //   <RefreshControl
      //     refreshing={loading}
      //     onRefresh={refreshHandler}
      //   />
      // }
      // ListEmptyComponent={<Empty text='你的主页时间线是空的！快去关注更多人吧。' />}
      renderItem={({ item }) => <Toot toot={item} />}
    />
  )
}

export default Timeline
