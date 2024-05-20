
import Adminlogcard from './Adminlogcard';
import Clientlogcard from './Clientlogcard';
import Navbarhome from './Navbarhome';
import Sllerlogcard from './Sllerlogcard';
import { Footer } from 'flowbite-react';




const Home = () => {
  return (
 <div className='mt-12'>
<Navbarhome/>
  
<div className=' flex justify-around mt-12  '>

       <div>  <Adminlogcard/></div>
       <div>  <Clientlogcard/></div>
       <div>  <Sllerlogcard/></div>
    </div>

<div className='mt-20' ><Footer container>
      <Footer.Copyright href="#" by="pasanweersinghe™" year={2024} />
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer></div>
    

 </div>


  )
}

export default Home


