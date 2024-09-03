import React, { useState,useEffect } from 'react'

function UpdateAddress() {

  debugger
    

    const [fulladdress, setFullAddress] = useState([])
    const[name,setName]=useState('')
    const[address,setAddress]=useState('')
    const[phone,setPhone]=useState('')
    const[pincode, setPincode] = useState(0)
    const[city, setCity] = useState('')
    const[district, setDistrict] = useState('')
    const[state, setState] = useState('')
    const[landmark, setLandmark] = useState('')
    const[number2, setNumber2] = useState('')
    const[locality, setLocality] = useState('')

    

    


    const pincode_= (e) =>{
        setPincode(e.target.value)
    }

    useEffect(()=>{
      const location1 = JSON.parse(localStorage.getItem('location')) || [];
      setFullAddress(location1);
      setName(location1.name)
      setAddress(location1.address)
      setPhone(location1.phone)
      setPincode(location1.pincode)
      setCity(location1.city)
      setDistrict(location1.district)
      setState(location1.state)
      setLandmark(location1.landmark)
      setNumber2(location1.number2)
      setLocality(location1.locality)
    },[])

    useEffect(() =>{
    
     
      async function fetchLocations(){
         if(pincode.length === 6){
          const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`)
          const data = await response.json()
          setCity(data[0].PostOffice[0].Block);
          setDistrict(data[0].PostOffice[0].District);
          setState(data[0].PostOffice[0].State);
         }

  
        
  
      }
      fetchLocations();
    },[pincode])


     const savedata = (e) => {
    e.preventDefault();
    const location = {
      name,
      address,
      city,
      state,
      pincode,
      landmark,
      phone,
      number2,
      district,
      locality
    };
    console.log(location);
    localStorage.setItem("location", JSON.stringify(location));
  };


  return (
    <div>
        <form onSubmit={savedata} action="">
              <div className="form-group updateaddress">
                  <div>
                  <input type="text" onChange={(e)=>setName(e.target.value)} value={name} placeholder='Name' required />
                  <input type="text" onChange={(e)=>setPhone(e.target.value)} value={phone} placeholder='Mobile Number'/>
                  </div>
                  <div>
                  <input type="text" onKeyUp={pincode_} value={pincode}  placeholder='Pincode' required/>
                  <input type="text" onChange={(e)=>setLocality(e.target.value)} value={locality} placeholder='Locality' required/>
                  </div>

                  <div>
                  <textarea className='strear' value={address} onChange={(e)=>setAddress(e.target.value)} type="text" placeholder='Address(Area and streat)' required/>
                  
                  </div>

                  <div>
                  <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} placeholder='City/Distric/Town' required/>
                  <input type="text" value={state} onChange={(e)=>setState(e.target.value)} placeholder='State' required/>
                  </div>
                  <div>
                    <input type="text" onChange={(e)=>setLandmark(e.target.value)} value={landmark} placeholder='Landmark'/>
                    <input type="text" onChange={(e)=>setNumber2(e.target.value)} value={number2} placeholder='Alternate Number' />
                  </div>
              </div>
              <button style={{marginLeft:'10px'}} type="submit" className="btn btn-primary">Save</button>
            </form>
    </div>
  )
}

export default UpdateAddress