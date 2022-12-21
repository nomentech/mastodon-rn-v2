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
    <Icon size={20} name='arrow-undo-outline' />
    <Icon size={20} name='repeat-sharp' />
    <Icon size={20} name='star-outline' />
    <Icon size={20} name='bookmark-outline' />
    <Icon size={20} name='ellipsis-horizontal' />
  </View>
)

export default Footer
