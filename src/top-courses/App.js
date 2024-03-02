import NavBar from "./components/NavBar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Spinner from "./components/Spinner";
import { useState, useEffect } from "react";
import { filterData, apiUrl } from "./data";
import { toast } from "react-toastify";

const App = () => {
  const [apiData, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      setCourse(output.data);
    } catch (error) {
      toast.error("Something Went Wrong");
    }
    setLoading(false);  
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#4a4e69]">
      <div>
        <NavBar />
      </div>

      <div>
        <Filter filterData={filterData} category = {category} setCategory = {setCategory} />
      </div>

      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]"> 
        {loading ? <Spinner /> : <Cards courses={apiData} category={category} />} 
        {/* <Cards courses={apiData}/> */}
      </div>
    </div>
  );
};

export default App;
