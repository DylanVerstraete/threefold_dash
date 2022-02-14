import { useEffect, useState } from 'react'
import { getData } from './lib/data'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid'
import PeopleIcon from '@mui/icons-material/People';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import StorageIcon from '@mui/icons-material/Storage';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import './App.css'

function App() {
  const [data, setData] = useState({})
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    console.log('effect triggered')
    getData()
      .then(data => setData(data))
    setInterval(() => {
      console.log('interval triggered')
      getData()
        .then(data => setData(data))
      setDate(new Date())
    }, 60000)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      <h2 style={{ marginTop: 0 }}>Threefold today: {date.toDateString()}</h2>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={3} md={4}>
          <Card style={{ width: '100%', margin: 'auto', backgroundColor: '#6769e8' }}>
            <CardActionArea>
              <PeopleIcon style={{ fontSize: '7em', color: 'white' }}/>
              <Typography variant="h2" component="div" color="white">
                {data.totalTwins - data.totalNodes}
              </Typography>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3} md={4}>
          <Card style={{ width: '100%', margin: 'auto', backgroundColor: '#6769e8' }}>
            <CardActionArea>
              <AgricultureIcon style={{ fontSize: '7em', color: 'white' }}/>
              <Typography variant="h2" component="div" color="white">
                {data.totalFarms}
              </Typography>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3} md={4}>
          <Card style={{ width: '100%', margin: 'auto', backgroundColor: '#6769e8' }}>
            <CardActionArea>
              <StorageIcon style={{ fontSize: '7em', color: 'white' }}/>
              <Typography variant="h2" component="div" color="white">
                {data.totalNodes}
              </Typography>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} md={12}>
          <Card style={{ width: '100%', margin: 'auto', backgroundColor: '#6769e8' }}>
            <CardActionArea>
              <AttachMoneyIcon style={{ fontSize: '7em', color: 'white' }}/>
              <Typography variant="h2" component="div" color="white" >
                {data.price}
              </Typography>
              </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <h2 style={{ marginBottom: 0, marginTop: '1em' }}>Lee stopt me zagen over spacing thx (-: </h2>
      {/* <coingecko-coin-ticker-widget  coin-id="threefold-token" currency="usd" locale="en" width="1000"></coingecko-coin-ticker-widget> */}
      </header>
    </div>
  );
}

export default App;
