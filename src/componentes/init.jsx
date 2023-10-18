import React from "react";
import { Link } from "react-router-dom";
import portada from "../imagenes/portada.png";


function Init() {
  return (
    <div className="container">
      <div className="row">
        
        <img src={portada} alt="logo" className="mx-auto" style={{ maxWidth: "500px" }}/>

        <div className="container">
          <div className="mx-auto">
            <div class="card">
              <div class="card-header">
                Featured
              </div>
              
              <div class="card-body">
                <form action="/HomeL" method="get">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                  </div>
                  <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );

}
        
export default Init;