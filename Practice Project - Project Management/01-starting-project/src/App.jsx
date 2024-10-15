import SideBar from "./components/SideBar";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";

function App() {
  return (
      <main className="h-screen my-8 flex gap-8">
        <SideBar />
          <NoProjectSelected />
      </main>
  );
}

export default App;
