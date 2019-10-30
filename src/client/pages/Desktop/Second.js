import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

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

export default function Example() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Helmet>
        <title>React Second Page</title>
        <meta name="description" content="React Second Page" />
      </Helmet>
      <Paper elevation={4} style={styles.paper} align="center">
        <Typography variant="h5" style={styles.typography}>React Router with hmr Enabled 🔥</Typography>
        <Link to="/" style={styles.link}>
          <Typography variant="h5" style={styles.typography}>Go Back 👈</Typography>
        </Link>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
        Click me
        </button>
      </Paper>
    </>
  )
}
