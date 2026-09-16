function Total({ parts }) {
  return (
    <p>
      <strong>
        total of{" "}
        {parts.reduce(function (acc, curr) {
          return acc + curr.exercises;
        }, 0)}{" "}
        exercices
      </strong>
    </p>
  );
}

export default Total;
