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

  useEffect(() => {
    console.log('triggered')
    getData()
      .then(data => setData(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      <h2>Threefold today: {new Date().toLocaleDateString()}</h2>
      <Grid
        container
        spacing={12}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6} md={6}>
          <Card style={{ width: '80%', margin: 'auto', backgroundColor: '#6769e8' }}>
            <CardActionArea>
              <PeopleIcon style={{ fontSize: '10em', color: 'white' }}/>
              <Typography variant="h2" component="div" color="white">
                {data.totalTwins - data.totalNodes}
              </Typography>
              <CardContent>
                <Typography gutterBottom variant="h4" component="div" color="white">
                  Users
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} md={6}>
          <Card style={{ width: '80%', margin: 'auto', backgroundColor: '#6769e8' }}>
            <CardActionArea>
              <AgricultureIcon style={{ fontSize: '10em', color: 'white' }}/>
              <Typography variant="h2" component="div" color="white">
                {data.totalFarms}
              </Typography>
              <CardContent>
                <Typography gutterBottom variant="h4" component="div" color="white">
                  Farms
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} md={6}>
          <Card style={{ width: '80%', margin: 'auto', backgroundColor: '#6769e8' }}>
            <CardActionArea>
              <StorageIcon style={{ fontSize: '10em', color: 'white' }}/>
              <Typography variant="h2" component="div" color="white">
                {data.totalNodes}
              </Typography>
              <CardContent>
                <Typography gutterBottom variant="h4" component="div" color="white">
                  Nodes
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} md={6}>
          <Card style={{ width: '80%', margin: 'auto', backgroundColor: '#6769e8' }}>
            <CardActionArea>
              <AttachMoneyIcon style={{ fontSize: '10em', color: 'white' }}/>
              <Typography variant="h2" component="div" color="white" >
                {data.price}
              </Typography>
              <CardContent>
                <Typography gutterBottom variant="h4" component="div" color="white">
                  TFT Price 
                </Typography>
              </CardContent>
              </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      {/* <coingecko-coin-ticker-widget  coin-id="threefold-token" currency="usd" locale="en" width="1000"></coingecko-coin-ticker-widget> */}
      </header>
    </div>
  );
}

export default App;
