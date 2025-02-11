import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Mycard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.attraction.coverimage}
        title={props.attraction.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.attraction.name}
        </Typography>
        <Typography variant="body2" noWrap={true} color="text.secondary">
            {props.attraction.detail}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}