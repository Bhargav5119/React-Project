import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import TaskMenu from "./components/My Tasks/TaskMenu";
import TeamMember from "./components/Team Member/TeamMember";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route  path="/" element={<TaskMenu />} />
        <Route  path="team-member" element={<TeamMember />} />
      </Routes>

    </>

  );
}

export default App;
