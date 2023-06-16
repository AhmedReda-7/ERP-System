import { createContext, useState  } from 'react';
import axios  from 'axios';
import Swal from 'sweetalert2';


const ProductInventoryContext = createContext ();

export function ProductInventoryContextProvider({children})
{
    const [data, setData] = useState([]);
    async function getProductInventory()
    {
     const ProductInventory = await axios.get(`https://localhost:44393/api/GetAllProductsInInventory`);
     setData(ProductInventory.data);
    }
    async function getProductInventorydel()
    {
     const ProductInventory = await axios.get(`https://localhost:44393/api/GetAllProductsInInventory`);
     return ProductInventory.data;
    }
    async function getProductInventoryById(id)
    {
           const productinventoryObject = await axios.get(`https://localhost:44393/api/GetProductInInventoryById/${id}`);
           return productinventoryObject ;
          
    }
 async function deleteproductinventory(id)
 {
        const deleteproductinventory = await axios.delete(`https://localhost:44393/api/DeleteProductFromInventory/${id}`);
       
 }
    const handleDelete = (id) => {


       Swal.fire({
              icon: 'warning',
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              showCancelButton: true,
              confirmButtonText: 'Yes, delete it!',
              cancelButtonText: 'No, cancel!',
          }).then(result => {
              if (result.value) {
  
                  Swal.fire({
                      icon: 'success',
                      title: 'Deleted!',
                      showConfirmButton: false,
                      timer: 2000,
                  });

                  deleteproductinventory(id);


                  setData(getProductInventorydel())
                  setData(data.filter(employee => employee.productId !== id));

  
}
});
         getProductInventory();
       
        
      };
      async function updateProductInventory(updatedData)
      {
             const updateProductInventory = await axios.put(`https://localhost:44393/api/UpdateProductInInventory`,updatedData);
            
      }
         const handleupdate = (updatedData) => {
            updateProductInventory(updatedData);
            getProductInventory();
            
             
           };

    const valuetoshare = {data,getProductInventory,handleDelete,handleupdate,getProductInventoryById}  
    return <ProductInventoryContext.Provider value={valuetoshare}>{children}</ProductInventoryContext.Provider>
}



export default ProductInventoryContext;
