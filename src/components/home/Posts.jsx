 
import MediaCard from './MediaCard';
import { makeStyles,Grid } from '@material-ui/core';
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';

import { getAllPosts } from '../../service/api';

const useStyles= makeStyles({
    container:{
        
    }
})

const Posts =()=>{
    //const classes = useStyles();
    const [posts,setPosts] = useState([]);
    //const posts = [1,2,3,4,5,6,7,8,9,10];
     useEffect(() =>{
         const fetchData = async()=>{
            let data = await getAllPosts();//calll the getAllposts from  api.js
            console.log(data);
            setPosts(data);
         }
         fetchData();
        
     },[])


    return (
        
        posts.map(post => (
            <Grid  item lg={3}  md={4} sm={4} xs={12}>
            <Link to={'/details'} style={{textDecoration: 'none'}}>            
                <MediaCard post={post} /> 
            </Link>
            </Grid>
                        
        ))     
            
    )
}
export default Posts;