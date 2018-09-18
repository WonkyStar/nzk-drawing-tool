const homeTheme = {
  palette: {
    white: '#fff',
    black: '#000',
    skyBlue: '#55acf1',
    lightBlue: '#b3daf9',
    flamingoPink: '#81247A',
    elephantPurple: '#303993'
  },
}
homeTheme.gradients = {
  pinkToPurple: {
    from: homeTheme.palette.flamingoPink,
    to: homeTheme.palette.elephantPurple,
  },
  blueToDarkBlue: {
    from: homeTheme.palette.skyBlue,
    to: homeTheme.palette.lightBlue,
  },
}
homeTheme.base = {
  primary: homeTheme.palette.skyBlue,
  secondary: homeTheme.palette.lightBlue
}
homeTheme.text = {
  primary: homeTheme.palette.white,
  secondary: homeTheme.palette.black,
  link: homeTheme.palette.skyBlue
}
// we'd create a helper function for converting gradients into the correct css string
homeTheme.btn = {
  access: homeTheme.gradients.blueToDarkBlue,
  student: homeTheme.gradients.pinkToPurple
}

module.exports = homeTheme