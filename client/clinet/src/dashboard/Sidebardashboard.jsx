import React from 'react'
'use client';

import { Sidebar } from 'flowbite-react';
import { HiOutlineUpload,HiOutlineUserAdd,HiSearch,HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi';



const Sidebardashboard = () => {
  return (
    <div>
      <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Collapse icon={HiOutlineUserAdd} label="Account manage ">
            <Sidebar.Item href="http://localhost:5173/dashboard/Adminmanage">Admin account</Sidebar.Item>
            <Sidebar.Item href="http://localhost:5173/dashboard/Adminupload">Create Admin</Sidebar.Item>
            <Sidebar.Item href="#">Refunds</Sidebar.Item>
            <Sidebar.Item href="#">Shipping</Sidebar.Item>
          </Sidebar.Collapse>

          <Sidebar.Collapse icon={HiTable} label="Data Tabels ">
            <Sidebar.Item href="http://localhost:5173/dashboard/productjoinsupplier">Supplier/Product join table </Sidebar.Item>
            <Sidebar.Item href="http://localhost:5173/dashboard/Avalable-items">Avalibility</Sidebar.Item>
            <Sidebar.Item href="http://localhost:5173/dashboard/Billing-items">Billing</Sidebar.Item>
            <Sidebar.Item href="#">Shipping</Sidebar.Item>
          </Sidebar.Collapse>


          <Sidebar.Item href="http://localhost:5173/dashboard/manage" icon={HiInbox}>
            Manage 
          </Sidebar.Item>
          <Sidebar.Item href="http://localhost:5173/dashboard/search-items" icon={HiSearch}>
           SearchItem
          </Sidebar.Item>
          <Sidebar.Item href="/dashboard/upload" icon={HiOutlineUpload}>
            Upload
          </Sidebar.Item>
          <Sidebar.Item href="/dashboard/coustomer-bill" icon={HiUser}>
            Coustomers
          </Sidebar.Item>
          <Sidebar.Item href="http://localhost:5173/dashboard/POS" icon={HiTable}>
            POS
          </Sidebar.Item>
      
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </div>
  )
}

export default Sidebardashboard
