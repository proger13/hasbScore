import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,Button,IconButton,Toolbar,AppBar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const GOODS = [
  {
    title: 'Hasb-1',
    description: 'Dagestanec1',
    price: '500',
    img: '/img/111.jpg'
  },
  {
    title: 'Hasb-2',
    description: 'Dagestanec2',
    price: '200',
    img: '/img/222.jpg'
  },
  {
    title: 'Hasb-3',
    description: 'Dagestanec3',
    price: '900',
    img: '/img/333.jpg'
  },
  {
    title: 'Hasb-4',
    description: 'Dagestanec3',
    price: '900',
    img: 'https://lh3.googleusercontent.com/v4HXfjN5mp3HdAz2G4BD8_nnd2NCP627VF0uLInUQmeLx8MoG0uonhXa9CuZS3V_Y8LowsRnydPnn8JlA92aj6wH7fDZA7FCTTUCbA=w361'
  },
  {
    title: 'Hasb-5',
    description: 'Dag',
    price: '900',
    img: 'https://lh3.googleusercontent.com/rdzFnYHmRbJFLo9YYE21f7Ks0NPJN44ZFSsuy1SY-G2KyICN0HVqGCGKRqueLiRK1IMi-XLQShbhxiX_gylse_ob60aQO372eFSH=w361'
  },
]
export default function ActionAreaCard() {
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
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      {GOODS.map(function(good){
        return (<Card sx={{ maxWidth: 345 }}>
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
              <Typography variant="body2" color="text.secondary">
                {good.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          </Card>)
      })}
      </div>
  );
}
