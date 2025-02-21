import './Props.css'
const CourseCard = ({course_img, text1, course_name, course_duration, take_courseBtn }) => {
  return (
    <>
        <div class="card card_col">
            <img src={course_img} class="card-img-top" alt="..."/>
        <div class="card-body">
            <p>{text1}</p>
            <h4 class="card-title">{course_name}</h4>
            <p class="card-text">{course_duration}</p>
            <a href="#" class="btn w-100 text-white">{take_courseBtn}</a>
        </div>
        </div>
    </>
  )
}

export default CourseCard;