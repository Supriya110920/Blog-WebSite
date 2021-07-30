 
import MediaCard from './MediaCard';
import { Box, makeStyles,Grid } from '@material-ui/core';
const useStyles= makeStyles({
    container:{
        margin:10
    }
})

const Posts =()=>{
    const classes = useStyles();



    return (
        <>
        <Grid  className={classes.container}>
            <MediaCard/>                   
        </Grid>
        <Grid  className={classes.container}>
            <MediaCard/>                   
        </Grid>
        <Grid  className={classes.container}>
            <MediaCard/>                   
        </Grid>
        <Grid  className={classes.container}>
            <MediaCard/>                   
        </Grid>
        <Grid  className={classes.container}>
            <MediaCard/>                   
        </Grid>
        <Grid  className={classes.container}>
            <MediaCard/>                   
        </Grid>
        
        
        {/* <p>Hello posts            
        </p> */}
        </>
    )
}
export default Posts;