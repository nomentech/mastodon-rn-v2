import { View } from 'react-native'
import Icon from '../Icon'

const Footer = () => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginVertical: 8,
    }}
  >
    <Icon name='arrow-undo-outline' />
    <Icon name='repeat-sharp' />
    <Icon name='star-outline' />
    <Icon name='bookmark-outline' />
    <Icon name='ellipsis-horizontal' />
  </View>
)

export default Footer
