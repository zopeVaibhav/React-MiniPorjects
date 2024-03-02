import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
    let course = props.course;
    let likedCourse = props.likedCourse;
    let setLikedCourses = props.setLikedCourses;

    const clickHandler = () =>{
        if(likedCourse.includes(course.id)){
            // pehele se liked he to unlike karna he
            setLikedCourses((prev) => prev.filter(cid => (cid !== course.id)));
            toast.warning("Liked removed");
        }else{
            // agar unliked ho
            // if the size of liked array is 0
            if(likedCourse.length === 0){
                setLikedCourses([course.id]);
            }
            else{
            // if nonempty then pass the prev + current course id
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully")
        }
    }

  return (
    <div className="bg-bgDark bg-opacity-80 w-[300px] rounded-sm overflow-hidden">
      <div className="relative">
        <img src={course.image.url} alt={course.title} />
        <div className="absolute w-[40px] h-[40px] right-3 -bottom-3 bg-white rounded-full grid place-items-center">
          <button className="absolute" onClick={clickHandler}>
            {
                likedCourse.includes(course.id)? (
                    <FcLike fontSize= "1.75rem" />
                ) : (
                    <FcLikePlaceholder fontSize="1.75rem" />
                )
            }
          </button>
        </div>
      </div>
      <div className="p-4 text-white">
        <p className="font-semibold leading-6 text-lg"> {course.title} </p>
        <p className="mt-2"> 
            {
                (course.description.length > 100)? (
                    course.description.substr(0, 100) + '...'
                ):(
                    course.description
                )
            }
        </p>
      </div>
    </div>
  );
};

export default Card;
