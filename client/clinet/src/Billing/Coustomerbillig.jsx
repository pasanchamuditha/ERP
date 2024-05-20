import React, { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { Alert } from 'flowbite-react';

const Coustomerbillig = () => {
    const [productSupplierJoinInputs, setproductSupplierJoinInputs] = useState([]);



    useEffect(() => {
      fetch("http://localhost:3001/coustomer-bill")
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
  <span className="font-medium">Info alert!</span> adding the SELLING_PRICE in the product_table to the Using coustomer id And get the Total Slling price and create a new attributes CUS_ID and TOTAL in temp Table
</Alert>






<div className='px-4 my-12'>
 

  <Table className='lg:w-[1180px]'>
    <Table.Head>
      
      <Table.HeadCell>Coustomer ID</Table.HeadCell>
      <Table.HeadCell>Transaction Total Price</Table.HeadCell>
     
    </Table.Head>

    {productSupplierJoinInputs.map((item) => (
      <Table.Body className="divide-y" key={item.BIL_ID}>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
       
          
          <Table.Cell>{item.CUS_ID}</Table.Cell>
          <Table.Cell>{item.TOTAL}</Table.Cell>
    
          

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

export default Coustomerbillig
