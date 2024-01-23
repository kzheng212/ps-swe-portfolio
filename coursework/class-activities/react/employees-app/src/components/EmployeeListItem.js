function EmployeeListItem({ employee }) {
  return (
    <li>
      <h3>{employee.name}</h3>
      <img src={employee.imageUrl} />
      <p>{employee.altText}</p>
    </li>
  );
}

export default EmployeeListItem;
