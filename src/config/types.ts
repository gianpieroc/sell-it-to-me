interface ColorPaletteType {
  primaryColor: string
  onPrimaryColor: string
  secondaryColor: string
  onSecondaryColor: string
  background: string
}

interface ThemeType {
  dark: ColorPaletteType
  light: ColorPaletteType
}

export type themeModeType = "light" | "dark"

export interface ConfigType {
  navbar: {
    show_navbar: boolean
  }
  theme_mode: themeModeType
  theme: ThemeType
}
