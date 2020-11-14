interface ThemeType {
  primaryColor: string
  onPrimaryColor: string
  secondaryColor: string
  onSecondaryColor: string
  background: string
}

export interface ConfigType {
  navbar: {
    show_navbar: boolean
  }
  theme: ThemeType
}
