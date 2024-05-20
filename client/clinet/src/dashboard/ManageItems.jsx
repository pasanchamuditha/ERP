import React, { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';

const ManageItems = () => {
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/all-Items")
      .then(res => res.json())
      .then(data => setAllItems(data));
  }, []);

  const handleDelete = (PRODUCT_CODE) => {
    fetch(`http://localhost:3001/Item/${PRODUCT_CODE}`, {
      method: "DELETE",
    })
    .then(res => {
      if (res.ok) {
        alert("Item is deleted successfully !");
        fetch("http://localhost:3001/all-Items")
          .then(res => res.json())
          .then(data => setAllItems(data))
          .catch(error => console.error('Error fetching updated data:', error));
      } else {
        throw new Error('Failed to delete item');
      }
    })
    .catch(error => console.error('Error deleting item:', error));
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>
        Manage your Items
      </h2>

      <Table className='lg:w-[1180px]'>
        <Table.Head>
          <Table.HeadCell>Product code</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Exp date</Table.HeadCell>
          <Table.HeadCell>Selling price</Table.HeadCell>
          <Table.HeadCell>Weight</Table.HeadCell>
       
          <Table.HeadCell>Quantity units</Table.HeadCell>
          <Table.HeadCell>Edit or Manage</Table.HeadCell>
        </Table.Head>

        {allItems.map((item, index) => (
          <Table.Body className="divide-y" key={item.PRODUCT_CODE}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {item.PRODUCT_NAME}
              </Table.Cell>
              <Table.Cell>{item.PRODUCT_DESCRIPTION}</Table.Cell>
              <Table.Cell>{item.PRODUCT_CATEGORY}</Table.Cell>
              <Table.Cell>{item.PRODUCT_EXP_DATE}</Table.Cell>
              <Table.Cell>{item.SELLING_PRICE}</Table.Cell>
              <Table.Cell>{item.PRODUCT_WEIGHT}</Table.Cell>
             
              <Table.Cell>{item.QUANTITY}</Table.Cell>
              <Table.Cell>
                <Link className='font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5' 
                  to={`/dashboard/edit-Item/${item.PRODUCT_CODE}`}>
                  Edit
                </Link>
                <button onClick={() => handleDelete(item.PRODUCT_CODE)} className='bg-red-600 px-3 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>
                  Delete
                </button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  );
}


export default ManageItems;
