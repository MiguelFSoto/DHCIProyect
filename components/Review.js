import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { CartContext } from "../contexts/Cart";

const addresses = ["Calle 5 # 12-60", "San Antonio", "Cali", "Valle del Cauca"];

const payments = [
  { name: "Tipo Tarjeta", detail: "Visa" },
  { name: "Nombre Tarjeta", detail: "Ng Quang Minh" },
  { name: "Numero Tarjeta", detail: "xxxx-xxxx-xxxx-2002" },
  { name: "Fecha Expiracion", detail: "02/2222" }
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0)
  },
  total: {
    fontWeight: "700"
  },
  title: {
    marginTop: theme.spacing(2)
  }
}));

export default function Review() {
  const classes = useStyles();
  const { cartItems } = useContext(CartContext);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Resumen de la Orden
      </Typography>
      <List disablePadding>
        {cartItems.map((item) => (
          <ListItem className={classes.listItem} key={item.name}>
            <ListItemText primary={item.name} secondary={item.author} />
            <Typography variant="body2">{item.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            $34.600
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Envios
          </Typography>
          <Typography gutterBottom>Quang Minh</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Detalles de Pago
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
