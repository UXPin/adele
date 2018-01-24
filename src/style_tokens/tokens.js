/* Choices */
const tokens = {
  "colors": {
    "blue": "#006cff",
    "blueLight10": "#3389ff",
    "blueDark10": "#0061e6",
    "silverLight20": "#f8f8f8",
    "silverLight10": "#c5c5c5",
    "silver": "#323335",
    "grayLight10": "#777777",
    "gray": "#2A2A2A",
    "grayDark10": "#222222",
    "grayDark20": "#1e1e1e",
    "black": "#131313",
    "red": "#EF0A61"
  },
  "sizes": {
    "xs": "7px",
    "s": "13px",
    "m": "14px",
    "l": "16px",
    "xl": "21px",
    "xxl": "42px",
    "xxxl": "230px"
  },
  "border": {
    "radius": "3px",
    "radiusMax": "25px",
  },
  "shadow": {
    "boxShadow": "0px 20px 14px -2px rgba(21, 21, 21, .3)",
    "textShadow": "10px 10px 20px rgba(0, 0, 55, 0.07)",
  }
}

/* Style Decisions */

export const interactive = {
  colorActive: tokens.colors.blue,
  colorInactive: tokens.colors.grayLight10,
  danger: tokens.colors.red,
  easing: '0.3s ease-in'
}

export const typography = {
  fontFamily: 'proxima-nova, Proxima Nova, Helvetica Neue, Helvetica, Arial, sans-serif',
  thin: 100,
  regular: 300,
  tableFix: 500,
  bold: 600,
  header1: tokens.sizes.xxxl,
  header2: tokens.sizes.xxl,
  header3: tokens.sizes.xl,
  regularText: tokens.sizes.l,
  mediumText: tokens.sizes.m,
  smallText: tokens.sizes.s
}

/* Component  Decisions */

export const icon = {
  size: {
    xs: tokens.sizes.xs,
    s: tokens.sizes.s,
    m: tokens.sizes.m,
  },
  colors: {
    colorActive: interactive.colorActive,
    colorInactive: interactive.colorInactive,
    danger: interactive.danger
  }
}

export const link = {
  colors: {
    colorActive: interactive.colorActive,
    colorInactive: interactive.colorInactive,
  }
}

export const table = {
  colors: {
    background: tokens.colors.grayDark10,
    oddRow: tokens.colors.grayDark10,
    evenRow: tokens.colors.grayDark20,
    hover: tokens.colors.black,
    border: tokens.colors.gray,
    interactive: tokens.colors.blue,
  },
  space: {
    cellPadding: tokens.sizes.l,
    cellPaddingBottom: '34px',
    separator: tokens.sizes.m,
  },
  border: {
    radius: tokens.border.radius,
  },
  typography: {
    fontFamily: typography.fontFamily,
    color: 'white',
    hoveredLink: tokens.colors.blue,
    sizeRegular: tokens.sizes.l,
    sizeHeader: tokens.sizes.l,
    weightHeader: typography.tableFix,
    weightRegular: typography.tableFix,
  },
  shadow: {
    boxShadow: tokens.shadow.boxShadow,
  }
}

export const inputs = {
  colors: {
    background: tokens.colors.grayDark10,
    backgroundLight: tokens.colors.gray,
    outline: tokens.colors.blue,
  },
  space: {
    padding: '7px',
  },
  border: {
    radius: tokens.border.radius,
    color: tokens.colors.grayLight10,
    colorDark: tokens.colors.silver,
    colorLight: tokens.colors.silverLight10,
    colorLighter: tokens.colors.silverLight20,
  },
  typography: {
    fontFamily: typography.fontFamily,
    size: tokens.sizes.s,
    weight: typography.regular,
    color: tokens.colors.grayLight10,
  }
}

export const filterTag = {
  colors: {
    danger: interactive.danger,
    borderColor: tokens.colors.silverLight20,
    focusColor: tokens.colors.blue,
  },
  typography: {
    fontFamily: typography.fontFamily,
    size: typography.regularText,
    color: tokens.colors.silver,
    weight: typography.thin,
  },
  border: {
    radius: tokens.border.radiusMax,
  }
}

export const brand = {
  typography: {
    fontFamily: typography.fontFamily,
    sizeRegular: typography.mediumText,
    sizeHeader: typography.header3,
    weightRegular: typography.regular,
    weightHeader: typography.regular,
    colorRegular: tokens.colors.grayLight10,
    colorHeader: tokens.colors.grayDark10,
  }
}

export const social = {
  colorActive: interactive.colorActive,
  easing: interactive.easing
}

export const heading = {
  fontFamily: typography.fontFamily,
  sizeHeader: typography.header1,
  colorHeader: tokens.colors.darkGray,
  sizeSubheader: typography.header2,
  colorSubheader: tokens.colors.grayLight10,
  shadow: tokens.shadow.textShadow,
  weight: typography.regular,
}

export const tableControls = {
  fontFamily: typography.fontFamily,
  size: typography.mediumText,
  weight: typography.regular,
  color: tokens.colors.silver,
}

export const adeleInfo = {
  typography: {
    fontFamily: typography.fontFamily,
    sizeHeader: typography.header2,
    sizeText: typography.regularText,
    weightHeader: typography.bold,
    weightText: typography.regular,
    colorHeader: tokens.colors.grayDark20,
    colorText: tokens.colors.grayLight10,
  }
}

export const sectionHeader = {
  typography: {
    fontFamily: typography.fontFamily,
    size: typography.regularText,
    weight: typography.regular,
    color: tokens.colors.grayLight10,
  }
}

export const uxpinPromo = {
  typography: {
    fontFamily: typography.fontFamily,
    sizeHeader: typography.header2,
    sizeText: typography.regularText,
    weight: typography.regular,
    colorHeader: tokens.colors.silver,
    colorText: tokens.colors.grayLight10,
  }
}

export const button = {
  border: {
    radius: tokens.border.radiusMax,
    color: tokens.colors.blue,
  },
  typography: {
    fontFamily: typography.fontFamily,
    size: typography.regularText,
    weight: typography.regular,
    color: tokens.colors.blue,
  },
  color: tokens.colors.blue,
  hover: tokens.colors.blueLight10,
  active: tokens.colors.blueDark10,
}

export const navLink = {
  fontFamily: typography.fontFamily,
  size: typography.regularText,
  weight: typography.regular,
  color: tokens.colors.grayLight10,
  colorActive: tokens.colors.blue,
}

export const footer = {
  fontFamily: typography.fontFamily,
  size: typography.smallText,
  weight: typography.regular,
  color: tokens.colors.grayLight10,
}
