import React from "react"

const Navbar = () => {
    return (
        <nav class="navbar nav navbar-expand-lg navbar-light ">
            <a class="navbar-brand" href="#">Welcome User</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                <a class="nav-link" href="#">Settings<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                <a class="nav-link" href="#">Logout</a>
                </li>
                
            </ul>
            </div>
      </nav>
    )
}

export default Navbar