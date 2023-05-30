/* eslint-disable */


import { useEffect, useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";




function DynamicTable(){

  const [openDialog, handleDisplay] = useState(false);

const handleClose = () => {
   handleDisplay(false);
};

const openDialogBox = () => {
   handleDisplay(true);
};
const buttonStyle = {
   width: "10rem",
   fontsize: "1.5rem",
   height: "2rem",
   padding: "5px",
   borderRadius: "10px",
   backgroundColor: "green",
   color: "White",
   border: "2px solid yellow",
};
const divStyle = {
   display: "flex",
   felxDirection: "row",
   position: "absolute",
   right: "0px",
   bottom: "0px",
   minWidth:"10rem"
   // padding: "1rem",
};
const confirmButtonStyle = {
   width: "5rem",
   height: "1.5rem",
   fontsize: "1rem",
   backgroundColor: "grey",
   color: "black",
   margin: "5px",
   borderRadius: "10px",
   border: "1px solid black",
};


  const [TableData,setTableData] = useState([{
    
    Checked:"", Title:"", Description:"", Create_AT:"",Finished_At:"",Archive_At:"",Actions:""
  }])

  const [title,settitle] = useState("")
  const [description,setDescription] = useState('')
  const [createdAt, setcreatedAt] = useState('')
  const [finishedAt, setfinishedAt] = useState('')
  const [archiveAt, setarchiveAt] = useState('')
  const [checked,setChecked]=useState(false)

  const [realDelete,setRealDelete] = useState(0)
  const [realEdit,setRealEdit] = useState(0)
  const [realArchive,setRealArchive] = useState(0)

  const [newTitle,setnewTitle] = useState("")
  const [newDesc,setnewDesc] = useState("")

  const [editCount, setEditCount] = useState(0)

  const [dayId,setDayId] = useState(1)
  const [checkboxInx,setCheckboxInx]=useState(0)
  


  const [totalExp , setTotalExp] = useState(0)
  const [titleRem,settitleRem] = useState(0)
  const [amount,setAmount]=useState(0)

  const [actions,setAction]=useState('Ahmed')
  

  

 

  const d = new Date();
let month = d.getMonth() + 1 ;

const currMonth = (m) =>{
  if(m === 1){
    return "Jan"
  } else if (m === 2){
    return "Feb"
  } else if (m === 3){
    return "Mar"
  } else if (m === 4){
    return "Apr"
  } else if (m === 5){
    return "May"
  } else if (m === 6){
    return "Jun"
  } else if (m === 7){
    return "Jul"
  } else if (m === 8){
    return "Aug"
  } else if (m === 9){
    return "Sep"
  } else if (m === 10){
    return "Oct"
  } else if (m === 11){
    return "Nov"
  } else if (m === 12){
    return "Dec"
  }
   
} 




const regex = /^[0-9\b]+$/;


  console.log("TableData is ...",TableData)

let clonforDel = [...TableData]
useEffect(()=>{
  console.log("clonforDel",clonforDel)

  const newList = clonforDel.filter((item) => item.Id !== realDelete);
  setTableData(newList)

},[realDelete])




console.log("test")
useEffect(()=>{

  const date = new Date().toLocaleString()

    const archiveTodo = (inx)=>{
      let cloneTable = [...TableData]
      cloneTable[inx].Archive_At=date
      setTableData(cloneTable)
      }
      realArchive > 0 && realArchive !=  undefined && archiveTodo(realArchive)


},[realArchive])

useEffect(()=>{
  let cloneDataTable = [...TableData]
console.log("testrealEdit...",realEdit)
  const edittitlDesc = (realEdit) => {
    // cloneDataTable[realEdit].Title = newTitle

    // cloneDataTable[realEdit].Description = newDesc
    cloneDataTable.map((item)=>{
      if(item.Id == realEdit){
        item.Title = newTitle
        item.Description = newDesc
      }
    })
    
  }

  

  realEdit > 0 && realEdit !=  undefined && edittitlDesc(realEdit)

},[editCount])




  const trashIconButton = (inx)=>{

    console.log("testCloneDelIn",inx)

    const onclickTrash = (inx) =>{

      setRealDelete(inx)
    
    
    }

    const onclickArchive = (inx) => {
      setRealArchive(inx)
     }


    const onclickEdit = (inx) => {
     setRealEdit(inx)
     openDialogBox()
    }

    console.log("test for inx of Delete Obj...",inx)
   
    return (
  <>
     <button className="mr-2" style={{marginRight:"8px",background:"none"}} onClick={(e)=>{onclickTrash(inx)}}>🗑️</button>
     <button className="mr-2" style={{marginRight:"8px",background:"none"}} onClick={(e)=>{onclickEdit(inx)}}>🖊</button>
     <button className="mr-2" style={{marginRight:"8px",background:"none"}} onClick={(e)=>{onclickArchive(inx)}}>💾</button>
  </>
    
    )
    

  }


  useEffect(()=>{

    const date = new Date().toLocaleString()

    const finishedTodo = (checkboxInx)=>{
      console.log("testtableData",TableData)
      console.log("testtableData",checkboxInx)
      let cloneTable = [...TableData]
      cloneTable[checkboxInx].Finished_At=date
      setTableData(cloneTable)
      }
      checkboxInx > 0 && checkboxInx !=  undefined && finishedTodo(checkboxInx)


  },[checkboxInx])


  let cloneTable = [...TableData]



  const checkBox = (inx)=>{

   

    const date = new Date().toLocaleString()
    console.log("cloneTable",cloneTable)
    const handleChange = (e) => {


      setChecked(e.target.checked)

  console.log("testonChange",e.target.checked)
      if(e.target.checked == true){
        console.log("the check box checked successfully")

        setCheckboxInx(inx)

     
  
  
  console.log("cloneTable",inx)
  setTimeout(()=>console.log("cloneTable",TableData),100)

  

      }
     
     
      setTimeout(()=>console.log("testCheckBoxdate",finishedAt),200)
    };
    return (
      <div>
      <input type="checkbox" onChange={(e)=>handleChange(e)} />
    </div>
      
    )
  }


  const addvalidate = ()=>{
    if(title != "" && description != ""){
      addTodo()
    } else {
      
      toast("Please complete all entries!!!"
      
      
      
      
      
      
      
      
      
      
      
        )
      console.log("Please complete all entries!!!")
    }
  }

 
  const addTodo = ()=>{
    const date = new Date().toLocaleString()


    
    

    setDayId(dayId + 1)

console.log("testDate",date)
    setcreatedAt(date)


    let mainObj = {
      Id: dayId ,
      Checked:checkBox(dayId),Title:`${title}`, Description:`${description}`, Create_AT:`${date}` , Finished_At:`${finishedAt}`,Archive_At:`${archiveAt}`,Actions:trashIconButton(dayId)}
    let cloneTableData = TableData != undefined && [...TableData]
     cloneTableData = TableData != undefined && [...cloneTableData,mainObj]
     
    
     setTableData(cloneTableData)


    
    console.log(TableData)

    
    
 
  


   


  }














 const column = TableData != undefined && Object.keys(TableData[0]);

 
 const ThData =()=>{
    
     return TableData != undefined && column.map((data)=>{
         return <th key={data}>{data}</th>
     })
 }


const tdData =() =>{
   
     return TableData != undefined && TableData.map((data,inx)=>{
      if(TableData[inx].Id != ''){
       return(

           <tr key={data.Id} className="bg-success" >
                {

                   column.map((v)=>{
                       return <td key={v} className="bg-info"  style={{fontSize:"20pt"}}>{data[v]}</td>
                   })
                }
           </tr>

       )
     }
    }
    )
}


  return (
<>
<ToastContainer />

<>
      
         <Dialog onClose = {handleClose} open = {openDialog} 
         >
          ------------------------------------------------------------
            <DialogTitle> Editing </DialogTitle>
            <div style={{minWidth:"8rem",minHeight:"12rem"}}>
              
            <span className="title">Title
          <input
          required
           className="form-control w-50 p-2 text-center col-md-8 offset-md-3 mt-2"
          
          placeholder="please Enter title"
         type="text"
         onChange={(e)=>{
          setnewTitle(e.target.value)      
        }}
        value={newTitle}
         ></input>
         </span>


    <div className="title">
        Description <span>
          <input
          required
          
          className="form-control w-50 p-2 text-center col-md-8 offset-md-3 mt-2"
          placeholder='please enter description'
         type='text'
         onChange={(e)=>setnewDesc(e.target.value)}
         value={newDesc}
         ></input>
         </span>
         </div>

<br />
<br />


            <div style = {divStyle}>
               <button style = {confirmButtonStyle} onClick = {()=>{
                setEditCount(curr => curr + 1)  
                setTimeout(()=>handleClose(),0)
                setTimeout(()=> setnewDesc(""),0)
                setTimeout(()=> setnewTitle(""),0)

               }
         
                }>
                  Confirm
               </button>
               <button style = {confirmButtonStyle} onClick = {handleClose}>
                  Cancel
               </button>
            </div>


            </div>
           </Dialog>
      </>


<div className="title">
         {/* <span >{currMonth(month)}</span>  */}
          Title <span>
          <input
          required
           className="form-control w-50 p-2 text-center col-md-8 offset-md-3 mt-2"
          
          placeholder="please Enter title"
         type="text"
         onChange={(e)=>{
            settitle(e.target.value)
        }}
        value={title}
         ></input>
         </span>
        </div>

    <div className="title">
        Description <span>
          <input
          required
          
          className="form-control w-50 p-2 text-center col-md-8 offset-md-3 mt-2"
          placeholder='please enter description'
         type='text'
         onChange={(e)=>setDescription(e.target.value)}
         value={description}
         ></input>
         </span>

         {/* Amount <span>
          <input
          required
          
          className="form-control w-50 p-2 text-center col-md-8 offset-md-3 mt-2"
          placeholder='Enter Amount'
          type='number'
          onChange={(e)=>setAmount(e.target.value)}
          value={amount}
         ></input>
         </span> */}

         <button  
         className="btn btn-primary mt-4 mb-2"
         style={{fontSize:"20pt"}} onClick={()=>addvalidate()}>Creat new to-do</button>
        </div>

       <table className="table">
        <thead>
         <tr className="display-6 text-info"  style={{fontSize:"20pt" , marginTop:"20px"}}>{ThData()}</tr>
        </thead>
        <tbody>
        {tdData()}
        </tbody>
       </table>
       </>
  )

}
export default DynamicTable;





