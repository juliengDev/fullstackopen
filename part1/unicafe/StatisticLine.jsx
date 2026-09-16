function StatisticLine({ text, value }) {
  if (text === "positive") {
    return (
      <tr>
        <td scope="col" align="left">
          {text}
        </td>
        <td scope="col" align="left">
          {value}%
        </td>
      </tr>
    );
  }
  return (
    <tr>
      <td scope="col" align="left">
        {text}
      </td>
      <td scope="col" align="left">
        {value}
      </td>
    </tr>
  );
}

export default StatisticLine;
