import React, { useState } from 'react';
import { useAuth } from '../Store/auth';

const defaultContactForm = {
  name: '',
  email: '',
  message: ''
}

function Contact() {
  const [messageField, setMessageField] = useState(defaultContactForm);
  const {user} = useAuth();

  // const {user} = useAuth();

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setMessageField({
      ...messageField,
      [name]: value
    })
  }

  const getData = async (e) => {
    e.preventDefault()
    console.log(messageField);

    try {
      const responce = await fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageField),
      });
      console.log(responce);
      if (responce.ok) setMessageField(defaultContactForm)
    } catch (error) {
      console.log(error);
    }


  }

  return (
    <>
      <section className=' m-3 sm:m-20'>
        <div className='grid sm:grid-cols-2 gap-8 grid-cols-1'>
          <div className=' bg-transparent flex flex-col gap-8 items-center justify-center'>
            <h2 className='font-bold text-7xl text-center bg-transparent'>Contact Us</h2>
            <h3 className='bg-transparent text-4xl'>Lorem ipsum dolor sit.</h3>
            <p className='bg-transparent text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem asperiores in ut autem veritatis eius natus iusto, officia molestiae fugiat, perferendis debitis expedita excepturi eos nihil, sed voluptates aliquam! Numquam quidem, eos, eveniet sunt quae, vel minima minus magnam velit quasi sint similique porro quos?</p>
          </div>


          <div className=' p-3'>
            <h1 className=' text-5xl text-center m-9'>Drop Message</h1>
            <form action="" onSubmit={getData} method='post' className='bg-transparent flex flex-col gap-4'>
              <label className='bg-transparent text-3xl' htmlFor="name">Name</label>
              <input className='border rounded p-2 bg-transparent' placeholder='Name' required onChange={handleChange} value={messageField.name} type="text" name='name' id='name' />

              <label className='bg-transparent text-3xl' htmlFor="email">Email</label>
              <input className='border rounded p-2 bg-transparent' placeholder='E-mail' required onChange={handleChange} value={messageField.email} type="email" name='email' id='email' />

              <label className='bg-transparent text-3xl' htmlFor="message">Message</label>
              <textarea className='bg-transparent border rounded p-2' placeholder='Message' required onChange={handleChange} value={messageField.message} name="message" id="message" cols="30" rows="10"></textarea>

              <button className='bg-green-700 w-36 rounded m-auto py-2 text-3xl'>Send</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact;