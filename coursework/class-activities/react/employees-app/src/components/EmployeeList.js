function EmployeeList() {
  return (
    <ul>
      {employeeData.map((employee) => {
        return <EmployeeListItem employee={employee} />;
      })}
    </ul>
  );
}

export default EmployeeList;
