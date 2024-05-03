import React, { useState } from "react";
import useFetchJSONData from "./hooks/useFetchJSONData";
import { Header, FilterBar, CardContainer, UpdateForm } from "./components";

function App() {
  const [courseType, setCourseType] = useState("");
  const { data, error, loading } = useFetchJSONData("./data/data.json");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No data found</div>;

  return (
    <>
      <Header {...data} />
      <FilterBar setCourseType={setCourseType} />
      <CardContainer data={data} courseType={courseType} />
      <UpdateForm />
    </>
  );
}

export default App;
