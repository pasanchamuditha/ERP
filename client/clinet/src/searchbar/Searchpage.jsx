import React, { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';
import Searchone from './Searchone';


const Searchpage = () => {



    const [allItems, setAllItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/all-Items")
          .then(res => res.json())
          .then(data => setAllItems(data));
      }, []);





  return (

    
     <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>
        Search Items by name
      </h2>
      <div>
           <Searchone/>


      </div>
         
      <Table className='lg:w-[1180px]'>
        <Table.Head>
          <Table.HeadCell>code</Table.HeadCell>
          <Table.HeadCell>Code Name</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Exp date</Table.HeadCell>
          <Table.HeadCell>Selling price</Table.HeadCell>
          <Table.HeadCell>Weight</Table.HeadCell>
          
          <Table.HeadCell>Quantity units</Table.HeadCell>
        </Table.Head>

        {allItems.map((item, index) => (
          <Table.Body className="divide-y" key={item.PRODUCT_CODE}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {item.PRODUCT_CODE}
              </Table.Cell>
              <Table.Cell>{item.PRODUCT_NAME}</Table.Cell>
              <Table.Cell>{item.PRODUCT_CATEGORY}</Table.Cell>
              <Table.Cell>{item.PRODUCT_EXP_DATE}</Table.Cell>
              <Table.Cell>{item.SELLING_PRICE}</Table.Cell>
              <Table.Cell>{item.PRODUCT_WEIGHT}</Table.Cell>
           
              <Table.Cell>{item.QUANTITY}</Table.Cell>
              <Table.Cell>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  )
}

export default Searchpage
