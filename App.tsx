import Root from './src/Root'
import i18n from './src/i18n/i18n'
import { getLocales } from 'expo-localization'

i18n.changeLanguage(getLocales()[0].languageCode)

const App = () => <Root />

export default App
