import React, { useState } from 'react'
import axios from 'axios'

const ContactForm = () => {
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const service_id = 'service_qf2291o'
        const template_id = 'template_5gl6pu8'
        const user_id = 'yzxi4uak0C0F31Ry-'

        const data = {
            service_id: service_id,
            template_id: template_id,
            user_id: user_id,
            template_params: {
                from_name: name,
                from_email: email,
                to_name: 'Praneeth Kulathilaka',
                message: message
            }
        };

        try {
            const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send',data)
            console.log(res.data);
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error(error)
        }
    }
    
  return (
    <div className='flex justify-center align-center min-h-full items-start'>
        <form onSubmit={onSubmitHandler} className='w-full px-2'>
            <h2 className='my-2 py-1 text-left text-3xl'>Contact Me</h2>
            <div className='flex flex-col my-6 py-0'>
                <label className='my-2 text-left text-1xl'>Full Name</label>
                <input 
                    className="py-2 px-2 rounded bg-white/10 text-neutral-200 placeholder-neutral-200 text-sm" 
                    type="text" 
                    placeholder='Enter your name'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    required/>
            </div>
            <div className='flex flex-col my-6'>
                <label className='my-2 text-left text-1xl'>Email</label>
                <input 
                    className='py-2 px-2 rounded bg-white/10 text-neutral-200 placeholder-neutral-200 text-sm' 
                    type="text" 
                    placeholder='Enter your email' 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required/>
            </div>
            <div className='flex flex-col my-6'>
                <label className='my-2 text-left text-1xl'>Message</label>
                <textarea 
                    className='py-2 px-2 rounded bg-white/10 text-neutral-200 placeholder-neutral-200 text-sm' 
                    name="" 
                    id="" 
                    placeholder='Enter description' 
                    rows='5'
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}></textarea>
            </div>
            <button className='bg-transparent hover:bg-white/10 text-neutral-400 font-semibold hover:text-neutral-200 py-2 px-4 border border-neutral-900 hover:border-transparent rounded' type='submit'>Send</button>
        </form>
    </div>
  )
}

export default ContactForm