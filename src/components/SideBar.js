import React,{useState,useEffect} from 'react'
import api from '../api/api';
import { Link } from 'react-router-dom';



const SideBar = (props) => {
// var sideList=[];
//     if(props.sideMenu.length>0){
//         sideList=props.sideMenu
//     }
const {list=[]} = props.sideMenu;
//     const [sideMenu, setSideMenu] = useState([]);

//     const sideData = async() =>{
//         const response = await api.get("/sidebar")
//         return response.data;
//     }

//     useEffect(()=>{
//         const getsideData = async ()=>{
//             const data = await sideData();
//             if(data===[]){
//                 setSideMenu([])
//             } else setSideMenu(data)
//         }

//         getsideData();
        
      
//     },[])

  return  (
   
  
        <div className=''>
            <ul  className={list.length<1  ? "sidebar"  :"side-menu flex-column bg-black"}>
        
        {list.map((sideMenuData)=>{

       return <Link to={sideMenuData.url}>
        <li onClick={
() => props.clickHandler(sideMenuData.url)
       } style={props.activePage===sideMenuData.url ?{ color:"blue",listStyle:"none",padding:"15px 10px",margin:"0px"} : {color:"white",listStyle:"none",padding:"15px 10px"}}> 

        {sideMenuData.title}
       </li>
      
       </Link>
       
   })}
</ul>
        </div>
  ) 
}

export default SideBar