import { useContext } from "react";
import HeaderDashboard from "../../components/headerDashboard";
import { AuthContext } from "../../context";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <HeaderDashboard />
      <h1>dashboard</h1>
    </div>
  );
};

export default Dashboard;
