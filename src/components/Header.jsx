
import {AppBar,Toolbar, Typography,makeStyles} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    component:{
        background: '#2d388c',
        color:'white'
    },
    container:{
        justifyContent:'center',
        '& > *':{
            padding:20
        }
        
    }


})

const Header = ()=>{
    const classes=useStyles();
    return(
        <AppBar className={classes.component}>
       <Toolbar className={classes.container}>
          <Link to={'/'} style={{textDecoration: 'none', color:'inherit'}}><Typography>Home</Typography></Link>
          <Typography>About Us</Typography>
          <Typography>Contact</Typography>
          <Typography>Login</Typography>
       </Toolbar>
    </AppBar>
    )
}
export default Header;