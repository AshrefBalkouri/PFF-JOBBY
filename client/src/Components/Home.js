import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Home =()=>{
    return(
      <div style={{paddingTop : '70px', paddingBottom : '30px'}}> 

     <div  style={{display:'flex',justifyContent:'space-around' ,  marginBottom:"80px", }}>
        <div style={{width : "999px" }}>
        <span style={{display : "flex" , justifyContent:"center" ,  color : "black", fontSize:"70px",fontWeight:"bold", fontFamily:"sans-serif" }}> Find your dream <span style={{color : "#ffc107" , marginLeft: "15px"}}> JOBBY</span> </span>
    <div style={{marginTop :  "120px"}}>
    <FloatingLabel
    
    style={{fontWeight:"bold"}} 
      label="What you are searching for ?"
      
    >
      <Form.Control style={{fontWeight:"bold"}}    type="text" placeholder="Web developper , UX/UI designer ..." />
    </FloatingLabel>
    <FloatingLabel   style={{fontWeight:"bold"}}  controlId="floatingPassword" label="Where ?">
      <Form.Control   style={{fontWeight:"bold"}}   type="text" placeholder="Password" />
    </FloatingLabel>
  </div>
  </div>
  

     </div>  

     <div style={{ display:"flex",justifyContent:"end" , backgroundColor:"#333333"}}>  
         
        <div style={{display:"flex", justifyContent:"space-around" ,flexWrap:"wrap", alignItems:"center" }}>
        <h1 style={{color:"#ffc107", marginLeft:"80px" , paddingTop:"50px" } }> We connect companies with professionals. </h1>
        <Button variant="warning" style={{height:"50px" ,marginTop:"-100px" , fontWeight:"bolder" , fontFamily:"monospace", fontSize:"25px", color:"#333333"}} >Learn more </Button>{' '}
        </div>
     <img  style={{width:"1250px" , height:" 500px" }} src="https://files.schudio.com/hnc/images/banners/Web_Banner_Front_Images_V8.jpg" alt="Description de l'image" />
     </div>  
    </div> 
    )
}
export default Home