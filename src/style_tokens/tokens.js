/* Choices */
const tokens = {
  "colors": {
    "blueBase": "#006cff",
    "lightBlue": "#3389ff",
    "darkBlue": "#0061e6",
    "silverLight": "#f8f8f8",
    "silver": "#323335",
    "grayLight": "#777777",
    "grayMid": "#2A2A2A",
    "grayDark": "#222222",
    "charcoal": "#1e1e1e",
    "black": "#131313",
    "red": "#EF0A61"
  },
  "sizes": {
    "xs": "7px",
    "s": "12px",
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
  colorActive: tokens.colors.blueBase,
  colorInactive: tokens.colors.grayLight,
  danger: tokens.colors.red,
  easing: '0.3s ease-in'
}

export const typography = {
  fontFamily: 'proxima-nova',
  thin: 100,
  regular: 300,
  bold: 600,
  header1: tokens.sizes.xxxl,
  header2: tokens.sizes.xxl,
  header3: tokens.sizes.xl,
  regularText: tokens.sizes.m,
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
    background: tokens.colors.grayDark,
    oddRow: tokens.colors.grayDark,
    evenRow: tokens.colors.charcoal,
    hover: tokens.colors.black,
    border: tokens.colors.grayMid,
    interactive: tokens.colors.blueBase,
  },
  space: {
    cellPadding: tokens.sizes.m,
    cellPaddingBottom: '31px',
    separator: tokens.sizes.m,
  },
  border: {
    radius: tokens.border.radius,
  },
  typography: {
    fontFamily: typography.fontFamily,
    color: 'white',
    hoveredLink: tokens.colors.blueBase,
    sizeRegular: tokens.sizes.m,
    sizeHeader: tokens.sizes.l,
    weightHeader: "400",
    weightThin: "100",
  },
  shadow: {
    boxShadow: tokens.shadow.boxShadow,
  }
}

export const inputs = {
  colors: {
    background: tokens.colors.grayDark,
    backgroundLight: tokens.colors.grayMid,
    outline: tokens.colors.blueBase,
  },
  space: {
    padding: '7px',
  },
  border: {
    radius: tokens.border.radius,
    color: tokens.colors.grayLight,
    colorDark: tokens.colors.silver,
    colorLight: tokens.colors.silverLight,
  },
  typography: {
    fontFamily: typography.fontFamily,
    size: tokens.sizes.s,
    weight: typography.thin,
    color: tokens.colors.grayDark,
  }
}

export const filterTag = {
  colors: {
    danger: interactive.danger,
    borderColor: tokens.colors.silverLight,
    focusColor: tokens.colors.blueBase,
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
    sizeRegular: typography.regularText,
    sizeHeader: typography.header3,
    weightRegular: typography.thin,
    weightHeader: typography.bold,
    colorRegular: tokens.colors.grayLight,
    colorHeader: tokens.colors.grayDark,
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
  colorSubheader: tokens.colors.grayLight,
  shadow: tokens.shadow.textShadow,
}

export const tableControls = {
  fontFamily: typography.fontFamily,
  size: typography.regularText,
  weight: typography.thin,
  color: tokens.colors.silver,
}

export const adeleInfo = {
  typography: {
    fontFamily: typography.fontFamily,
    sizeHeader: typography.header2,
    sizeText: typography.regularText,
    weightHeader: typography.bold,
    weightText: typography.thin,
    colorHeader: tokens.colors.charcoal,
    colorText: tokens.colors.grayLight,
  }
}

export const sectionHeader = {
  typography: {
    fontFamily: typography.fontFamily,
    size: typography.regularText,
    weight: typography.thin,
    color: tokens.colors.grayLight,
  }
}

export const uxpinPromo = {
  typography: {
    fontFamily: typography.fontFamily,
    sizeHeader: typography.header2,
    sizeText: typography.regularText,
    weight: typography.thin,
    colorHeader: tokens.colors.silver,
    colorText: tokens.colors.grayLight,
  }
}

export const button = {
  border: {
    radius: tokens.border.radiusMax,
    color: tokens.colors.blueBase,
  },
  typography: {
    fontFamily: typography.fontFamily,
    size: typography.regularText,
    weight: typography.thin,
    color: tokens.colors.blueBase,
  },
  color: tokens.colors.blueBase,
  hover: tokens.colors.lightBlue,
  active: tokens.colors.darkBlue,
}

export const navLink = {
  fontFamily: typography.fontFamily,
  size: typography.regularText,
  weight: typography.thin,
  color: tokens.colors.grayLight,
  colorActive: tokens.colors.blueBase,
}

export const footer = {
  fontFamily: typography.fontFamily,
  size: typography.smallText,
  weight: typography.thin,
  color: tokens.colors.grayLight,
}
