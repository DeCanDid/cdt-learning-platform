import CourseCard from "./CourseCard";
import "./Props.css";

const Card = () => {
  return (
    <>
      <div className="courses_wrapper">
        <CourseCard
          course_img={require("../IMAGES/uiux.png")}
          text1={"DESIGN"}
          course_name={"UIUX Deisgn for Beginners"}
          course_duration={"20 Lessons  28 Hours"}
          take_courseBtn={"Take this Course"}
        />

        <CourseCard
          course_img={require("../IMAGES/fullStack.png")}
          text1={"CODE"}
          course_name={"Full-Stack Development"}
          course_duration={"30 Lessons  52 Hours"}
          take_courseBtn={"Take this Course"}
        />

        <CourseCard
          course_img={require("../IMAGES/python.png")}
          text1={"CODE"}
          course_name={"Python Programming"}
          course_duration={"20 Lessons  48 Hours"}
          take_courseBtn={"Take this Course"}
        />

        <CourseCard
          course_img={require("../IMAGES/graphics.png")}
          text1={"DESIGN"}
          course_name={"Graphics Design"}
          course_duration={"20 Lessons  48 Hours"}
          take_courseBtn={"Take this Course"}
        />
      </div>
    </>
  );
};

export default Card;
