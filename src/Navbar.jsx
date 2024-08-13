import { Link } from "react-router-dom"

function Navbar() {



  return (

    <>
      <section className="container-fluid2">
        <div className="row justify-content-around">
          <div className="col-md-5 text-center">
            <h1 className="title">VEG FOODS</h1>
          </div>


          <div className="col-md-6 text-center">

            <nav class="navbar navbar-expand-lg bg-warning ">
              <div class="container-fluid2">
                <a class="navbar-brand" href="#"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul class="navbar-nav">
                    <li class="nav-item g-4">
                      <Link to={"/"} ><a class="nav-link active" aria-current="page" href="#">Home</a></Link>
                    </li>
                    <li class="nav-item">
                      <Link to={"/Vegtable"}>
                        <a class="nav-link active" aria-current="page" href="#">
                          <button ><i class="bi bi-bag-fill">Shopping Items</i></button>
                        </a>
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to={"/NextPage"}><a class="nav-link active" aria-current="page" href="#">History</a></Link>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown link
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>


          </div>
        </div>

      </section>
    </>
  )


}

export default Navbar