import React, { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';





const AdminManage = () => {

    const [allItems, setAllItems] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3001/all-Admins")
        .then(res => res.json())
        .then(data => setAllItems(data));
    }, []);
  
    const handleDelete = (USER_ID) => {
      fetch(`http://localhost:3001/Admin/${USER_ID}`, {
        method: "DELETE",
      })
      .then(res => {
        if (res.ok) {
          alert("Item is deleted successfully !");
          fetch("http://localhost:3001/all-Admins")
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
      Manage Admin accounts 
    </h2>

    <Table className='lg:w-[1180px]'>
      <Table.Head>
        <Table.HeadCell>User ID</Table.HeadCell>
        <Table.HeadCell>User name </Table.HeadCell>
        <Table.HeadCell>Password</Table.HeadCell>
        <Table.HeadCell>Edit or Manage</Table.HeadCell>
      </Table.Head>

      {allItems.map((item, index) => (
        <Table.Body className="divide-y" key={item.USER_ID}>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {index + 1}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {item.USER_ID}
            </Table.Cell>
            <Table.Cell>{item.PASSWORD_ID}</Table.Cell>
            <Table.Cell>
              <Link className='font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5' 
                to={`/dashboard/Admin-manage/${item.USER_ID}`}>
                Edit
              </Link>
              <button onClick={() => handleDelete(item.USER_ID)} className='bg-red-600 px-3 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>
                Delete
              </button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      ))}
    </Table>
  </div>
  )
}

export default AdminManage
