import React, { Component } from "react";

class Reservation extends Component{


    render(){
      return (
      <div className="container">
        <h3>Make A Reservation</h3>
        <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label for="tableSize">Table Size</label>
          <select className="form-control" id="tableSize">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </div>
        <div className="form-group">
          <label for="date">Reservation Date</label>
          <input className="form-control" id="date" type="date"/>
        </div>
        <div className="form-group">
          <label for="time">Reservation Time</label>
          <input className="form-control" id="time" type="text"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>)
    }
  
}

export default Reservation;