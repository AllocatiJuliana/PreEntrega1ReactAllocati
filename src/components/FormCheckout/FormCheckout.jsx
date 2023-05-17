import { Button, Grid, TextField } from "@mui/material";
import React from "react";

const FormCheckout = ({ handleSubmit, handleChange, errors }) => {
  return (
    <div style={{ paddingTop: "50px" }}>
      <form action="" onSubmit={handleSubmit}>
        <Grid container spacing={2} flex justifyContent={"center"}>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Nombre"
              variant="outlined"
              fullWidth
              name="nombre"
              onChange={handleChange}
              error={errors.nombre ? true : false}
              helperText={errors.nombre}
            />
          </Grid>

          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Correo"
              variant="outlined"
              fullWidth
              name="correo"
              onChange={handleChange}
              error={errors.correo ? true : false}
              helperText={errors.correo}
            />
          </Grid>

          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Telefono"
              variant="outlined"
              fullWidth
              name="telefono"
              onChange={handleChange}
              error={errors.telefono ? true : false}
              helperText={errors.telefono}
            />
          </Grid>
          <Grid item sm={7}>
            <Button type="submit" sx={{ marginTop: 2 }}>
              Comprar
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FormCheckout;
