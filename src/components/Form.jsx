import { useState } from "react";




function Form()  {
    const[formData,setFormData]=useState({
        name:'',
        email:'',
        message:''
    })
      const handleChange = (e) =>{

      const{ name, value } =  e.target;

      setFormData((prev) => ({ ...prev, [name]: value }));
     };
    
     const handlesubmit =(e) =>{
      e.preventDefault();
      console.log("Submitted:", formData);
      alert("Thanks for the message!");
     };
       
  return (
    <form onSubmit={handlesubmit} className="form-style">
      <h3>Contact Me</h3>
      <input type="text" name="name" placeholder="Your-Name" value={formData.name}onChange={handleChange}required />
      <textarea name="message" placeholder="Your message" value={formData.message}onChange={handleChange} ></textarea>
      <button type="submit">Send Message</button>
    </form>
  );
}
export default Form;
