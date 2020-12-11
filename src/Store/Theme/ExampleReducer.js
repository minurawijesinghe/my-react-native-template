import { createAction } from '@reduxjs/toolkit'

export default {
  initialState: {},
  action: createAction('theme/setThemeName'),
  reducers(state, { payload }) {
    if (typeof payload.myName !== 'undefined') {
      state.myName = payload.myName
      console.log('myName', state.myName)
    }
  },
}
