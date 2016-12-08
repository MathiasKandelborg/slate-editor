import keycode from 'keycode'

import { fontFamilyMarkStrategy } from './FontFamilyUtils'


const FontFamilyKeyboardShortcut = ({
  onKeyDown(event, data, state) {
    if (!data.isMod || keycode(data.code) !== 'b') return
    return fontFamilyMarkStrategy(state)
  }
})

export default FontFamilyKeyboardShortcut
