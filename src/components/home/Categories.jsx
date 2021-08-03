import { Button, TableCell, TableHead , Table, TableBody, TableRow } from  "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {categories} from '../constants/data';
import {Link} from 'react-router-dom';
const useStyles=makeStyles({
    create:{
        margin:20,
        background:'#f76f45',
        width:'86%'
    },
    table:{
        border: '1px solid rgba(5, 22, 133)'
        
    },
    element:{
        textAlign: 'center'
    },
    head:{
        textAlign: 'center',
        fontWeight:'bold',
        fontSize:'120%'
    },
    link:{
        textDecoration:'none',
        color:'inherit',
    }
})


const Categories =() =>{
    const classes=useStyles();
    return (
       <>
        <Link to={'/create'} className={classes.link}><Button variant="contained" color="primary" className={classes.create}> Add Reciepy </Button></Link>

        <Table className={classes.table}>
            <TableHead>
                    <TableCell className={classes.head}>All Cuisine</TableCell>
            </TableHead>
            <TableBody>

                {
                    categories.map(category =>(
                        <TableRow>
                            <TableCell className={classes.element}>{category}</TableCell>
                        </TableRow>
                    ))
                }
                
            </TableBody>
        </Table>
       </>
    )
} 
export default Categories;