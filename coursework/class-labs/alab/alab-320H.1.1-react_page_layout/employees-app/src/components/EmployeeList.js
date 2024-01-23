import employeeData from "../../json/employees.json";
import EmployeeListItem from "./EmployeeListItem";

function EmployeeList() {
  return (
    <ul>
      {employeeData.map((employee) => {
        <EmployeeListItem key={employee.id} employee={employee} />;
      })}
    </ul>
  );
}

export default EmployeeList;
