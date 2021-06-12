import React, { useEffect, useState } from "react";
import AppCard from "../../components/AppCard";

import Header from '../../components/Header/Index'
import LeftSideSideNav from '../../components/SideNav/index'


export default function Home() {

  const [data, setData] = useState([])
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);


  //1. cuando ya se renderiza se hace la peticion al servidor
  useEffect( () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then( (response) => response.json())
      .then((json) => {
        setData(json.results);
        setPrev(json.info.prev);
        setNext(json.info.next)
      });
  },[])

  
  const getPrevPage = () => {
    fetch(prev)
      .then((response) => response.json())
      .then((json) => {
        setData(json.results);
        setPrev(json.info.prev);
        setNext(json.info.next);
      });
  };

  const getNextPage = () => {
    console.log('onIncrease si esta funcionando')
    fetch(next)
      .then((response) => response.json())
      .then((json) => {
        setData(json.results);
        setPrev(json.info.prev);
        setNext(json.info.next);
      });
  };

  

  return (
    <React.Fragment>
    
      <Header />

      <div className="container-fluid">
        <div className="row">
        <LeftSideSideNav />
        <AppCard 
          data={data? data : []}
          prev={prev? prev: null}
          next={next? next: null}
          onDecrease={() => getPrevPage}
          onIncrease={() => getNextPage}

        />
        </div>
      </div>
      
     
    </React.Fragment>
  );
}

