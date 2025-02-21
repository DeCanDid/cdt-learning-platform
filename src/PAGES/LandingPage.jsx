import './Style.css';
import TestimonialCard from '../props/TestimonialCard';

const LandingPage = () => {
  return (
    <>
      <main>

        <section className="section_one my-5">

          <div>

            <div>
              <h2>Exclusive Summer Coding And Fun 2025</h2>
              <h6>Give your child the opportunity to explore tech with fun</h6>
              <p>
                Our summer coding and fun program is designed to teach kids how
                to create real-world projects that they can be proud of. Your
                child will learn Web Development, Game Development, App
                Development, Graphics Design, 3D Printing, Robotics and Design
                projects that they can show off to friends and families
              </p>
            </div>

            <div>
              <img src={require('../IMAGES/girl_img.png')} alt="" />
            </div>

          </div>
        </section>

        <section className="section_two">
            <h2 className='text-center'>Who we are</h2>

            <div>
                <div>
                    <img src={require('../IMAGES/Mask_group.png')} alt="" />
                </div>

                <div>
                    <div>
                        <p>If you are looking for an ICT training center, computer programming
                        and coding academy in Lagos Nigeria, that will give you:-</p>
                    </div>

                    <div className='my-5'>
                        <p>1. Practical hands- on training</p>
                        <p>2. Prepare you for the job market, and</p>
                        <p>3. Make sure you learn before you graduate, then you are in the right ICT training center, computer programming and coding academy in Ikorodu Lagos Nigeria</p>
                    </div>

                    <p>Creative digita technologies provides quality and practical ICT, programming, and coding training in Lagos that is second to none.</p>

                    <div className='learn_more'>
                        <button>
                            <a href="">Learn More </a>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <section className='section_three'>

            <div>

            <aside>
                <h2>Testimonials</h2>
                <h6>Review From Our Happy Learners</h6>
            </aside>

            <div>
                <TestimonialCard img={require('../IMAGES/man.PNG')} name={'David Mark'} role={'Tertiary Student'} message={'I was intimidated by UI/UX at first, but the instructor at Creative Digita Technologies have been so susmallportive and patient that I now feel confident in my abilities. I appreciate the focus on hands-on learning and the opportunity to work on real- world projects. I am grateful for this education and can\'t wait to see where it takes me.'}/>

                <TestimonialCard img={require('../IMAGES/man.PNG')} name={'Olayinka'} role={'Business Developer'} message={'I have always had a passion for technology, but Creative Digita Technologies has helped me take my skills to the next level. The hands-on approach to learning has been instrumental in my growth as a coder and I am excited to see where this education will take me in the future.'}/>

                <TestimonialCard img={require('../IMAGES/man.PNG')} name={'Habeeb Sulaimon'} role={'Tertiary Student'} message={'Before enrolling in Creative Digita Technologies, I had no prior experience in coding. However, the classes have been so engaging, informative, and the Instructor is so supportive that I am now able to code with confidence. I am grateful for this opportunity to learn and grow my skills.work on real- world projects. I am grateful for this education and can\'t wait to see where it takes me.'}/>
            </div>

            <aside>
                <button>
                    <a href="">View All Testimonials</a>
                </button>
            </aside>

            </div>

        </section>

        <section className="section_two">
            <h2 className='text-center'>Who we are</h2>

            <div>
                <div>
                    <img src={require('../IMAGES/Mask_group.png')} alt="" />
                </div>

                <div>
                    <div>
                        <p>If you are looking for an ICT training center, computer programming
                        and coding academy in Lagos Nigeria, that will give you:-</p>
                    </div>

                    <div className='my-5'>
                        <p>1. Practical hands- on training</p>
                        <p>2. Prepare you for the job market, and</p>
                        <p>3. Make sure you learn before you graduate, then you are in the right ICT training center, computer programming and coding academy in Ikorodu Lagos Nigeria</p>
                    </div>

                    <p>Creative digita technologies provides quality and practical ICT, programming, and coding training in Lagos that is second to none.</p>

                    <div className='learn_more'>
                        <button>
                            <a href="">Learn More </a>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <section className='section_four'>
            <div>
            <div>
                <h1>The future Of Creative Tech Gurus is shape here</h1>
            </div>

            <div>
                <button>
                    <a href="#">Discover Courses</a>
                </button>

                <button>
                    <a href="#">Learn More</a>
                </button>
            </div>
            </div>
        </section>

      </main>
    </>
  );
};

export default LandingPage;
