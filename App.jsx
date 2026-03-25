import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// Importe o JS para o dropdown funcionar
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './App.css'
import Imagem1 from './assets/Imagem1.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="p-3 mb-3 border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="#" className="nav-link px-2 link-secondary">Overview</a></li>
              <li><a href="#" className="nav-link px-2 link-body-emphasis">Inventory</a></li>
               <li><a href="#" className="nav-link px-2 link-body-emphasis">Clientes</a></li>
              <li><a href="#" className="nav-link px-2 link-body-emphasis">Produtos</a></li>
            </ul>

            <div className="dropdown text-end">
              <a 
                href="#" 
                className="d-block link-body-emphasis text-decoration-none dropdown-toggle" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                <img 
                  src="https://github.com/mdo.png" 
                  alt="mdo" 
                  width="32" 
                  height="32" 
                  className="rounded-circle" 
                /> {/* Tag img fechada com /> */}
              </a>
              <ul className="dropdown-menu text-small">
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><hr className="dropdown-divider" /></li> {/* Tag hr fechada com /> */}
                <li><a className="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>

          </div>
        </div>
      </header>

      <div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img src={Imagem1} className="d-block mx-lg-auto img-fluid" alt="Destaque" width="700" height="500" loading="lazy" />
    </div>
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Loja de Esportes</h1>
      <p className="lead">Uma loja que tem tudo relacionado a esportes, futebol e muito mais! Aqui você encontra os melhores produtos para os seus hobbies e atividades físicas. Onde tem os melhores produtos do seu time do coração, clique aqui e faça sua compra. </p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <button type="button" className="btn btn-dark btn-lg px-4 me-md-2">Compre agora</button>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Adicione no carrinho</button>
      </div>
    </div>
  </div>
</div>  

 <div class="container py-5">
  <div class="row">

   
    <div class="col-md-4 mb-4">
      <div class="card shadow-sm">
        <svg class="card-img-top" width="100%" height="200">
          <rect width="100%" height="100%" fill="#6c757d"/>
          <text x="50%" y="50%" fill="#eceeef" dy=".3em" text-anchor="middle">
            Produto 1
          </text>
        </svg>

        <div class="card-body">
          <p class="card-text">Produto esportivo</p>
        </div>
      </div>
    </div>


    <div class="col-md-4 mb-4"><div class="card shadow-sm">
      <svg class="card-img-top" width="100%"
     height="200"><rect width="100%" height="100%" fill="#6c757d"/>
     <text x="50%" y="50%" 
    fill="#eceeef" dy=".3em" text-anchor="middle">Produto 2</text></svg>
    <div class="card-body"><p class="card-text">Produto esportivo</p>
    </div
    ></div></div>

    <div class="col-md-4 mb-4"><div class="card shadow-sm"><svg class="card-img-top" 
    width="100%" height="200"><rect width="100%" 
    height="100%" fill="#6c757d"/><text x="50%" y="50%" fill="#eceeef" 
    dy=".3em" text-anchor="middle">Produto 3</text></svg><div class="card-body">
      <p class="card-text">Produto esportivo</p></div></div></div>

<div class="col-md-4 mb-4"><div class="card shadow-sm"><svg class="card-img-top" 
    width="100%" height="200"><rect width="100%" 
    height="100%" fill="#6c757d"/><text x="50%" y="50%" fill="#eceeef" 
    dy=".3em" text-anchor="middle">Produto 4</text></svg><div class="card-body">
      <p class="card-text">Produto esportivo</p></div></div></div>

<div class="col-md-4 mb-4"><div class="card shadow-sm"><svg class="card-img-top" 
    width="100%" height="200"><rect width="100%" 
    height="100%" fill="#6c757d"/><text x="50%" y="50%" fill="#eceeef" 
    dy=".3em" text-anchor="middle">Produto 5</text></svg><div class="card-body">
      <p class="card-text">Produto esportivo</p></div></div></div>

<div class="col-md-4 mb-4"><div class="card shadow-sm"><svg class="card-img-top" 
    width="100%" height="200"><rect width="100%" 
    height="100%" fill="#6c757d"/><text x="50%" y="50%" fill="#eceeef" 
    dy=".3em" text-anchor="middle">Produto 6</text></svg><div class="card-body">
      <p class="card-text">Produto esportivo</p></div></div></div>

<div class="col-md-4 mb-4"><div class="card shadow-sm"><svg class="card-img-top" 
    width="100%" height="200"><rect width="100%" 
    height="100%" fill="#6c757d"/><text x="50%" y="50%" fill="#eceeef" 
    dy=".3em" text-anchor="middle">Produto 7</text></svg><div class="card-body">
      <p class="card-text">Produto esportivo</p></div></div></div>

<div class="col-md-4 mb-4"><div class="card shadow-sm"><svg class="card-img-top" 
    width="100%" height="200"><rect width="100%" 
    height="100%" fill="#6c757d"/><text x="50%" y="50%" fill="#eceeef" 
    dy=".3em" text-anchor="middle">Produto 8</text></svg><div class="card-body">
      <p class="card-text">Produto esportivo</p></div></div></div>

<div class="col-md-4 mb-4"><div class="card shadow-sm"><svg class="card-img-top" 
    width="100%" height="200"><rect width="100%" 
    height="100%" fill="#6c757d"/><text x="50%" y="50%" fill="#eceeef" 
    dy=".3em" text-anchor="middle">Produto 9</text></svg><div class="card-body">
      <p class="card-text">Produto esportivo</p></div></div></div>

<div class="col-md-4 mb-4"><div class="card shadow-sm"><svg class="card-img-top" 
    width="100%" height="200"><rect width="100%" 
    height="100%" fill="#6c757d"/><text x="50%" y="50%" fill="#eceeef" 
    dy=".3em" text-anchor="middle">Produto 10</text></svg><div class="card-body">
      <p class="card-text">Produto esportivo</p></div></div></div>

<div class="col-md-4 mb-4"><div class="card shadow-sm"><svg class="card-img-top" 
    width="100%" height="200"><rect width="100%" 
    height="100%" fill="#6c757d"/><text x="50%" y="50%" fill="#eceeef" 
    dy=".3em" text-anchor="middle">Produto 11</text></svg><div class="card-body">
      <p class="card-text">Produto esportivo</p></div></div></div>

<div class="col-md-4 mb-4"><div class="card shadow-sm"><svg class="card-img-top" 
    width="100%" height="200"><rect width="100%" 
    height="100%" fill="#6c757d"/><text x="50%" y="50%" fill="#eceeef" 
    dy=".3em" text-anchor="middle">Produto 12</text></svg><div class="card-body">
      <p class="card-text">Produto esportivo</p></div></div></div>



  </div>
</div>
    </>
  )
}

export default App