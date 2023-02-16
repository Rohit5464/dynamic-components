import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";


export default function Footer(props) {
  const {title="", description="",address="",email="",phone="", links = [], socialLinks = [] } = props.footerObject;

  return (
    
    <MDBFooter bgColor="light" className="text-center text-sm-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          {socialLinks.map((socials) => {
            return (
              <a href={socials.link} className="me-4 text-reset">
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={socials.logo}
                  alt=""
                ></img>
              </a>
            );
          })}
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-sm-start mt-5">
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                {title}
              </h6>
              <p>{description}</p>
            </MDBCol>

            {links.map((linkData) => {
              return (
                <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                  <h6 className="text-uppercase fw-bold mb-4">
                    {linkData.title}
                  </h6>

                  {
                    (linkData.linklist).map((listData)=>{
                      return <p>
                      <a href={listData.url} className="text-reset">
                        {listData.title}
                      </a>
                    </p>
                    })
                  }
                </MDBCol>
              );
            })}
            <MDBCol md="3" lg="3" xl="3" className="mx-auto mb-4">
              <p>
                <MDBIcon icon="home" className="text-reset" />
                {address}
              </p>
              <p>
                <MDBIcon icon="envelope" className="text-reset" />
                {email}
              </p>
              <p>
                <MDBIcon icon="phone" className="text-reset" />{" "}
                {phone}
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}
