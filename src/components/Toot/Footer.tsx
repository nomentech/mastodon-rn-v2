import { View } from 'react-native'
import MyIcon from '../MyIcon'

const Footer = () => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginVertical: 8,
    }}
  >
    <MyIcon name='arrow-undo-outline' />
    <MyIcon name='repeat-sharp' />
    <MyIcon name='star-outline' />
    <MyIcon name='bookmark-outline' />
    <MyIcon name='ellipsis-horizontal' />
  </View>
)

export default Footer
