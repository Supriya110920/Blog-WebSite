
import axios from 'axios';

const URL ='http://localhost:8000';

export const createPost = async (post)=> { //for creating posts
    try{
        return await axios.post(`${URL}/create`,post)  /// this pass the post object route.js to the server using axios.
    }catch(error){
        console.log('Error while calling create post Api',error);
    }
    
}


export const getAllPosts =async()=>{
    try{
        let response = await axios.get(`${URL}/posts`);
        return response.data;//get the values from backend route.js

    }catch(error){
      console.log('Error while calling getAllPosts API ',error);
    }
} 

