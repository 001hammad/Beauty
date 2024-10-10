import React from 'react';

const Footer = () => {
  return (
    <footer>
    <div className='bg-black h-72 space-x-96 p-8 flex justify-between'>
      <div>
        <div className='inline'>Quick Links</div>
        <div>
          <p className='text-xs m-1'>
            <b>Phone:</b> +92 3172897237
          </p>
          <p className='text-xs m-1'>
            <b>PTCL:</b> +923 317277237
          </p>
          <p className='text-xs m-1'>
            <b>Phone:</b> +922 317274237
          </p>
          <p className='text-xs m-1'>
            <b>Address:</b> North Karachi Pakistan
          </p>
          <p className='text-xs m-1'>
            <b>Email:</b> iamhammad224@gmail.com
          </p>
        </div>
      </div>
      <div className='self-start bg-[#8f5d2b] h-50 w-48 p-2 rounded-md border-2 border-white'>
        <h3 className='font-bold text-xl'>Contact With Us </h3>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder='Enter Your Name' className='bg-black'/>
          <label htmlFor="name">Email</label>
          <input type="text" placeholder='Enter Your Email' className='bg-black'/>
          <label htmlFor="name">Queiry</label>
          <input type="text" placeholder='Enter Your Queiry' className='bg-black'/>
          <button className='bg-black p-1 mt-2 float-right hover:bg-orange-950 rounded-md hover:p-2 duration-200 '>Submit</button>
        </form>
      </div>
    </div>
       <div className='bg-black text-center text-xs p-2'><h1>&copy; Website Maked By Hammad. <br /> All Rights Reserved</h1></div>
    </footer>
    
  );
};

export default Footer;
