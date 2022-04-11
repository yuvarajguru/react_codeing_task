import React,{useState} from "react";
import {CSVLink} from 'react-csv';
import './App.css';

function Table(){

 const [tableData, setTableData] = useState([])
 const [error,setError] = useState({});
 const [previewData,setPreviewData] = useState([]);
 const [checked, setChecked] = useState(false);
 const [formInputData, setformInputData] = useState(
     {
        firstName:'',
        lastName:'',
        email:'',
        company:'',
        password:'',
        conformPassword:'',
        address:'',
        city:'',
        stateName:''
        
    }
 );
 
 const handleChange=(evnt)=>{  
     const newInput = (data)=>({...data, [evnt.target.name]:evnt.target.value})
    setformInputData(newInput)

 }
  
 const handleSubmit= (evnt) =>{
     evnt.preventDefault();
    
      const newData = (data)=>([...data, formInputData])
      setTableData(newData);
      
    
     setError(validate(formInputData));
 }  

 const validate = (values) =>{
    const errorObj = {}
    const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    if(!values.firstName){
        errorObj.firstName="firstname is required!";
    }else if(values.firstName.length > 25){
        errorObj.firstName="firstname must be in 25 charaters!";
    }
        
    if(!values.lastName){
        errorObj.lastName="last name is required!";
    }else if(values.lastName.length > 25){
        errorObj.firstName="lastname must be in 25 charaters!";
    }
    if(!values.email){
        errorObj.email="email is required!";
    } else if(!regex.test(values.email)){
        errorObj.email="this is not a valid email!";
    }
    if(!values.company){
        errorObj.company="companyName is required!";
    }else if(values.company.length > 50){
        errorObj.company="firstname must be in 50 charaters!";
    }
    if(!values.password){
        errorObj.password="password is required!";
    }else if(values.password.length < 6){
        errorObj.password = "password must be more then 6 charaters"
    }else if(values.password.length > 15){
        errorObj.password = "password must be less then 15 charaters"
    }
    if(!values.conformPassword){
        errorObj.conformPassword="conformPassword is required!";
    }else if(values.conformPassword.length < 6){
        errorObj.conformPassword = "conformPassword must be more then 6 charaters"
    }else if(values.conformPassword.length > 15){
        errorObj.conformPassword = "conformPassword must be less then 15 charaters"
    }
    else if(values.password == values.conformPassword ){
        errorObj.conformPassword = "conformPassword is match"
    }else{
        errorObj.conformPassword = "conformPassword didnot not match"
    }
    if(!values.address){
        errorObj.address="address is required!";
    }else if(values.address.length > 75){
        errorObj.address = "address should be less then 75 charaters"
    }
    if(!values.city){
        errorObj.city="city is required!";
    }else if(values.city.length > 50){
        errorObj.city = "city must be less then 50 charaters"
    }
    if(!values.stateName){
        errorObj.stateName="stateName is required!";
    }else if(values.stateName.length > 25){
        errorObj.stateName = "stateName must be less then 25 charaters"
    }
    return errorObj;
 }
 const handlePreview = () =>{
    const emptyInput= {firstName:'', lastName:'', email:'',company:'',password:'',conformPassword:'',
      address:'',city:'',stateName:''}
    setformInputData(emptyInput)
    if(previewData == ""){
        previewData.push(firstName.value)
        setPreviewData(previewData);
    }
    if(previewData != ""){
        previewData.push(lastName.value)
        setPreviewData(previewData);
    }
    if(previewData != ""){
        previewData.push(company.value)
        setPreviewData(previewData);
    }
    if(previewData != ""){
        previewData.push(email.value)
        setPreviewData(previewData);
    }
    if(previewData != ""){
        previewData.push(address.value)
        setPreviewData(previewData);
    }
    if(previewData != ""){
        previewData.push(city.value)
        setPreviewData(previewData);
    }

 }
const handleClear = () =>{
    const emptyInput= {firstName:'', lastName:'', email:'',company:'',password:'',conformPassword:'',
      address:'',city:'',stateName:''}
      setformInputData(emptyInput)
}
const handleClick = (e) =>{
    setChecked(true)
    if(checked == false){
        setChecked(false)
        console.log(tableData)
    }
}

const headers = [
    {label:'first Name', key:'firstName'},
    {label:'last Name', key:'lastName'},
    {label:'company Name', key:'company'},
    {label:'address details', key:'address'},
    {label:'city Name', key:'city'},
    {label:'state Name', key:'stateName'},
]
const csvReport = {
    filename: 'Report.csv',
    headers: headers,
    data: tableData
}

console.log(previewData);
 return(
     <React.Fragment>
     <div className="container">
     <div className="body">
     
     
                <div class="row">
				
					<div class=" sidebar1">
						<div class="row">
							<div class="col-sm-6 form-group">
								<label>First Name</label>
								<input
                                id="firstName"
                                name="firstName"
                                type="text"
                                onChange={handleChange}
                                value={formInputData.firstName}  
                                placeholder="Enter First Name Here.." 
                                 class="form-control"/>
                               <p className="error">{error.firstName}</p>
							</div>
                            
							<div class="col-sm-6 form-group">
								<label>Last Name</label>
								<input 
                                id="lastName"
                                name="lastName"
                                type="text"
                                onChange={handleChange}
                                value={formInputData.lastName} 
                                 placeholder="Enter Last Name Here.."
                                  class="form-control"/> 
                                <p className="error">{error.lastName}</p>
							</div>
                            
						</div>
                        <div class="row">
									
							<div class="col-sm-6 form-group">
								<label>Company</label>
								<input  
                                id="company"
                                name="company"
                                type="text"
                                onChange={handleChange}
                                value={formInputData.company} 
                                placeholder="Enter Company Name Here.." 
                                class="form-control"/>
                                <p className="error">{error.company}</p>
							</div>	
						</div>
                    <div class="col-sm-6 form-group">
						<label>Email Address</label>
						<input 
                         id="email"
                         name="email"
                         type="text"
                         onChange={handleChange}
                        value={formInputData.email} 
                        placeholder="Enter Email Address Here.." 
                        class="form-control"/>
                        <p className="error">{error.email}</p>
					</div>
                   		
                    <div class="row">
							<div class="col-sm-6 form-group">
								<label>Password</label>
								<input 
                                 id="password"
                                 name="password"
                                 onChange={handleChange}
                                value={formInputData.password} 
                                type="password" 
                                placeholder="password" 
                                class="form-control"/>
                               <p className="error">{error.password}</p>
							</div>	
							<div class="col-sm-6 form-group">
								<label>Conform password</label>
								<input 
                                     id="conformPassword"
                                     name="conformPassword"
                                     type="password"
                                     onChange={handleChange}
                                    value={formInputData.conformPassword} 
                                    placeholder="password" 
                                    class="form-control"/>
                               <p className="error">{error.conformPassword}</p>
							</div>	
									
						</div>			
                        <div class="form-group">
							<label>Address</label>
                            <input 
                                     id="address"
                                     name="address"
                                     type="text"
                                     onChange={handleChange}
                                     value={formInputData.address} 
                                    placeholder="address" 
                                    class="form-control"/>
                               <p className="error">{error.address}</p>
						</div>

						<div class="row">
							<div class="col-sm-6 form-group">
								<label>City</label>
								<input 
                                id="city"
                                name="city"
                                type="text"
                                onChange={handleChange}
                                value={formInputData.city} 
                                placeholder="Enter City Name Here.." 
                                class="form-control"/>
                              <p className="error">{error.city}</p>
							</div>	
							<div class="col-sm-6 form-group">
								<label>State</label>
								<input 
                                id="stateName"
                                name="stateName"
                                type="text"
                                onChange={handleChange}
                                value={formInputData.stateName} 
                                placeholder="Enter State Name Here.." 
                                class="form-control"/>
                              <p className="error">{error.stateName}</p>
							</div>	
									
						</div>
                        <div className="row">
                        <div className="col-sm-4">
                        <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
                            </div>
                            <div className="col-sm-4">
                                <button onClick={handlePreview} class="btn btn-secondary">Preview</button>
                            </div>
                            <div className="col-sm-4">
                                
                                <button onClick={handleClear} class="btn btn-link">Clear</button>
                            </div>

                    </div>	
					</div>

                <div class=" sidebar2"> 
                    <div className="preview">
                                    <h2>Preview</h2>
                                  
                                   
                                 
                                        {previewData.map((data,i) => (
                                            <p key={i}>{data}</p>
                                        ))}
                                       
                </div>
				</div>
     </div>        
                
            
	
   
     </div> 
    
     <div className="table-view">
      <table className="table">
            <thead>
                <tr>
                    <th>FirstName (Company)</th>
                    <th>LastName</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {
                tableData.map((data, index)=>{
                    return(
                        <tr key={index}>
                           
                            <td>{data.firstName}<br/>{data.company}</td>
                            <td>{data.lastName}</td>
                            <td>{data.address},{data.city},{data.stateName}</td>
                            <td>{<input type="checkbox" checked={checked} onChange={(e) =>handleClick(e)}/>}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
        
     </div>
     <div className="export">
         <CSVLink {...csvReport}>export to csv</CSVLink>
     </div>
    </div>
     </React.Fragment>
 );
}
export default Table;