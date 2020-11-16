import { themeModeType } from "../../config/types"

export const configSelector = state => state?.config || {}

export const themeModeSelector = state =>
  configSelector(state)?.theme_mode || {}

export const themeSelector = state => configSelector(state)?.theme

export const themeModeSelectedSelector = (state, mode: themeModeType) =>
  (themeSelector(state) && themeSelector(state)[mode]) || {}
