import {makeStyles,Box, Typography} from '@material-ui/core';

const useStyles=makeStyles({
    image :{
        background:`url("https://png.pngtree.com/background/20210709/original/pngtree-food-menu-fare-meal-background-picture-image_869492.jpg") center/55% repeat-x #000`,
        width:'100%',
        height:'40vh',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        '& :first-child':{
            fontSize:50,
            color:'#ffffff',
            lineHeight:1
        },
        '& :last-child':{
            fontSize:20,
            background:'white'

        }
    },

})


const Banner=()=>{
    const classes = useStyles();
    return(
        <Box className={classes.image}>
            <Typography>Hello!</Typography>
            <Typography>Taste Education</Typography>
        </Box>

    )
}

export default Banner;