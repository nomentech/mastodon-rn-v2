import { useTheme } from '@react-navigation/native'
import { View, Text, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu'
import Button from '../../../components/Button'
import Icon from '../../../components/Icon'
import {
  getShowCW,
  getVisibility,
  updateShowCW,
  updateVisibility,
} from '../../../slices/composeSlice'

const { Popover } = renderers
const options = [
  { name: 'public', icon: 'earth-outline' },
  { name: 'unlist', icon: 'lock-open-outline' },
  { name: 'private', icon: 'lock-closed-outline' },
  { name: 'direct', icon: 'at-outline' },
]

const Toolbar = () => {
  const { t } = useTranslation('common')
  const { colors } = useTheme()
  const dispatch = useDispatch()
  const showCW = useSelector(getShowCW)
  const visibility = useSelector(getVisibility)

  const toggleCW = () => {
    dispatch(updateShowCW(!showCW))
  }

  const Options = () => (
    <>
      {options.map((option) => (
        <MenuOption
          key={option.name}
          value={option.name}
          children={
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ marginHorizontal: 4 }}>
                <Icon name={option.icon} size={24} />
              </View>
              <Text>{t(option.name)}</Text>
            </View>
          }
        />
      ))}
    </>
  )

  const onSelect = (value: string) => {
    dispatch(updateVisibility(value))
  }

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
      <Button type='icon' borderWidth={0} name='attach-outline' />
      <Button type='icon' borderWidth={0} name='stats-chart-outline' />
      <Menu
        onSelect={onSelect}
        renderer={Popover}
        rendererProps={{ preferredPlacement: 'top' }}
      >
        <MenuTrigger
          children={
            <Icon
              name={
                options.find((option: any) => option.name === visibility)?.icon
              }
            />
          }
        />
        <MenuOptions>
          <Options />
        </MenuOptions>
      </Menu>
      <Button
        type='icon'
        borderWidth={0}
        name='warning-outline'
        color={showCW ? colors.primary : null}
        onPress={toggleCW}
      />
      <Button type='icon' borderWidth={0} name='happy-outline' />
    </View>
  )
}

export default Toolbar
