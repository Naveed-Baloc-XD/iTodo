import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="w-[320px] sm:w-[600px] container h-auto">
      <Navbar />
      <Outlet />
    </main>
  );
}

export default App;
