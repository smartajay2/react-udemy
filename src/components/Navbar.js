// <!-- Navbar -->
function Navbar(){
  return(
    
  
  <div class=" navbar">

    <div class="navbar__s1">
      <h1 class="navbar__s1__Title">Udemy</h1>
    </div>

    <div class="navbar__s2">
      <i class="fa-solid fa-magnifying-glass" style={{color: '#000000'}}></i>
      <input class="navbar__s2__input" placeholder="search for anything here Bussiness or Art"></input>
    </div>

    <div class="navbar__s3">
      <p class="navbar__s3__Title">Courses</p>
      <p>My Learning</p>
      <div class="mylearning">
        <p>My Learning</p>
        <div class="mylearning__popup">  
        <p>You did not purchase anything</p>
        </div>
      </div>
      <i class="fa-solid fa-cart-shopping" style={{color: '#000000'}}></i>
      <i class="fa-solid fa-bell" style={{color: '#000000'}}></i>
      <i class="fa-solid fa-user" style={{color: '#000000'}}></i>

    </div>
    <div class="navbar__s4">
      <i class="fa-solid fa-bars" style={{color: '#000000'}}></i>
      </div>
  </div>
  )
}

export default Navbar