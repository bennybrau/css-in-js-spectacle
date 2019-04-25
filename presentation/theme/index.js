import createTheme from "../../createTheme";

const colors = {
  primary: 'transparent',
  secondary: 'black',
  tertiary: 'black',
  quaternary: '#cecece'
};

const theme = createTheme(colors, {
    primary: 'Futura, sans-serif',
    secondary: 'Futura, sans-serif',
    tertiary: 'Futura, sans-serif',
    quaternary: 'Futura, sans-serif'
  }, {
    progress: {
      pacmanTop: {
        background: colors.quaternary
      },
      pacmanBottom: {
        background: colors.quaternary
      },
      point: {
        borderColor: colors.quaternary
      }
    },
    components: {
      heading: {
        h1: {
          fontSize: '4rem',
          textTransform: 'uppercase'
        },
        h2: {
          fontSize: '3.5rem',
          textTransform: 'uppercase'
        },
        h3: {
          fontSize: '3rem',
          textTransform: 'uppercase'
        },
        h4: {
          fontSize: '2.5rem',
          textTransform: 'uppercase'
        },
        h5: {
          fontSize: '2rem',
          textTransform: 'uppercase'
        },
        h6: {
          fontSize: '1.5rem',
          textTransform: 'uppercase'
        }
      },
      codePane: {
        fontSize: '2rem',
        fontFamily: 'Courier'
      }
    }
  });

export default theme;