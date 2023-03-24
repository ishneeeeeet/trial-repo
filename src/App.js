
import './App.css';
import ShareExperience from './pages/shareExperience';
import Navbar from './navbar';
import Footer from './pages/shared/Footer'
import LatestExperience from './pages/latestExperience';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import SearchProgram from './pages/searchProgram';




const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchProgram />,
  },
  {
    path: "/latestexperience",
    element: <LatestExperience />,
  },
  {
    path: "/shareexperience",
    element: <ShareExperience />,
  },
]);

function App() {
  return (
    <div className="App h-full overflow-auto">
      <div >
        <Navbar />
        <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
