import Main from "./pages/Main";
import Header from "./components/Header";
import axios from "axios"
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([])
const BASE_URL = "https://63f72ba9e8a73b486af1ef5f.mockapi.io/api/checkout"
const getData = async () => {
  try {
   const { data } = await axios(BASE_URL)
   setData(data)
  
}catch (error) {
  console.log(error)
}
}
console.log(data)
useEffect(() => {
  getData()
}, [])

  return (
    <>
      <Header getData={getData}/>
      <Main data={data} getData={getData}/>
    </>
  );
}

export default App;
