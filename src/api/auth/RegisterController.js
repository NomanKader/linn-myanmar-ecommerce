import axios from "axios";
const RegisterAPI=async(postBody,setShowBackDrop)=>{
    setShowBackDrop(true);
    await axios.post(process.env.REACT_APP_API_ENDPOINT+'auth/customers/register',postBody)
    .then((res)=>{
        console.log("Register Response",res.data)
        setShowBackDrop(false);
    }).catch((err)=>{
        setShowBackDrop(false);
        console.error('Error at register',err);
    })

}
export default RegisterAPI;