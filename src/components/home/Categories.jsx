import { Button, TableCell, TableHead , Table, TableBody, TableRow } from  "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
const useStyles=makeStyles({
    create:{
        margin:20,
        background:'#f76f45',
        width:'86%'
    }
})


const Categories =() =>{
    const classes=useStyles();
    return (
       <>
        <Button variant="contained" color="primary" className={classes.create}> Add Reciepy </Button>

        <Table>
            <TableHead>
                    <TableCell>All Cuisine</TableCell>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Chinese</TableCell>
                </TableRow>
            </TableBody>
        </Table>
       </>
    )
} 
export default Categories;