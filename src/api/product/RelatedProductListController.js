import axios from 'axios';
const RelatedProductListAPI=async(id,setRelatedProductList,setShowBackDrop)=>{    
    await axios.post(process.env.REACT_APP_API_ENDPOINT+'public/products/RELATED?page=0&size=10&referenceId='+id,"")
    .then((res)=>{        
        console.log("ID",id);
        console.log("Related Product List",res.data.data);
        setRelatedProductList(res.data.data);
    }).catch((err)=>{
        console.error('Error Gßetting Related Product List',err);
    })
}
export default RelatedProductListAPI;