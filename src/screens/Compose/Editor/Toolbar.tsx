import { View, StyleSheet } from 'react-native'
import { Ionicons as Icon } from '@expo/vector-icons'

export default function Toolbar() {
  return (
    <View
      style={{
        height: 45,
        borderTopWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <Icon name='attach-outline' size={24} />
      <Icon name='stats-chart-outline' size={24} />
      <Icon name='earth-outline' size={24} />
      <Icon name='warning-outline' size={24} />
      <Icon name='happy-outline' size={24} />
    </View>
  )
}