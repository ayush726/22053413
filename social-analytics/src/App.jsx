import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import TopUsers from "./pages/TopUsers";
import TrendingPosts from "./pages/TrendingPosts";

function App() {
  return (
    <div className="container mx-auto p-4">
      <nav className="flex space-x-4 border-b pb-2">
        <Link to="/" className="text-blue-500">Home</Link>
        <Link to="/top-users" className="text-blue-500">Top Users</Link>
        <Link to="/trending-posts" className="text-blue-500">Trending Posts</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-users" element={<TopUsers />} />
        <Route path="/trending-posts" element={<TrendingPosts />} />
      </Routes>
    </div>
  );
}

export default App;
