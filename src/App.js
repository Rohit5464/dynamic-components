import './App.css';
import Header from './components/Header'
import React, { useEffect,useState } from 'react'
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom';
import api from '../src/api/api';
import Body from './components/Body';
import Footer from './components/Footer';
import SideBar from './components/SideBar';


function App() {

  const [headerList,setHeaderList] = useState([]);
  const [isLoaded,setIsLoaded] = useState(false);
  const [footerObject,setFooterObject]=useState({});
const [sideMenu, setSideMenu] = useState([]);


  const headerData = async() =>{
      const response = await api.get("/headers")
      return response.data;
  }

  const footerData = async() =>{
    const response = await api.get("/footers")
    return response.data;
}
const sideData = async() =>{
    const response = await api.get("/sidebar")
    return response.data;
}



  useEffect(()=>{
      const getHeaderData = async ()=>{
          const data = await headerData();
          console.log(data);
          if(data) setHeaderList(data)
      }

      const getFooterData = async ()=>{
        const data = await footerData();
        console.log(data);

        if(data) setFooterObject(data)    
    }

    const getsideData = async ()=>{
      const data = await sideData();
      if(data) setSideMenu(data)
  }

  getsideData();

      getHeaderData();
    getFooterData();    
    setIsLoaded(true);


    
  },[])
  
 


  return (
    
    <div className="App">
     <Router>
     <Header headerList={headerList} className='header'/>
  <div className='body'>
  <SideBar className=''/>
  <Routes>
      {headerList.map((headerListData)=>{
        return <Route path={headerListData.url} element={<Body bodyData={headerListData}/>}></Route>
      })}

{sideMenu.map((sideMenuData)=>{
        return <Route path={sideMenuData.url} element={<Body bodyData={sideMenuData}/>}></Route>
      })}




      </Routes>
    </div>   
     

     <Footer footerObject={footerObject} footerSocials={footerObject.social_media} footerLinkList={footerObject.links}/> 

     </Router>
      
    </div>
  );
}

export default App;