import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button, IconButton, Toolbar, AppBar, Popover, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useCookie from 'react-use-cookie';
import {ListItemAvatar,Avatar,Divider} from '@mui/material'

const GOODS = [
  {
    id: 1,
    title: 'Hasb-1',
    description: 'Dagestanec1',
    price: '500',
    img: '/img/111.jpg'
  },
  {
    id: 2,
    title: 'Hasb-2',
    description: 'Dagestanec2',
    price: '200',
    img: '/img/222.jpg'
  },
  {
    id: 3,
    title: 'Hasb-3',
    description: 'Dagestanec3',
    price: '900',
    img: '/img/333.jpg'
  },
  {
    id: 4,
    title: 'Hasb-4',
    description: 'Dagestanec3',
    price: '900',
    img: 'https://lh3.googleusercontent.com/v4HXfjN5mp3HdAz2G4BD8_nnd2NCP627VF0uLInUQmeLx8MoG0uonhXa9CuZS3V_Y8LowsRnydPnn8JlA92aj6wH7fDZA7FCTTUCbA=w361'
  },
  {
    id: 5,
    title: 'Hasb-5',
    description: 'Dag',
    price: '900',
    img: 'https://lh3.googleusercontent.com/rdzFnYHmRbJFLo9YYE21f7Ks0NPJN44ZFSsuy1SY-G2KyICN0HVqGCGKRqueLiRK1IMi-XLQShbhxiX_gylse_ob60aQO372eFSH=w361'
  },
]

export default function ActionAreaCard() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const [basket, setBasket] = useCookie('basket', '[]');


  function push(good) {
    if (!basket) {
      setBasket([])
    }
    const currentBasket = JSON.parse(basket)
    const currentGood = currentBasket.find((g) => g.id === good.id)
    if (currentGood) {
      currentGood.count++
      setBasket(JSON.stringify(currentBasket))
    }
    else {
      good.count = 1
      setBasket(JSON.stringify([...currentBasket, good]))
    }
  }


  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button ref={anchorEl} color="inherit" onClick={handleClick}>Login</Button>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
      <Avatar sx={{ bgcolor: 'orange' }} variant="square">
        N
      </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                ***
              </Typography>
              {"-----"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          img: 
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                ***
              </Typography>
              {"-----"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          img: 
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                ***
              </Typography>
              {'-----'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
          </Popover>
        </Toolbar>
      </AppBar>
      {GOODS.map(function (good) {
        return (
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image={good.img}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {good.title}
                </Typography>
                <Button onClick={() => push(good)}> Buy </Button>
                <Typography variant="body2" color="text.secondary">
                  {good.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        )
      })
      }
    </div >
  );
}
