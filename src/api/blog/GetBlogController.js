import axios from "axios";
 const GetBlogAPI=async(setBlogList,setShowLoading,id)=>{
  setShowLoading(true);
    try {
      let apiUrl=process.env.REACT_APP_API_ENDPOINT+'public/blog/news/';
      if(id!=undefined){
        apiUrl=process.env.REACT_APP_API_ENDPOINT+'public/blog/news/'+id;
      }
      else{

      }
        const response = await axios.get(apiUrl, {
          headers: {
            'Content-Type': 'application/json',
          },
          data: {}, // If you have any specific data to send, add it here
        });
    
        // Handle the response data
        console.log("Blog Data",response.data.data);
        if(id!=null){
          setBlogList(response.data)
        }
        else{
          setBlogList(response.data.data)
        }
        
        setShowLoading(false);
      } catch (error) {
        setShowLoading(false);
        // Handle errors
        console.error('Error fetching data:', error);
      }
    }; 
 export default GetBlogAPI;