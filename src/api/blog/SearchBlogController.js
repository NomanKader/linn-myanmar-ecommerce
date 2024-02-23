import axios from "axios";
const SearchBlogAPI=async(keyword,setBlogList,setShowLoading)=>{
    try {
      setShowLoading(true);
        const response = await axios.get(process.env.REACT_APP_API_ENDPOINT+'public/blog/news', {
          params: {
            page: 0,
            size: 10,
            sort: 'id:DESC',
            filter: keyword, // You might need to encode the filter value appropriately
          },
          headers: {
            'Content-Type': 'application/json',
          },
        });        
        console.log(response.data.data);
        setBlogList(response.data.data);
        setShowLoading(false);
        // Handle the response data as needed
      } catch (error) {
        setShowLoading(false);
        console.error('Error fetching data:', error);
        // Handle errors
      }
    };
export default SearchBlogAPI;