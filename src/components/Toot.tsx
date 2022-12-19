import { View } from 'react-native'
import Footer from './Toot/Footer'
import Header from './Toot/Header'
import HTMLParser from './Toot/HTMLParser'
import Media from './Toot/Media'

const Toot = ({ toot }: any) => {
  return (
    <View style={{ margin: 8 }}>
      <Header account={toot.account} createdAt={toot.created_at} />
      <HTMLParser content={toot.content} />
      <Media attachments={toot.media_attachments} />
      <Footer />
    </View>
  )
}

export default Toot
