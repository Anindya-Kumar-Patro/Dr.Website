import React from 'react'
import { Card, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import CardMedia from '@material-ui/core/CardMedia';
import { AddShoppingCart } from '@material-ui/icons'
import Products from './Products'
import useStyles from './styles'
import breast from '../images/breast.png'

const Newproduct = ({product}) => {
    const classes = useStyles();
    return (
        <>
        <div className={classes.box}>
        <Card className={classes.root}>
        <img src={product.image} className={classes.media} alt="name"/>
        {/* <CardMedia
          className={classes.media}
          image="https://www.umms.org/-/media/images/umms/coronavirus/what-to-know/treatment/medicine.jpg?h=310&w=546&la=en&hash=0B1F9FCFEC5B3D37C84E849EE87CEDB9247E3635"
          title={product.name}
        /> */}
        {/* <CardMedia className={classes.media} image={product.image} title={product.name}/> */}
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>  
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price}
                    </Typography>
                </div>
                <Typography variant="body2" color = "textSecondary">{product.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>
        </Card>
        </div>
        </>
    )
}

export default Newproduct
