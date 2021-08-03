 
import MediaCard from './MediaCard';
import { makeStyles,Grid } from '@material-ui/core';
import {Link} from 'react-router-dom'
const useStyles= makeStyles({
    container:{
        
    }
})

const Posts =()=>{
    //const classes = useStyles();
    const posts = [1,2,3,4,5,6,7,8,9,10];
    return (
        
        posts.map(post => (
            <Grid  item lg={3}  md={4} sm={4} xs={12}>
            <Link to={'/details'} style={{textDecoration: 'none'}}>            
            <MediaCard/> 
            </Link>
            </Grid>
                        
        ))     
            
    )
}
export default Posts;