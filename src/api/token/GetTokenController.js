import axios from "axios";
const GetTokenAPI=async(postBody)=>{
      const headers = {
        'Content-Type': 'application/json'
      };      
      axios.post(process.env.REACT_APP_API_ENDPOINT+'auth/customers/google', postBody, { headers })
        .then(response => {
          sessionStorage.setItem('AccessToken',response.data.user.currentToken);
          sessionStorage.setItem('CustomerID',response.data.user.id);
        })
        .catch(error => {
          if(error.response.status==401){
            alert("Session Expired.Please Login Again");
            sessionStorage.clear();
            window.location.href='/setting';
          }
          else{
            alert("System Error at Login");
            console.error(error);
          }
          
        });
}
export default GetTokenAPI;