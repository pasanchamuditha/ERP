import { Outlet } from 'react-router-dom'
import Sidebardashboard from './Sidebardashboard'


const DashboardLayout = () => {
  return (


    
    <div  className='flex gap-4 flex-col md:flex-row'>
      <Sidebardashboard/>
      <Outlet/>
   
      

    </div>
  )
}

export default DashboardLayout
