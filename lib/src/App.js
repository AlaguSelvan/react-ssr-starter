import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Helmet } from 'react-helmet'
import Paper from '@material-ui/core/Paper/Paper'

const styles = {
  paper: {
    margin: 'auto',
    marginTop: 50,
    paddingTop: 10,
    width: '60%'
  },
  img: {
    width: '100%',
    marginBottom: 5
  },
  typography: {
    marginBottom: 15
  }
}

export default function Home() {
  return (
    <>
      <Helmet>
        <title>React App shell</title>
        <meta name="description" content="React App shell" />
      </Helmet>
      <Paper elevation={2} style={styles.paper} align="center">
        <Typography variant="h5" style={styles.typography}>Hello World</Typography>
      </Paper>
    </>
  )
}
