import axios from "axios";
const GetPopularProductAPI=async(setPopularList)=>{
    try {
        const response = await axios.get(process.env.REACT_APP_API_ENDPOINT+'public/popular/search', {
          headers: {
            'Content-Type': 'application/json',
          },
          data: {}, // If you don't have any specific data to send, you can omit this line or set it to an empty object
        });
        // Handle the response data
        setPopularList(response.data.data);
      } catch (error) {
        // Handle errors
        console.error('Error fetching data:', error);
      }
}
export default GetPopularProductAPI;