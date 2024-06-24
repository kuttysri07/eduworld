import React from 'react'
import "./Contactus.css"
import id from "../Assets/mail.svg"
import phone from "../Assets/phone.svg"
import add from "../Assets/address.svg"


const Contactus = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "caad4672-701d-4d09-8578-132aa163f2c6");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
    
  return (
    <div className='contactus'>
        
        <div className="contact">
        <h3>Send us a Message</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident blanditiis quia nisi optio dolorum corrupti dolor itaque, sunt explicabo qui nam alias numquam labore, totam, tempora adipisci minima? Iste, laborum.</p>
            <ul>
                <li><img src={id} alt="" /> sriram@gamil.com</li>
                <li><img src={phone} alt="" /> +123-45-6789</li>
                <li><img src={add} alt="" /> No9,ComplexRoad,209878</li>
            </ul>
        </div>
        <div className="contact">
            <form onSubmit={onSubmit} action="">
            <label htmlFor="name">Name:</label>
            <input type="text" placeholder='Enter your Name' name='name' />
            <label htmlFor="number">Number:</label>
            <input type="number" placeholder='Enter your Number' name='numver' />
           
            <label htmlFor="adress">Address:</label>
            <textarea name="address" placeholder='Enter your Address' id=""></textarea>
            <button className='btn' type='submit'>Submit</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contactus