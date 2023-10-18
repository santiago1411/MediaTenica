import React from "react";
import { RiGlobalFill } from 'react-icons/ri';
import { BsGithub } from 'react-icons/bs';
import { IoLogoTwitter } from 'react-icons/io';
import { BsInstagram }  from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';

function Profile() {
  return (
    <section style = {{backgroundColor:"#eee"}}>
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{width:"150px"}} />
                <h5 className="my-3">Santiago Osorno</h5>
                <p className="text-muted mb-1">Desarrollador de software</p>
                <p className="text-muted mb-4">Medellin-Colombia</p>
                <div className="d-flex justify-content-center mb-3">
                  <button type="button" className="btn btn-primary">Editar Perfil</button>
                </div>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <RiGlobalFill/>
                    <p className="mb-0">@s_osorno_s</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <BsGithub/>
                    <p className="mb-0">@santiago1411</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <IoLogoTwitter/>
                    <p className="mb-0">Facebook</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <BsInstagram/>
                    <p className="mb-0">Instagram</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <BsFacebook/>
                    <p className="mb-0">Pagina Personal</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                
                <div className="row">
                  <div className="col-sm-3">
                    <p className= "mb-0">Nombre completo</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-o">Santiago Osorno</p>
                  </div>
                </div>
                <hr/>

                <div className="row">
                  <div className="col-sm-3">
                    <p className= "mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-o">santy.osorno2@gmail.com</p>
                  </div>
                </div>
                <hr/>

                <div className="row">
                  <div className="col-sm-3">
                    <p className= "mb-0">Numero</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-o">3207231996</p>
                  </div>
                </div>
                <hr/>

                <div className="row">
                  <div className="col-sm-3">
                    <p className= "mb-0">Direccion</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-o">calle 99 #57a</p>
                  </div>
                </div>
                <hr/>

                <div className="row">
                  <div className="col-sm-3">
                    <p className= "mb-0">Fecha de nacimiento</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-o">14 nov 2001</p>
                  </div>
                </div>  
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-4 mb-md-0">
                  <div className="card-body">
                    <p className="mb-4"><span className="text-primary font-italic me-1">Habilidades</span> Proyecto PPI</p>
                    
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;