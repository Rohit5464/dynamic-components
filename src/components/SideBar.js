import React,{useState,useEffect} from 'react'
import api from '../api/api';
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';



const SideBar = () => {

    const [sideMenu, setSideMenu] = useState([]);
    const sideData = async() =>{
        const response = await api.get("/sidebar")
        return response.data;
    }

    useEffect(()=>{
        const getsideData = async ()=>{
            const data = await sideData();
            if(data) setSideMenu(data)
        }

        getsideData();
      
    },[])

  return (
   
    <div className='sidebar'>
           {sideMenu.map((sideMenuData)=>{
               return <Link to={sideMenuData.url}><div>
               <li>{sideMenuData.title}</li>
              </div></Link>
               
           })}

    </div>
  )
}

export default SideBar