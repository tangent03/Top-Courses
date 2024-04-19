import React from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter"
import Cards from "./components/Cards";
import { useState , useEffect } from "react";
import Spinner from "./components/Spinner";

import {toast} from "react-toastify";

const App = () => {

    const [courses, setCourses] = useState(null);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState(filterData[0].title);

      async function fetchData() {
        setLoading(true);
      try{
        let response = await fetch(apiUrl);
        let output = await response.json();

        setCourses(output.data);
      }
      catch(error){
        toast.error("Network me koi dikkat hai");
      }
      setLoading(false);
    }

    useEffect( () => {
      fetchData();
    },[])




  return(
    <div className="min-h-screen flex flex-col bg-bgDark2">

      <div>
        <Navbar/>

      </div>

      <div className="bg-bgDark2">

          <div>
            <Filter filterData={filterData}
            category={category}
            setCategory={setCategory}
            />
          </div>

          <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
            {
              loading ? (<Spinner/>) : (<Cards courses={courses} category={category }/>)
            }
          </div>
      

      </div>
      

    </div>
  );
};

export default App;









/*
This is the mini project made from CodeHelp

i have made this for learing purposes

and the Learing from this Project is
1.How to use API
2.How to use react-toastify
3.How to filter data 
4.How to send and Receive Props 
5. How to add Favicon and Change the Title


*/