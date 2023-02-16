import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  active: {
    fontWeight: "bold",
    color: "black", // Custom style for the active link
  },
}));

const Header = (props) => {
  const classes = useStyles();

  const { logo = "", headerlist = [] } = props.headerObject;

  console.log(headerlist);
  // console.log(props.headerObject)
  console.log(logo);
  // const activePage = '/';

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img src={logo} style={{ width: "50px" }} alt="" />
          </Typography>
          {headerlist.map((headerData) => {
            return (
              <div style={{ padding: "10px" }}>
                <Typography
                  variant="h6"
                  onClick={() => props.clickHandler(headerData.url)}
                  color="inherit"
                  component={Link}
                  to={headerData.url}
                  className={
                    props.activePage === headerData.url ? classes.active : null
                  }
                >
                  {headerData.title}
                </Typography>
              </div>
            );
          })}
          <Link to="/add-data"><button style={{
            backgroundColor:"white",
            borderRadius:"10px",
            padding:"10px 30px",
          }}>Add</button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

{
  /* <div>
<MDBNavbar expand='lg' light bgColor='light'>
  <MDBContainer fluid>
    <nav aria-label='breadcrumb' className='ml-auto'>
      <MDBBreadcrumb>
       
        {props.headerList.map((headerData)=>{
            return <MDBBreadcrumbItem className={activePage===headerData.url ? 'active' : null}>
            <a href={headerData.url} key={headerData.id}>{headerData.title}</a>
          </MDBBreadcrumbItem>
        })}
       
      </MDBBreadcrumb>
    </nav>
  </MDBContainer>
</MDBNavbar>









</div> */
}
