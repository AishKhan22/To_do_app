"use client"
import { useState } from "react";

export default function Home() {
{/* Define state */ }

const [todos, setTodos] = useState([
  {product: "Moisturizer", id: 1 }, 
  {product: "Sunscreen", id:2}])


const [inputdata, setInputdata] = useState("")
const [id, setId] = useState(0)

{/* functions  - ye func settodos me objects pass kar rha he*/}

const addItem = () => {

  let obj: any = todos.find(item => item.id == id)

if(obj) {
  let newarray = todos.filter(item => item.id !== obj.id)
  setTodos([...newarray, {product:inputdata, id:id }])
  setInputdata("");
  setId(0);
  return

}

  setTodos([...todos, {product:inputdata, id:id }])
  setInputdata("");
  setId(0);
};

{/* make an edit function */}

const edititem = (id: any) => {
  let obj: any = todos.find(item => item.id == id)
  setInputdata (obj.product)
  setId (obj.id)

};


const deleteitem = (id: any) => {
  let newarray = todos.filter(item => item.id !== id)
  setTodos([...newarray]);
};


  return (
    
    <div className="max-w-4xl bg-red-100 mx-auto my-3 p-5">
      <h1 className="text-center font-roboto text-pink-800 italic font-bold text-[40px] bold"> *TO DO LIST*  </h1>

{/* input div */}

<div className="flex justify-between gap-2 mt-5"> 
  <input 
  type="text"
  value={inputdata}
  onChange={(event) => setInputdata (event.target.value)}

  className=" p-2 m-l-3 text-lg border-b focus:outline-none w-[80%] "placeholder="Write a product name...."/>
  
  
  <input 
   type="number"
   value={id}
   onChange={(event:any) => setId (event.target.value)}
  
  
  className=" p-2 m-l-3 text-lg border-b focus:outline-none w-[20%] "placeholder="Write ID"/>
 
{/* make a button */ }

  <button onClick={addItem}
  className="bg-amber-950 w-[20%] text-white rounded-md hover:bg-slate-500"> Add products </button>
</div>

{/* end input div */}
<h1 className="text-center text-[25px] underline mt-7 font-roboto font-bold"> 
 Daily Care Products
</h1>

<div className=" grid grid-cols-2 gap-6 mt-5">
 {/* Grid items */} 

{
  todos.map((item:any,i:any) => {
    return ( 
    <div className="bg-purple-200 p-4 shadow-sm" key={i}>
      <div className="flex justify-between ">
        <span className="shadow rounded-full p-auto w-6 h-6 text-center bg-white">
           {i+1}
        </span>

        <span 
      onClick={() => deleteitem(item.id)}
        className="shadow rounded-full p-auto w-6 h-6  text-red-600 text-center bg-white cursor-pointer"> X </span>
      </div>
     
     {/* Data Div */}
     <div className="mt-4 text-[20px]"> {item.product} </div>
     <div> 
      <h2 onClick={() => edititem(item.id)} className="text-right cursor-pointer"> Edit </h2>
     </div>
     </div>
      
    )
  })
}
  
</div>
</div>
  );
}
