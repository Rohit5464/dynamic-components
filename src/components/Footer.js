import React,{useState,useEffect} from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


import api from '../api/api';


export default function Footer(props) {
    const {footerObject,footerSocials,footerLinkList} = props;

  return (footerLinkList!==null && footerSocials!=null) ? (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      <div className='me-5 d-lg-block'>
        <span>Get connected with us on social networks:</span>
      </div>
      <div>
        { (footerSocials).map((socials)=>{
            return  <a href={socials.link} className='me-4 text-reset'><img style={{width:"50px",height:"50px"}} src={socials.logo}></img>
            </a>
        }) }
     
       
      </div>
   
    </section>

    <section className=''>
      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow className='mt-3'>
          <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>
              <MDBIcon icon="gem" className="me-3" />
              {footerObject.title}
            </h6>
            <p>
            {footerObject.description}
            </p>
          </MDBCol>

             <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>About</h6>
                    {(footerLinkList).map((linkData)=>{
                        return <p>
                         <a href='#!' className='text-reset'>
                           {linkData.title}
                         </a>
                       </p>
                    })}
                       
                </MDBCol>
          

          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
            <p>
              <a href='#!' className='text-reset'>
                Angular
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                React
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Vue
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Laravel
              </a>
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2021 Copyright:
      <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
        MDBootstrap.com
      </a>
    </div>
  </MDBFooter>
  ) : <></>;
}
