import './Header.css';

const Header = () => {
  return (
      <>
      
      <header className='shadow'>
            <figure>
                <img src={require('../IMAGES/cdt_logo.png')} alt="" />
            </figure>

            <nav>
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Courses</a>
                <a href="">Testimonials</a>
                <a href="">Continue Learning</a>
                <button><a href="">Get Started</a></button>
            </nav>
        </header>
      </>
  )
}

export default Header;