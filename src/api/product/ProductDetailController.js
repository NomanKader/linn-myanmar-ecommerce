import axios from "axios";
const ProductDetailAPI=(id,setProductDetail,setProductImages,setProductList)=>{
// Replace the URL with your actual API endpoint
const apiUrl = process.env.REACT_APP_API_ENDPOINT+'public/products/'+id;
// Axios GET request
axios.get(apiUrl, {
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(response => {
    setProductDetail();
    setProductImages([]);
    setProductList([]);
    // Handle the response data here
    setProductDetail(response.data);
    setProductList(prev=>[...prev,response.data]);    
    response.data.images.map(({image})=>{      
      console.log("URL",image.urls.public);
      setProductImages(prev=>[...prev,image.urls.public]);
    })
    console.log(response.data);
  })
  .catch(error => {
    // Handle errors here
    console.error(error);
  });

}
export default ProductDetailAPI;