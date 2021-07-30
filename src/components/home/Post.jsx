import {Box, Typography,makeStyles} from '@material-ui/core';
const useStyles = makeStyles({
    container:{
        height:100
    },
    image:{
        justifyContent:'center',
        '& > *':{
            padding:20
        }
        
    }


})

const Post=()=>{
    const classes = useStyles();
    const url='https://img.buzzfeed.com/buzzfeed-static/static/2013-11/enhanced/webdr03/18/17/enhanced-buzz-22126-1384812593-32.jpg';
    return(
        <>
        <Box className={classes.container}>
            <img src={url} alt='wrapper'></img>
            <Typography>Indian</Typography>
            <Typography>Biriyani</Typography>
            <Typography>My Chef</Typography>
            <Typography>Very Tasty</Typography>
        </Box>
        </>
    )
}
export default Post;