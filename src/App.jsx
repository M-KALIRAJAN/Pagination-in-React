import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [data , setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentpage ,setCurrentpage] = useState(1);
  const [postperPage,setPostperpage] = useState(10);
  const [search,setSearch] = useState("");

  useEffect(()=>{
    const fetchdata = async () => {
      try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setData(res.data);
        setLoading(false);
      }catch(err){
        console.log(err);
      }
    }
    fetchdata()
  },[])

  // Filter the data based on search input
  const filteredData = data.filter(post => 
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastPost = currentpage * postperPage;
  const indexofFirstPost = indexOfLastPost - postperPage;
  const currentpost = filteredData.slice(indexofFirstPost,indexOfLastPost);
  const totalPage = Math.ceil(filteredData.length / postperPage);  

  const paginate = (page) => setCurrentpage(page);

  if(loading) return <h2>Loading....</h2>

  const maxPagesToShow = 5;
  const startPage = Math.floor((currentpage - 1) / maxPagesToShow) * maxPagesToShow + 1;
  const endPage = Math.min(startPage + maxPagesToShow - 1, totalPage);

  return (
    <div> 
      <input 
        type='search' 
        placeholder='Search by title...' 
        value={search} 
        onChange={(e)=>setSearch(e.target.value)}
      />
     {currentpost.length > 0 ? (
 <ul style={{listStyle:"none"}}>
 {
   currentpost.map((item,index)=>{
     return <li key={index}>
       {item.id} {item.title}
     </li>
   })
 }
</ul>
     ) : (
      <h1> no list fount</h1>
     )} 
     

      <div>
        <button onClick={()=>paginate(1)}>First</button>
        <button 
          disabled={currentpage === 1}
          onClick={()=>paginate(currentpage-1)}>Previous</button>

        {
          Array.from({ length: endPage - startPage + 1 }).map((_, i) => (
            <h 
              key={i} 
              style={{padding:"10px" , backgroundColor : currentpage === startPage + i ?"#007bff": "transparent" ,cursor:"pointer"}} 
              onClick={()=>paginate(startPage + i)}>
              {startPage + i}
            </h>
          ))
        }

        <button 
          disabled={currentpage === totalPage}
          onClick={()=>paginate(currentpage +1)}>Next</button>
        <button onClick={()=>paginate(totalPage)}>Last</button>
      </div>
    </div>
  )
}

export default App
