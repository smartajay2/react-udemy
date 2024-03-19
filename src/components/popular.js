//popular section
import c1 from '../assets/c1.jpg'
import c2 from '../assets/c2.jpg'
import c3 from '../assets/c3.jpg'
import c4 from '../assets/c4.jpg'
function Popular(){
  return(
 
  <div class="popular">
    <h1 class="polular__title">Most popular</h1>
    <p class="popular__subtitle">Pick the best fit</p>
    <div class="popular__container">


      <div class="course-card">
        <img src={c1} class="course-card__image" alt=''></img>
        <h3>2023 Python Data visualization</h3>
        <p>Col Steela</p>
        <p>4.9⭐⭐⭐⭐⭐</p>
        <p>499&nbsp;<del>1999</del></p>
      </div>

      <div class="course-card">
        <img src={c2} class="course-card__image" alt=''></img>
        <h3>Basic to Advance Programming with EMC</h3>
        <p>Col Steela</p>
        <p>3.9⭐⭐⭐⭐</p>
        <p>399&nbsp;<del>1999</del></p>
      </div>

      <div class="course-card">
        <img src={c3} class="course-card__image" alt=''></img>
        <h3>web Development Bootcamp 2023</h3>
        <p>Col Steela</p>
        <p>4.9⭐⭐⭐</p>
        <p>299&nbsp;<del>1999</del></p>
      </div>

      <div class="course-card">
        <img src={c4} class="course-card__image" alt=''></img>
        <h3>Master UI/UX Figma</h3>
        <p>Col Steela</p>
        <p>4.9⭐⭐⭐⭐⭐</p>
        <p>499&nbsp;<del>1999</del></p>
      </div>
      <div class="course-card">
      <img src={c1} class="course-card__image" alt=''></img>
        <h3>2023 Python Data visualization</h3>
        <p>Col Steela</p>
        <p>4.9⭐⭐⭐⭐⭐</p>
        <p>499&nbsp;<del>1999</del></p>
      </div>
      <div class="course-card">
      <img src={c2} class="course-card__image" alt=''></img>
        <h3>Basic to Advance Programming with EMC</h3>
        <p>Col Steela</p>
        <p>3.9⭐⭐⭐⭐</p>
        <p>399&nbsp;<del>1999</del></p>
      </div>

      <div class="course-card">
      <img src={c3} class="course-card__image" alt=''></img>
        <h3>web Development Bootcamp 2023</h3>
        <p>Col Steela</p>
        <p>4.9⭐⭐⭐</p>
        <p>299&nbsp;<del>1999</del></p>
      </div>

      <div class="course-card">
      <img src={c4} class="course-card__image" alt=''></img>
        <h3>Master UI/UX Figma</h3>
        <p>Col Steela</p>
        <p>4.9⭐⭐⭐⭐⭐</p>
        <p>499&nbsp;<del>1999</del></p>


      </div>
    </div>
  </div>
  )
}

export default Popular
