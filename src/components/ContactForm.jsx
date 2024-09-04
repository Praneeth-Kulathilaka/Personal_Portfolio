import React from 'react'

const ContactForm = () => {
  return (
    <div className='flex justify-center align-center min-h-full items-start'>
        <form className='max-w-full'>
            <h2 className='my-2 py-6 text-left text-4xl'>Contact Me</h2>
            <div className='my-6'>
                <label my-2 text-left text-2xl>Full Name</label>
                <input type="text" placeholder='Enter your name' required/>
            </div>
            <div className='my-6'>
                <label my-2 text-left text-2xl>Email</label>
                <input type="text" placeholder='Enter your email' required/>
            </div>
            <div className='my-6'>
                <label my-2 text-left text-2xl>Message</label>
                <textarea name="" id="" placeholder='Enter description'></textarea>
            </div>
            <button type='submit'>Send</button>
        </form>
    </div>
  )
}

export default ContactForm