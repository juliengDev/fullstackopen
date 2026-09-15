function Part({ part, exercises }) {
  return (
    <p>
      {part} {exercises}
    </p>
  );
}

function Content({ part1, exercises1, part2, exercises2, part3, exercises3 }) {
  return (
    <div>
      <Part part={part1} exercises={exercises1}></Part>
      <Part part={part2} exercises={exercises2}></Part>
      <Part part={part3} exercises={exercises3}></Part>
    </div>
  );
}

export default Content;
