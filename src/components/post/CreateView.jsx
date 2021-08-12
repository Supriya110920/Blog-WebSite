import {Box,makeStyles,FormControl, InputBase, Button, TextareaAutosize} from '@material-ui/core';
import {AddCircleRounded, SettingsInputCompositeTwoTone} from '@material-ui/icons';
import { useState } from 'react';

import {createPost} from '../../service/api';

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
        objectFit:'cover',
        
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


// object which update after user make chages in post (this is the post object which will pass in createobject api function)
const initialValues={
    title:'',
    description:'',
    picture: '',
    username:'supriyaojha',
    categories:'All',
    createDate:new Date()
}
//

const CreateView=()=>{
    const url='https://wallpaperaccess.com/full/1316970.jpg';
    const classes = useStyles();
    
    
    //create post and setpost start (BackEnd )  
    const [post,setPost]=useState(initialValues); //construct a object whose set the values and pass it on server backend 
    
    const handleChange=(e)=>{
        setPost({...post, [e.target.name]: e.target.value }) //call the handelChanges() function which update the initialvalue object when user give input in forms.
    }

    const savePost= async ()=>{
        await createPost(post);//when click the button create post call the function and function call the createPost()function from api.js
    }


    //create post and setpost end(BackEnd)
    
    
    
    
    return(
        <Box className={classes.container}>
            <img src={url} alt="banner" className={classes.image} ></img>

            <FormControl className={classes.form}>
                <AddCircleRounded fontSize='large' color='action'/>
                
                <InputBase 
                onChange={(e)=>handleChange(e)} 
                placeholder='Title' 
                className={classes.textfield}
                name='title'
                />

                <Button onClick={()=>savePost()} variant='contained' color='primary'>Post</Button>
            </FormControl>

            <TextareaAutosize 
            rowsMin={10}  
            className={classes.textfield1} 
            placeholder='Write your reciepy...' 
            onChange={(e)=>handleChange(e)}
            name='description'
            />

            
        </Box>
    )

    
}
export default CreateView;