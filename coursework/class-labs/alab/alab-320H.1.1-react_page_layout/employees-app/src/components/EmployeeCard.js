const EmployeeCard = ({ employee }) => {
  return (
    <div className="employee-card">
      <img src={employee.imageURL} alt={`Image of ${employee.name}`} />

      <div className="employee-details">
        <h3>{employee.name}</h3>
        <p>{employee.position}</p>
        <p>{employee.workPhone}</p>
        <p>{employee.cellPhone}</p>
        <p>{employee.sms}</p>
        <p>{employee.email}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
