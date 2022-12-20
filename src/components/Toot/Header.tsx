import { View, Text } from 'react-native'
import Avatar from '../Avatar'

const formatter = new Intl.RelativeTimeFormat(undefined, {
  numeric: 'auto',
})

const DIVISIONS = [
  { amount: 60, name: 'seconds' },
  { amount: 60, name: 'minutes' },
  { amount: 24, name: 'hours' },
  { amount: 7, name: 'days' },
  { amount: 4.34524, name: 'weeks' },
  { amount: 12, name: 'months' },
  { amount: Number.POSITIVE_INFINITY, name: 'years' },
]

function formatTimeAgo(date: Date) {
  let duration = (date.valueOf() - new Date().valueOf()) / 1000

  for (let i = 0; i <= DIVISIONS.length; i++) {
    const division: any = DIVISIONS[i]
    if (Math.abs(duration) < division.amount) {
      return formatter.format(Math.round(duration), division.name)
    }
    duration /= division.amount
  }
}

const Header = ({ account, createdAt }: any) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
    }}
  >
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Avatar uri={account.avatar} size={40} />
      <View style={{ marginLeft: 8 }}>
        <Text>{account.display_name || account.username}</Text>
        <Text>@{account.username}</Text>
      </View>
    </View>
    <Text>{formatTimeAgo(new Date(createdAt))}</Text>
  </View>
)

export default Header
