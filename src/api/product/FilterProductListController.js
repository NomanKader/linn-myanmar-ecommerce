import axios from "axios";
const FilterProductListAPI=async(category,filterPostBody,setProductList)=>{    
    await axios.post(process.env.REACT_APP_API_ENDPOINT+'public/products/'+category,filterPostBody)     
    .then((res)=>{       
        if(res.data.total>0){
            setProductList(res.data.data);
        }
        else{
            setProductList(res.data);
        }
        console.log("Filtered Data",res.data.data);
        console.log("Filter Post Body",filterPostBody);
    }).catch((err)=>{
        console.error("Error at getting filter product list",err);
    })
}
export default FilterProductListAPI;