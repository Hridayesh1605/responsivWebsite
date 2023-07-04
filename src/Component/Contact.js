import React, { useState } from 'react'

const Contact = () => {



  const [data, setData] = useState(
    {
      name: "",
      contact: "",
      doubt: ""
    }
  )


  const inputChange = (e) => {
    const { value, name } = e.target;

    setData(
      (prev) => {
        return {
          ...prev,
          [name]: value
        }


      }

    )

  }

  const submit = (e) => {
    e.preventDefault();
    alert(data.name);

  }

  return (
    <>

      <div className='container-fluid nav-bg'>
        <div className='row'>
          <div className='col-10 mx-auto'>

            <form onSubmit={submit}>
              <div className="input-group mb-3">

                <input type="text" name="name" value={data.name} className="form-control" placeholder="Enter your Name" aria-label="Username" aria-describedby="basic-addon1" onChange={inputChange} />
              </div>

              <div className="input-group mb-3">
                <input type="text" name="contact" value={data.contact} className="form-control" placeholder="Enter Conact Details" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={inputChange} />

              </div>



              <div className="input-group">

                <textarea className="form-control" name="doubt" value={data.doubt} aria-label="With textarea" placeholder='Enter your query' onChange={inputChange}></textarea>
              </div>
              <button type='submit' >Submit</button>
            </form>
          </div>
        </div>
      </div>


    </>
  )
}

export default Contact
