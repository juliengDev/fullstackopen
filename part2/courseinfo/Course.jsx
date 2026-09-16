import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

function Course({ courses }) {
  console.log(courses);
  return (
    <>
      <Header />
      {courses.map((course) => (
        <div key={course.id}>
          <h2>{course.name}</h2>
          <Content course={course} />
          <Total parts={course.parts} />
        </div>
      ))}
    </>
  );
}

export default Course;
