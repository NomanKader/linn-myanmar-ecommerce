import axios from "axios";
const ProductSearchAPI=async(keyword,setProductList,setShowLoading,setFirstLoad)=>{
  setShowLoading(true);
  setFirstLoad(false);
  setProductList([]);
    const apiUrl=process.env.REACT_APP_API_ENDPOINT+'public/search';
    await axios.get(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          filter: keyword,
        },
      })
        .then(response => {
          // Handle the response here
          console.log("Product Search",response.data.data);
          setProductList(response.data.data);
          setShowLoading(false);
        })
        .catch(error => {
          // Handle errors here
          console.error(error);
          setShowLoading(false);
        });
}
export default ProductSearchAPI;