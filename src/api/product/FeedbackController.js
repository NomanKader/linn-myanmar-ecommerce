import axios from "axios";
const ProductFeedbackAPI=async(postBody)=>{
      const headers = {
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+sessionStorage.getItem('AccessToken')
      };
      
      axios.post(process.env.REACT_APP_API_ENDPOINT+'customers/me/product/reviews', postBody, { headers })
        .then(() => {
          alert("Thanks for your review.")
        })
        .catch(error => {
          alert("Sorry,we're currently having error in writing review.Thanks for your understanding.")
          console.error("Error writing review",error);
        });
}
export default ProductFeedbackAPI;