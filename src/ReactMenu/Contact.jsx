import React from 'react'

const Contact = () => {
    return (
       <>
       <form className="container-fluid col-5 mx-auto pt-5">
  <div className="form-group pt-2">
    <label for="exampleInputEmail1">Name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div className="form-group pt-2">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div className="form-group pt-2">
    <label for="exampleInputEmail1">Phone Number</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div class="form-group pt-2">
    <label for="exampleFormControlTextarea1">Textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div className="pt-5 col-3 mx-auto">
  <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>
       </>
    )
}

export default Contact