import axios from "axios";
const ProductListAPI=async(setProductList)=>{
   await axios({
        method: 'post',
        url: 'https://api.linnmyanmar.com.mm/dev/public/products/FLASH_SALE',
        params: {
          page: 0,
          size: 10,
          referenceId: 0,
        },
        headers: {
          'Content-Type': 'application/json',
        },
        data: '',
      })
        .then(response => {
          response.data.data.map((product)=>{
            console.log("Product at API",product)
            setProductList(product)
          })
          // Handle the response
          
        })
        .catch(error => {
          // Handle errors
          console.error(error);
        });
      
}
export default ProductListAPI;