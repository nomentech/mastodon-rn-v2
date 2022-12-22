import { View, Pressable, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Button from '../../../components/Button'

const TopTabBar = ({ state, descriptors, navigation }: any) => {
  const insets = useSafeAreaInsets()

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key]
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
            <Pressable
              key={index}
              onPress={onPress}
              style={{ marginHorizontal: 10 }}
            >
              <Text style={{ fontWeight: isFocused ? 'bold' : 'light' } as any}>
                {label}
              </Text>
            </Pressable>
          )
        })}
      </View>
    </View>
  )
}

export default TopTabBar
