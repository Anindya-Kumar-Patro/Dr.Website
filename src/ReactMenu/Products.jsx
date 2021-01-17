import React from 'react'
import  {Grid}  from '@material-ui/core'
import Newproduct from './Newproduct'


const Product = [
    { id: 1, name: 'Hexigel', description: "When to use", image:'https://www.umms.org/-/media/images/umms/coronavirus/what-to-know/treatment/medicine.jpg?h=310&w=546&la=en&hash=0B1F9FCFEC5B3D37C84E849EE87CEDB9247E3635', price:"Rs.100"},
    { id: 2, name: 'Zincotop', description: "When to use", image:'https://www.umms.org/-/media/images/umms/coronavirus/what-to-know/treatment/medicine.jpg?h=310&w=546&la=en&hash=0B1F9FCFEC5B3D37C84E849EE87CEDB9247E3635', price:"Rs.200"},
    { id: 3, name: 'Zincovit', description: "When to use", image:'https://www.umms.org/-/media/images/umms/coronavirus/what-to-know/treatment/medicine.jpg?h=310&w=546&la=en&hash=0B1F9FCFEC5B3D37C84E849EE87CEDB9247E3635', price:"Rs.300"},
    { id: 4, name: 'Decadein', description: "When to use", image:'https://www.umms.org/-/media/images/umms/coronavirus/what-to-know/treatment/medicine.jpg?h=310&w=546&la=en&hash=0B1F9FCFEC5B3D37C84E849EE87CEDB9247E3635', price:"Rs.600"},
    { id: 5, name: 'Sinarest', description: "When to use", image:'https://www.umms.org/-/media/images/umms/coronavirus/what-to-know/treatment/medicine.jpg?h=310&w=546&la=en&hash=0B1F9FCFEC5B3D37C84E849EE87CEDB9247E3635', price:"Rs.50"},
    { id: 6, name: 'Setrixin', description: "When to use", image:'https://www.umms.org/-/media/images/umms/coronavirus/what-to-know/treatment/medicine.jpg?h=310&w=546&la=en&hash=0B1F9FCFEC5B3D37C84E849EE87CEDB9247E3635', price:"Rs.150"},
    { id: 7, name: 'Alphagluc', description: "When to use", image:'https://www.umms.org/-/media/images/umms/coronavirus/what-to-know/treatment/medicine.jpg?h=310&w=546&la=en&hash=0B1F9FCFEC5B3D37C84E849EE87CEDB9247E3635', price:"Rs.190"},
    { id: 8, name: 'Med2med', description: "When to use", image:'https://www.umms.org/-/media/images/umms/coronavirus/what-to-know/treatment/medicine.jpg?h=310&w=546&la=en&hash=0B1F9FCFEC5B3D37C84E849EE87CEDB9247E3635', price:"Rs.300"},
];

const Products = () => {
    return (
        <>
        <main>
            <Grid container justify="center" spacing={3}>
                {
                    Product.map((product)=>(
                        <Grid item key={product.id} xs={12} sm={6} md={3} lg={3}>
                            <Newproduct product = {product}/>
                        </Grid>
                    ))
                }
            </Grid>
        </main>
         
        </>
    )
}

export default Products
