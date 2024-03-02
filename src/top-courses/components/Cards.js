import { useState } from "react";
import Card from "./Card";
const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;
  let allCourse = [];
  const [likeCourse, setLikeCourses] = useState([]);

  const getCourses = () => {
    if (category === "All") {
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((data) => {
          allCourse.push(data);
        });
      });
      return allCourse;
    }else{
        // show only specific catergory ka array send karung
        return courses[category];
    }
  };

  return (
    <div className="flex flex-wrap gap-3 item-center justify-center">
      {getCourses().map((course) => {
        return (
          <Card
            key={course.id}
            course={course}
            likedCourse={likeCourse}
            setLikedCourses={setLikeCourses}
          ></Card>
        );
      })}
      {/* {courses ? (
        getCourses().map((course) => {
          return <Card key={course.id} course={course}></Card>;
        })
      ) : (
        <Spinner />
      )} */}
    </div>
  );
};

export default Cards;
