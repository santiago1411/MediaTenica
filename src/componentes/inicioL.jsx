import React from 'react';
import { Link } from 'react-router-dom';
import '../estilos/estilos.css';
import images from "../imagenes/images.png"
import { BiTime } from 'react-icons/bi';

function InicioL() {
  return (
    <div className="row">
      <div className="container" style = {{ backgroundColor: '#EBAC9F'}}>
        <div className='p-3'>
          <h1 className="encabezado text fw-bold">Continuar con mis cursos</h1>
          <div class="card">
            <div class="card-header encabezado">
              <small>Bachiller | Media Tenica TIC</small>
            </div>
            <div class="card-body">
              <h5 class="card-title encabezado">Desarrollo de software</h5>
              <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width: "30%"}}>
                  75%
                </div>
              </div>
              <p class="card-text pt-2">Avance general.</p>
              <hr/>
              <Link to="#" class="btn btn-primary">Continuar</Link>
            </div>
          </div>
        </div>
      </div>

      {/* codigo actual */}
      <div className="container mx-auto text-center">
        <h2 className="pt-3">Cursos Destacados</h2>
      </div>
      <div className="container px-5">
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              
              <div class="card">
                <img src={images} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div className="row pb-3">
                    <div className="col"><p><small><BiTime/>120 horas</small></p></div>
                    <div className="col"><p><small><BiTime/>3 modulos</small></p></div>
                    <div className="col"><p><small><BiTime/>100% online</small></p></div>
                  </div>
                  <Link href="#" class="btn btn-primary">Go somewhere</Link>
                </div>
              </div>
            
            </div>
            <div class="carousel-item">
              <div class="card">
                <img src={images} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div className="row pb-3">
                    <div className="col"><p><small><BiTime/>120 horas</small></p></div>
                    <div className="col"><p><small><BiTime/>3 modulos</small></p></div>
                    <div className="col"><p><small><BiTime/>100% online</small></p></div>
                  </div>
                  <Link href="#" class="btn btn-primary">Go somewhere</Link>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card">
                <img src={images} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div className="row pb-3">
                    <div className="col"><p><small><BiTime/> 120 horas</small></p></div>
                    <div className="col"><p><small><BiTime/> 3 modulos</small></p></div>
                    <div className="col"><p><small><BiTime/> 100% online</small></p></div>
                  </div>
                  <Link href="#" class="btn btn-primary">Go somewhere</Link>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>        
      </div>

      <div className="container mx-auto text-center">
        <h2 className="pt-3">Cursos Destacados</h2>
      </div>
      
      <div className="container px-5">
        <div id="carouselExampleAutoplaying2" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              
              <div class="card">
                <img src={images} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div className="row pb-3">
                    <div className="col"><p><small><BiTime/>120 horas</small></p></div>
                    <div className="col"><p><small><BiTime/>3 modulos</small></p></div>
                    <div className="col"><p><small><BiTime/>100% online</small></p></div>
                  </div>
                  <Link href="#" class="btn btn-primary">Go somewhere</Link>
                </div>
              </div>
            
            </div>
            <div class="carousel-item">
              <div class="card">
                <img src={images} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div className="row pb-3">
                    <div className="col"><p><small><BiTime/>120 horas</small></p></div>
                    <div className="col"><p><small><BiTime/>3 modulos</small></p></div>
                    <div className="col"><p><small><BiTime/>100% online</small></p></div>
                  </div>
                  <Link href="#" class="btn btn-primary">Go somewhere</Link>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card">
                <img src={images} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div className="row pb-3">
                    <div className="col"><p><small><BiTime/> 120 horas</small></p></div>
                    <div className="col"><p><small><BiTime/> 3 modulos</small></p></div>
                    <div className="col"><p><small><BiTime/> 100% online</small></p></div>
                  </div>
                  <Link href="#" class="btn btn-primary">Go somewhere</Link>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>        
      </div>
      
    </div>
  );
}

export default InicioL;