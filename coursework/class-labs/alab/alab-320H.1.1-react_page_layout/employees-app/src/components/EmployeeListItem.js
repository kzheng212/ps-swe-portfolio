function EmployeeListItem({ employee }) {
  return (
    <li className="employee-list-item">
      <img src={employee.imageUrl} alt={`Image of ${employee.name}`} />

      <div className="employee-details">
        <h3>{employee.name}</h3>
        <p>{employee.position}</p>
      </div>
    </li>
  );
}

export default EmployeeListItem;
