import { useState } from "react";
import style from './searchBar.module.css';

export default function SearchBar({onSearch}) {

   const [id, setId]= useState("");

   const handleChange = (event)=>{
     
      let eject = event.target.value;
       setId(eject);
   }
   return (
      <div className={style.searchConten}>
         <input className={style.searchInp} 
         placeholder='Enter a number' 
         type='text' onChange={handleChange} 
         value={id} />
         <button className={style.searchBtn} onClick={()=>{onSearch(id); setId('')}}>Search</button> 
      </div>
   );
}


