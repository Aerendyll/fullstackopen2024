import React from "react";

const Courses = ({ courses }) => {
  // console.log(courses[0].parts[0].name);
  //reduce() try 
  const allSum = courses
  .map(course => course.parts.reduce((sum, part) => sum + part.exercises, 0))
  .reduce((totalSum, courseSum) => totalSum + courseSum, 0);

  
  return (
    <div>
      <h1>Web development curriculum </h1>
      {courses.map((course) => (
        <div key={course.id}>
          <h2>{course.name}</h2>
          {course.parts.map((part) => (
            <p key={part.id}>
              {part.name} {part.exercises}
            </p>
          ))}
        </div>
      ))}
      <p>{allSum}</p>
    </div>
  );
};

export default Courses;

// import React from "react";

// export const Courses = ({ courses }) => {
//  const totalEj = course.parts.reduce((sum, part) => sum + part.exercises , 0)
//   return (
//     <div>
//       <h1>{courses.name}</h1>
//       {courses.parts.map((part) => (
//         <p key={part.id}>
//           {part.name} {part.exercises}
//         </p>
//       ))}
//       <p>total of {totalEj} exercises</p>
//     </div>
//   );
// };

// export default Courses;
