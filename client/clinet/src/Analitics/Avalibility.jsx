import React, { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { Alert } from 'flowbite-react';

const Avalibility = () => {

  const [availabilitySupplierJoinInputs, setAvailabilitySupplierJoinInputs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/Avalable-items")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setAvailabilitySupplierJoinInputs(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);

  return (
    <div>
      <Alert color="success" onDismiss={() => alert('Alert dismissed!')}>
        <span className="font-medium">Info alert! </span> product_table has at least one corresponding supplier in the supplier_table 
        and check the product availability
      </Alert>

      <div className='px-4 my-12'>
        <Table className='lg:w-[1180px]'>
          <Table.Head>
            <Table.HeadCell>ID</Table.HeadCell>
            <Table.HeadCell>Product ID</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Item Availability</Table.HeadCell>
            <Table.HeadCell>Supplier Availability</Table.HeadCell>
          </Table.Head>

          {availabilitySupplierJoinInputs.map((item, index) => (
            <Table.Body className={`divide-y ${item.Item_Availability === 'Available' && item.Supplier_Availability === 'Available' ? 'bg-green-100' : 'bg-red-100'}`} key={item.PRODUCT_CODE}>
              <Table.Row className="dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index + 1}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {item.PRODUCT_CODE}
                </Table.Cell>
                <Table.Cell>{item.PRODUCT_NAME}</Table.Cell>
                <Table.Cell>{item.Item_Availability}</Table.Cell>
                <Table.Cell>{item.Supplier_Availability}</Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
        </Table>
      </div>
    </div>
  );
}

export default Avalibility;
