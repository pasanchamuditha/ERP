import React, { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { Alert } from 'flowbite-react';



const Billpage = () => {

    const [productSupplierJoinInputs, setproductSupplierJoinInputs] = useState([]);



    useEffect(() => {
      fetch("http://localhost:3001/Billing-items")
      .then(res => res.json())
  
      //this will check from broser weather data is fetchin sucessfully 
      .then(data => {
        console.log(data); // Logging the response data
        setproductSupplierJoinInputs(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }, []);
  
  
















  return (
    <div>
        
    <Alert color="success" onDismiss={() => alert('Alert dismissed!')}>
  <span className="font-medium">Info alert!</span> This is Product Table Left Outer join Billing Table
</Alert>






<div className='px-4 my-12'>
 

  <Table className='lg:w-[1180px]'>
    <Table.Head>
      <Table.HeadCell>INV num</Table.HeadCell>
      <Table.HeadCell>Product name</Table.HeadCell>
      <Table.HeadCell>Selling price</Table.HeadCell>
     
    </Table.Head>

    {productSupplierJoinInputs.map((item, index) => (
      <Table.Body className="divide-y" key={item.BIL_ID}>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {index + 1}
          </Table.Cell>
          
          <Table.Cell>{item.PRODUCT_NAME}</Table.Cell>
          <Table.Cell>{item.SELLING_PRICE}</Table.Cell>
    
          

          <Table.Cell>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    ))}
  </Table>
</div>

</div>
  )
}

export default Billpage

