import { View, StyleSheet } from 'react-native'
import MyIcon from '../../../components/MyIcon'

const Toolbar = () => (
  <View
    style={{
      height: 45,
      borderTopWidth: StyleSheet.hairlineWidth,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    }}
  >
    <MyIcon name='attach-outline' size={24} />
    <MyIcon name='stats-chart-outline' size={24} />
    <MyIcon name='earth-outline' size={24} />
    <MyIcon name='warning-outline' size={24} />
    <MyIcon name='happy-outline' size={24} />
  </View>
)

export default Toolbar
