 const theme = {
  font: {
    family: "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 'light',
    normal: 400,
    bold: 'bold',
    sizes: {
      title: '70pt',
      subtitle: '30pt',
      small: '12pt',
      medium: '16pt',
      huge: '35pt',
    }
  },
  borderRadius: {
    input: '10px',
    button: '7px',
  },
  colors: {
    primary: '#0098FF',
    secondary: '#ffffff',
    textLight: '#c4c4c4',
    textDark: '##656565', 
    lightBg: '#292929',
    subLightBg: '#313131',
    darkBg: '#E2E2E2',
    subDarkBg: '#C4C4C4',
  },
  borderNoColor: '2px solid',
  transition: {
    default: '450ms ease-in-out',
    fast: '250ms ease-in-out',
  },
  icons: {
    menu: '45px',
    small: '20px',
    medium: '30px',
    huge: '50px',
  },
  spacings: {
    inside: {
      small: '1%',
      medium: '2%',
      huge: '5%',
    },
    outside: {
      xxsmall: '10px',
      xsmall: '15px', 
      small: '25px',
      medium: '35px',
      xmedium: '50px',
      huge: '75px',
      xhuge: '100px',
    },
    layers: {
      disappear: -10,
      base: 10,
      dropDown: 20,
      menu: 30,
      overlay: 40,
      modal: 50,
      alwaysOnTop: 60,
    },

  }

}
export default theme;

