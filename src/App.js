import "./App.css";
import Header from "./components/Header";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import api from "../src/api/api";
import Body from "./components/Body";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import { Container, Row, Col } from 'react-bootstrap';

function App() {
//   const headerObject = {
  
//     "logo":"https://www.panamaxil.com/wp-content/uploads/2019/04/Panamax_logo.png",
//     "headerlist":[{
//         "id": "1",
//         "title": "Home",
//         "url": "/",
//         "description": "Our mission is to provide high-quality resources and information to help you achieve your goals. Whether you're looking to start a new business, improve your health and fitness, or simply stay up-to-date on the latest trends, we've got you covered.Explore our website to find helpful guides, insightful articles, and expert advice on a wide range of topics. With a user-friendly interface and easy-to-navigate layout, you can quickly find the information you need to take your next steps."
//     },
//     {
//         "id": "2",
//         "title": "About",
//         "url": "/about",
//         "description": "At XYZ Website, we're passionate about helping people achieve their goals and live their best lives. Our team of expert writers and editors is dedicated to providing high-quality resources and information on a wide range of topics, from health and wellness to business and entrepreneurship. We believe that everyone deserves access to the information they need to succeed, and that's why we've made it our mission to create a user-friendly platform where you can easily find what you're looking for. Whether you're a seasoned entrepreneur or just starting out on your journey, we're here to support you every step of the way."
//     },
//     {
//         "id": "3",
//         "url": "/contact",
//         "title": "Contact Us",
//         "description": "This section provides users with a way to get in touch with the website's support team. Users can submit a message through a contact form or find contact information for customer service. The support team aims to respond to inquiries within 24-48 hours."
//     }

// ]

//   }
  const [headerObject, setHeaderObject] = useState({});
  const [footerObject, setFooterObject] = useState({});
  const [sideMenu, setSideMenu] = useState({});
  const [activePage,setActivePage] = useState("")


  const headerData = async () => {
    const response = await api.get("/headers").then()
    console.log(response.data)
    return response.data;
  };

  const footerData = async () => {
    const response = await api.get("/footers");
    return response.data;
  };
  const sideData = async () => {
    const response = await api.get("/sidebar");
    return response.data;
  };

  function clickHandler (url){
setActivePage(url)
  }

  
  useEffect(() => {
    const getHeaderData = async () => {
      const data = await headerData();
      console.log(data);
      if (data) setHeaderObject(data);
      console.log(headerObject)
    };

    const getFooterData = async () => {
      const data = await footerData();
      console.log(data);

      if (data) setFooterObject(data);
    };

    const getsideData = async () => {
      const data = await sideData();
      if (data) setSideMenu(data);
    };

    getsideData();

    getHeaderData();
    getFooterData();
  }, []);

  return  (
    <div className="App">
      <Router>
       <Container fluid>
       <Row>
        <Col style={{padding:"0"}} xs={12} id="header">
          {/* Your header content goes here */}
         <Header headerObject={headerObject} clickHandler={clickHandler} activePage={activePage} className="header" />
        </Col>
      </Row>
      <Row>
        <Col style={{padding:"0"}} xs={2} id="sidebar">
        <SideBar sideMenu={sideMenu} clickHandler={clickHandler} activePage={activePage}/>
        </Col>
        <Col style={{padding:"0"}} xs={10} id="page-content">
          {/* Your main content goes here */}
          <Routes>
            { headerObject.headerlist!=null ? (headerObject.headerlist).map((headerListData) => {
              return (
                <Route
                  path={headerListData.url}
                  element={<Body bodyData={headerListData} />}
                ></Route>
              );
            }) :  <Route path="/" element={<div></div>} />}

            {sideMenu.list!=null && (sideMenu.list).map((sideMenuData) => {
              return (
                <Route
                  path={sideMenuData.url}
                  element={<Body bodyData={sideMenuData} />}
                ></Route>
              );
            })}
          </Routes>
        </Col>
      </Row>

      <Row>
        <Col style={{padding:"0"}} xs={12} id="footer">
          {/* Your footer content goes here */}
          {/* <NewFooter
          footerObject={footerObject}
          footerSocials={footerObject.social_media}
          footerLinkList={footerObject.links}
        /> */}
          <Footer
          footerObject={footerObject}


        />
        </Col>
      </Row>
      {/* <Row>
        <Col xs={2} id="sidebar">
        <SideBar />
        </Col>
        <Col xs={10} id="page-content">
          <Routes>
            {headerList.map((headerListData) => {
              return (
                <Route
                  path={headerListData.url}
                  element={<Body bodyData={headerListData} />}
                ></Route>
              );
            })}

            {sideMenu.map((sideMenuData) => {
              return (
                <Route
                  path={sideMenuData.url}
                  element={<Body bodyData={sideMenuData} />}
                ></Route>
              );
            })}
          </Routes>
          
          <Footer
          footerObject={footerObject}
          footerSocials={footerObject.social_media}
          footerLinkList={footerObject.links}
        />
        </Col>
      </Row> */}
    </Container> 
        {/* <div className="body">
          <SideBar />
          <Routes>
            {headerList.map((headerListData) => {
              return (
                <Route
                  path={headerListData.url}
                  element={<Body bodyData={headerListData} />}
                ></Route>
              );
            })}

            {sideMenu.map((sideMenuData) => {
              return (
                <Route
                  path={sideMenuData.url}
                  element={<Body bodyData={sideMenuData} />}
                ></Route>
              );
            })}
          </Routes>
        </div> */}

        {/* <Footer
          footerObject={footerObject}
          footerSocials={footerObject.social_media}
          footerLinkList={footerObject.links}
        /> */}
      </Router>
    </div>
  );
}

export default App;
