import { useMemo } from 'react'
import { FlatList, View } from 'react-native'
import Loading from '../../components/Loading'
import Header from './Editor/Header'
import Toolbar from './Editor/Toolbar'

const Editor = () => {
  const isFetching = false
  const listEmpty = useMemo(() => {
    if (isFetching) {
      return (
        <View key='listEmpty' style={{ flex: 1, alignItems: 'center' }}>
          <Loading />
        </View>
      )
    }
  }, [isFetching])

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={undefined}
        renderItem={() => <></>}
        ListEmptyComponent={listEmpty}
        keyboardShouldPersistTaps='always'
        ListHeaderComponent={Header}
        ListFooterComponent={() => <></>}
      />
      <Toolbar />
    </View>
  )
}

export default Editor
