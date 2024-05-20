
import { Button, Navbar } from 'flowbite-react';




const Navbarhome = () => {
  return (
    <div>
      <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">ERP solution</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="http://localhost:5173/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default Navbarhome
