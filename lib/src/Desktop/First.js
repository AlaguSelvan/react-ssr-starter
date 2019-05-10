import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Helmet } from 'react-helmet'
import Paper from '@material-ui/core/Paper'
import { Link } from 'react-router-dom'

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

export default function Mobile() {
  return (
    <>
      <Helmet>
        <title>React App shell</title>
        <meta name="description" content="React App shell" />
      </Helmet>
      <Paper elevation={4} style={styles.paper} align="center">
        <Typography variant="h5" style={styles.typography}>Hello From First Page Desktop</Typography>
        <Link to="/2" style={styles.link}>
          <Typography variant="h5" style={styles.typography}>view next Page 👉</Typography>
        </Link>
      </Paper>
    </>
  )
}
