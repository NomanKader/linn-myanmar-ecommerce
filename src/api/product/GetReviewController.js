import axios from "axios";
const GetReviewAPI=async(id,setReviewList)=>{
    const url = process.env.REACT_APP_API_ENDPOINT+'public/products/'+id+'/reviews';
const params = { page: 0, size: 10 };

const headers = {
  'Content-Type': 'application/json'
};

axios.get(url, { params, headers })
  .then(response => {
    console.log("Review list",response.data);
    setReviewList(response.data);
  })
  .catch(error => {
    console.error(error);
  });
}
export default GetReviewAPI;