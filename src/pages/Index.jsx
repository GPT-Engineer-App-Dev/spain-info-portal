import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to Spain Explorer</h1>
      <p className="mb-8">Discover the beauty, culture, and cuisine of Spain.</p>
      <nav className="space-x-4">
        <Link to="/introduction" className="text-blue-500 hover:underline">Introduction</Link>
        <Link to="/culture" className="text-blue-500 hover:underline">Culture</Link>
        <Link to="/tourist-attractions" className="text-blue-500 hover:underline">Tourist Attractions</Link>
        <Link to="/cuisine" className="text-blue-500 hover:underline">Cuisine</Link>
      </nav>
    </div>
  );
};

export default Index;
