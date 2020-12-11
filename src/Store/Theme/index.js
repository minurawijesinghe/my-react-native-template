import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import DefaultTheme from './DefaultTheme'
import ChangeTheme from '@/Store/Theme/ChangeTheme'
import ExampleReducer from './ExampleReducer'

export default buildSlice(
  'theme',
  [DefaultTheme, ChangeTheme, ExampleReducer],
  {
    theme: null,
    darkMode: null,
    myName: "minura",
  },
).reducer
