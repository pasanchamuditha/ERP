import { Button, Checkbox, Label, Select, TextInput } from 'flowbite-react';
import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';


const EditItem = () => {

  const {PRODUCT_CODE} = useParams ();
  const {PRODUCT_NAME, PRODUCT_DESCRIPTION, PRODUCT_EXP_DATE, SELLING_PRICE, PRODUCT_WEIGHT, PRODUCT_IMAGE, QUANTITY} = useLoaderData();





  const ProductCategories =[
    "Dairy ",
    "Meat and Seafood",
    "Bakery",
    "Frozen Foods",
    "Canned and Jarred Goods",
    "Pantry Staples",
    "Beverages",
    "Snacks",
    "Household and Cleaning",
    "Health and Beauty",
    "Baby and Childcare",
    


   ]
//item selection //

const [selectProductcatogory,setselectProductcatogory] = useState(ProductCategories[0]);




const handleChangeSelectedValue =(event) =>{
console.log(event.target.value);
setselectProductcatogory(event.target.value);
}




//handle item submition

const handleItemSubmit = (event) =>  {
event.preventDefault();
const form = event.target;

const PRODUCT_CODE = form.PRODUCT_CODE.value;
const PRODUCT_NAME = form.PRODUCT_NAME.value;
const PRODUCT_DESCRIPTION = form.PRODUCT_DESCRIPTION.value;
const PRODUCT_CATEGORY =form.PRODUCT_CATEGORY.value;
const PRODUCT_EXP_DATE= form.PRODUCT_EXP_DATE.value;
const SELLING_PRICE = form.SELLING_PRICE.value;
const PRODUCT_WEIGHT =form.PRODUCT_WEIGHT.value;
const PRODUCT_IMAGE= form.PRODUCT_IMAGE.value;
const QUANTITY = form.QUANTITY.value;






const itemobj ={PRODUCT_CODE,PRODUCT_NAME,PRODUCT_DESCRIPTION,PRODUCT_CATEGORY,PRODUCT_EXP_DATE,SELLING_PRICE,PRODUCT_WEIGHT,PRODUCT_IMAGE,QUANTITY}
console.log(itemobj)

//send to the item details to sql data base
 fetch(`/dashboard/edit-item/${PRODUCT_CODE}`,{
method:"PATCH",
headers: {
"content-type":"application/json",
},
body: JSON.stringify(itemobj)
}).then(res =>res.json()).then( data =>{
alert("Book uploaded sucessfully!!")
form.reset();
})

}


  return (
    <div className='px-4 my-12'>

      <div>
        this is edit item
      </div>
      


      <h2 className='mb-8 text-3xl font-bold'>
           Upload A Item
         </h2>

          {/*form start from here */}

         < form onSubmit={handleItemSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4 ">
         

          {/* {first Row //////////////////////////////////////////////////////////////////}{PRODUCT_CODE name} */}
    <div className='flex gap-8'>
    <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label 
          //change this 
          htmlFor="PRODUCT_CODE" 

          value="Product code" 
          />
        </div>

        <TextInput 
        id="PRODUCT_CODE" 
        name='PRODUCT_CODE'
        type="text" 
        defaultValue={PRODUCT_CODE}
        placeholder="code" 

        required
         />
      </div>




              {/* {Image URL} */}

      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label 
          htmlFor="PRODUCT_NAME" 
          value="Product name" 
          />
        </div>

        <TextInput 
        id="PRODUCT_NAME" 
        name='PRODUCT_NAME'
        type="text" 
        defaultValue={PRODUCT_NAME}
        placeholder="name of product" 
        required
         />
      </div>

      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label 
          htmlFor="PRODUCT_DESCRIPTION" 
          value="Product description" 
          />
        </div>

        <TextInput 
        id="PRODUCT_DESCRIPTION" 
        name='PRODUCT_DESCRIPTION'
        type="text"
        defaultValue={PRODUCT_DESCRIPTION} 
        placeholder="Discription" 
        required
         />
      </div>


    </div>


       {/*{Second Row////////////////////////////////////////////////}*/}       
       {/* { --(catogory) 2nd row first element}-- */}
       <div className='flex gap-8'>
      
    <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label 
          htmlFor="inputState" 
          value=" Category" 
          />
        </div>
       
         <Select id='inputState' name='PRODUCT_CATEGORY'className='w-full rounded' value={selectProductcatogory}
         onChange={handleChangeSelectedValue}>
          {
              ProductCategories.map((option) => <option key={option} value={option}>{option}</option>)

          }

         </Select>
      </div>


              {/* {PRODUCT_EXP_DATE} */}

      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label 
          htmlFor="PRODUCT_EXP_DATE" 
          value="Exp date" 
          />
        </div>

        <TextInput 
        id="PRODUCT_EXP_DATE" 
        name='PRODUCT_EXP_DATE'
        type="text" 
        defaultValue={PRODUCT_EXP_DATE}
        placeholder="exp date" 
        required
         />
      </div>


      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label 
          htmlFor="SELLING_PRICE" 
          value="Price" 
          />
        </div>

        <TextInput 
        id="SELLING_PRICE" 
        name='SELLING_PRICE'
        type="text"
        defaultValue={SELLING_PRICE} 
        placeholder="Price" 
        required
         />
      </div>


    </div>
   
          {/*Third row ///////////////////////////////////////////////////////////////////////////////////////// */}
          {/* Title */}
          <div className='flex gap-8'>
    <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label 
          htmlFor="PRODUCT_WEIGHT" 
          value="Weight" 
          />
        </div>

        <TextInput 
        id="PRODUCT_WEIGHT" 
        name='PRODUCT_WEIGHT'
        type="text" 
        defaultValue={PRODUCT_WEIGHT}
        placeholder="type" 
        required
         />
      </div>




              {/* {PDF URL} */}

      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label 
          htmlFor="PRODUCT_IMAGE" 
          value="Image" 
          />
        </div>

        <TextInput 
        id="PRODUCT_IMAGE" 
        name='PRODUCT_IMAGE'
        type="text"
        defaultValue={PRODUCT_IMAGE}
        placeholder="item picture URL" 
        required
         />
         
      </div>

 





      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label 
          htmlFor="QUANTITY" 
          value="Quntatie in units" 
          />
        </div>

        <TextInput 
        id="QUANTITY" 
        name='QUANTITY'
        type="text" 
        defaultValue={QUANTITY}
        placeholder="units" 
        required
         />
      </div>

    </div>


    <Button type="submit" className='mt-5'>Upload Item</Button>

    </form>










            




    </div>
  )
}

export default EditItem
