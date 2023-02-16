import React,{useState} from 'react'
import api from '../api/api'

const AddElement = (props) => {
    const [headerList,setHeaderList] = useState({
              
                    title:"",
                description:"",
                url:""
                }

    )
    const changeHandler = (e) =>{
        const {name,value,type} = e.target;
        setHeaderList({
                ...headerList,
            [name]:value
            }
        )

    }
  return (
    <div style={{
        maxWidth:"220px",
        margin:"auto"
    }}>
        <form>
        <h2>Header Form</h2>
       <div>
       <label htmlFor="">Title</label>
        <input class='form-control' name='title' type="text" onChange={changeHandler} placeholder="Enter Title"/>
       </div>
       <div>
       <label htmlFor="">description</label>
        <textarea class='form-control' name='description' type="text" onChange={changeHandler} placeholder="Enter description"/>
       </div>    <div>
       <label htmlFor="" >Url</label>
        <input class='form-control' name="url" type="text" onChange={changeHandler} placeholder="/example-url"/>
       </div>
       <button style={{marginTop:"10px"}} class='btn btn-primary' onClick={(e)=> 
        // e.preventDefault();
        props.addHandler(headerList)
       } >Add</button>
   
        </form>
    </div>
  )
}

export default AddElement