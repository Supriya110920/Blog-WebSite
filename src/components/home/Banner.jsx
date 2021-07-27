import {makeStyles,Box, Typography} from '@material-ui/core';

const useStyles=makeStyles({
    image :{
        background: `url(${'https://png.pngtree.com/background/20210709/original/pngtree-food-menu-fare-meal-background-picture-image_869492.jpg'})`,
        width: '100%',
        heigth: '100%'
        //center/55% repeat-x #000`
    }
})


const Banner=()=>{
    const classes = useStyles();
    return(
        <Box className={classes.image}>
            <Typography>Blog</Typography>
            <Typography> So</Typography>
            <Typography>Blog</Typography>
            <Typography> So</Typography>
            <Typography>Blog</Typography>
            <Typography> So</Typography>
            <Typography>Blog</Typography>
            <Typography> So</Typography>
            <Typography>Blog</Typography>
            <Typography> So</Typography>
        </Box>
    )
}

export default Banner;