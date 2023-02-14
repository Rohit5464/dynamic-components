import React, { useEffect,useState } from 'react'
import {Router , Route} from 'react-router-dom';
import api from '../api/api';
import {
  MDBNavbar,
  MDBContainer,
  MDBBreadcrumb,
  MDBBreadcrumbItem
} from 'mdb-react-ui-kit';


const Header = (props) => {
   
    console.log(props.headerList)


    
  return (
    <div>
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <nav aria-label='breadcrumb' className='ml-auto'>
          <MDBBreadcrumb>
           
            {props.headerList.map((headerData)=>{
                return <MDBBreadcrumbItem>
                <a href={headerData.url} key={headerData.id}>{headerData.title}</a>
              </MDBBreadcrumbItem>
            })}
           
          </MDBBreadcrumb>
        </nav>
      </MDBContainer>
    </MDBNavbar>
   
 
    



    {/* <ul>
       {headerList.map((data) =>{
        return <li >{}</li>
       })}
    </ul> */}



    </div>
  )
}

export default Header