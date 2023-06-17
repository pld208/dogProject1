import React, {useState, useEffect} from 'react';

const Home = () => {
  const [dogs, fetchDogs] = useState([]);

  useEffect(() => {
    const getData = async() => {
      try {
        const res = await fetch('https://api.thedogapi.com/v1/breeds');

        const data = await res.json();
        fetchDogs(data);
        //console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  return (
    <>
    {!dogs ? (<h1 className="flex items-center justify-center text-gray-300 text-center px-5 text-3xl">Loading...</h1> ) : (
      <>
        <section>{dogs.length} Pup breeds! </section>
      </>
    )}
    </>

  )
};



export default Home;