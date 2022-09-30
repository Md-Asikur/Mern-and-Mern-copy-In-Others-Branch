import React from 'react'

const Contact = () => {
  return (
    <div>

       <form method="POST" action="/">
        <h2>Contact Now</h2>
        Name:<input type="text" name="name"  autoComplete="off"/><br/><br/>
        Email:<input type="email" name="email"  autoComplete="off"/><br/><br/>
        Phone:<input type="number" name="phone" autoComplete="off" /><br/><br/>
        Message:<br/>
       <textarea rows="5" cols="30" placeholder="Enter your comment"></textarea><br/><br/>
        <button type="submit">Send Message</button>
     </form>
    </div>
  )
}

export default Contact