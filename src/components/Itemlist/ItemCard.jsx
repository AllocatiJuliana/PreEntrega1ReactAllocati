import React from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <Card sx={{ Width: 345 }}>
      <CardMedia sx={{ height: 140 }} image={item.img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.producto}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.precio}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${item.id}`}>
          <Button size="small">Ver Detalle</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
