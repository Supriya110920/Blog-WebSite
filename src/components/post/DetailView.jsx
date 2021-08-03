import { Box, makeStyles, Typography} from "@material-ui/core";
import {Link} from 'react-router-dom';
import {Edit,Delete} from '@material-ui/icons';
const useStyles = makeStyles((theme) =>({
    container:{
        padding: '10px 30px',
        [theme.breakpoints.down('md')]:{
            padding:0,
        }
    },
    image:{
        width:'100%',
        height:'50vh',
        objectFit:'cover'
    },
    icons:{
        float:'right'
    },
    icon:{
        margin:5,
        padding:5,
        border:'1px solid black',
        borderRadius:'10px',
    },
    heading:{
        fontSize:38,
        fontWeight:600,
        textAlign:'center',
        margin:'30px 0 10px 0',
        [theme.breakpoints.down('sm')]:{
            fontSize:25,
            fontWeight:600,
            textAlign:'center',
            margin:'30px 0 10px 0',

        }
    },
    subheading:{
        color:'#878787',
        display:'flex',
        margin:'20px 0',
        [theme.breakpoints.down('md')]:{
            display:'block',
            margin:'20px 0',
            color:'#878787',
        }
    }
}))

const DetailView =() =>{
    const url='https://www.recipefy.com/media/W1siZiIsIjIwMTgvMDQvMTcvMjFfMjNfNTJfNzUyX2h5ZGVyYWJhZGlfYmlyeWFuaV9iLmpwZyJdLFsicCIsImF1dG9fb3JpZW50Il0sWyJwIiwidGh1bWIiLCIxMDAweDIwMDA%2BIl0sWyJlIiwianBnIl1d/hyderabadi-biryani_b.jpg';
    const classes = useStyles();
    return(
        <Box className={classes.container}>
            <img src={url} alt="banner" className={classes.image} ></img>
            <Box className={classes.icons}>
                <Link to={'/update'}><Edit className={classes.icon} color="primary"/></Link>
                <Delete className={classes.icon} color="error"/>
            </Box>
            <Typography className={classes.heading}>
                Title of the Blog
            </Typography>
            <Box className={classes.subheading}>
                <Typography>Author: <span style={{fontWeight:600,}}>Supriya Ojha</span></Typography>
                <Typography style={{marginLeft:'auto',}} >Date: 3/8/2021</Typography>
            </Box>

            <Typography>
                this is biriyani details.....
            </Typography>
        </Box>
    )
}
export default DetailView;