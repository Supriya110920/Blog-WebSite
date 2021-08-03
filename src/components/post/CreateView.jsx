import {Box,makeStyles,FormControl, InputBase, Button, TextareaAutosize} from '@material-ui/core';
import {AddCircleRounded} from '@material-ui/icons';
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
    form:{
        display:'flex',
        flexDirection:'row',
        marginTop:10,
    },
    textfield:{
        flex:1,
        margin:'0 10px',
        fontSize:30,
    },
    textfield1:{
        width:'100%',
        marginTop:30,
        border:'none',
        fontSize: '18px',
        '&:focus-visible':{
            outline:'none',
        }
    }
}))


const CreateView=()=>{
    const url='https://wallpaperaccess.com/full/1316970.jpg';
    const classes = useStyles();
    return(
        <Box className={classes.container}>
            <img src={url} alt="banner" className={classes.image} ></img>

            <FormControl className={classes.form}>
                <AddCircleRounded fontSize='large' color='action'/>
                
                <InputBase placeholder='Title' className={classes.textfield}/>
                <Button variant='contained' color='primary'>Post</Button>
            </FormControl>

            <TextareaAutosize rowsMin={10}  className={classes.textfield1} placeholder='Write your reciepy...' />

            
        </Box>
    )

    
}
export default CreateView;