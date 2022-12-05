import { View, Pressable, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Ionicons as Icon } from '@expo/vector-icons'

export default function TopTabBar ({ state, descriptors, navigation }: any) {
  const insets = useSafeAreaInsets()

  return (
    <View style={{ 
      paddingTop: insets.top, paddingBottom: 10, flexDirection: 'row', 
      justifyContent: 'space-between', alignItems: 'center' }}>
      <Icon disabled size={30} style={{ marginLeft: 10 }} />
      <View style={{ flexDirection: 'row' }}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name
          
          const isFocused = state.index === index
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            })
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name)
            }
          }

          return (
            <Pressable key={index} onPress={onPress} style={{ marginLeft: 20 }} >
              <Text style={{ fontWeight: isFocused ? 'bold' : 'light' } as any}>
                {label}
              </Text>
            </Pressable>
          )
        })}
      </View>
      <Icon 
        name='add-circle' size={30} style={{ marginRight: 10 }}
        onPress={() => navigation.navigate('Compose')}
      />
    </View>
  )
}