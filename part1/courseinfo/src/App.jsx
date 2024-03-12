import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

const course = {
  name: "Half Stack application development",
  parts: [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ],
};

const parts = course.parts;

const App = () => (
  <div>
    <Header course={course} />
    <Content parts={parts} />
    <Total parts={parts} />
  </div>
);

export default App;
