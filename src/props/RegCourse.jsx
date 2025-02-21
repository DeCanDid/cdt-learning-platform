import { useState } from "react";
import CourseCard from "./CourseCard";

const RegCourse = () => {
    const [isRegCourse, setisRegCourse] = useState(true);
  return (
    <>
    {
        isRegCourse ? (
            <CourseCard course_img={require('../IMAGES/uiux.png')} text1={'DESIGN'} course_name={'UIUX Deisgn for Beginners'} course_duration={'20 Lessons  28 Hours'} take_courseBtn={'Take this Course'}/>
        ) : (
            <div className="text-center w-50 mx-auto my-5">
            <h2>OOPS!</h2>
            <h1>Kindly, enrol for your reffered course below</h1>
        </div>
        )
    }
        

        
    </>
  )
}

export default RegCourse;