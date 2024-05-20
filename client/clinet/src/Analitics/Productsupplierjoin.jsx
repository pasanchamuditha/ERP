import React, { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { Alert } from 'flowbite-react';


const Productsupplierjoin = () => {
//call the back end to get the tble data 

const [productSupplierJoinInputs, setproductSupplierJoinInputs] = useState([]);



  useEffect(() => {
    fetch("http://localhost:3001/productjoinsupplier")
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
      <span className="font-medium">Info alert!</span> This is Product Table Right Outer join Supplier Table
    </Alert>






    <div className='px-4 my-12'>
     

      <Table className='lg:w-[1180px]'>
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Supplier ID</Table.HeadCell>
          <Table.HeadCell>Supplier Name</Table.HeadCell>
          <Table.HeadCell>Supplier Name</Table.HeadCell>
          <Table.HeadCell>Exp date</Table.HeadCell>
          <Table.HeadCell>EXP Status</Table.HeadCell>
        </Table.Head>

        {productSupplierJoinInputs.map((item, index) => (
          <Table.Body className="divide-y" key={item.PRODUCT_CODE}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {item.PRODUCT_CODE}
              </Table.Cell>
              <Table.Cell>{item.PRODUCT_NAME}</Table.Cell>
              <Table.Cell>{item.SUPPLIER_ID}</Table.Cell>
              <Table.Cell>{item.SUPPLIER_NAME}</Table.Cell>
              <Table.Cell>{item.PRODUCT_EXP_DATE}</Table.Cell>
              <div><Table.Cell>{item.Expiry_Status}</Table.Cell></div>
              

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

export default Productsupplierjoin
