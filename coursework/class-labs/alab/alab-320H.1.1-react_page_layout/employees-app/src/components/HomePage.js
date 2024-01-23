import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";

function HomePage() {
  return (
    <div>
      <Header />
      <SearchBar />
      <EmployeeList />
    </div>
  );
}

export default HomePage;
