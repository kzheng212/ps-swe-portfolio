function Score({ report }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Student ID</th>
          <th>Date</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {report.map((test, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{test.date}</td>
            <td>{test.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Score;
