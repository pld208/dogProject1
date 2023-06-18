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
    {!dogs ? (<h1 className="flex items-center justify-center text-gray-300 text-center px-5 text-3xl h-screen">Loading...</h1> ) : (
      <>
        <section className="p-8 max-w-6xl mx-auto">
          <div className="text-center backdrop-blur-sm bg-white/50 border border-orange-800">
          <h1 className="flex items-center justify-center text-orange-950 text-center px-5 text-5xl font-bold lg:text=5xl pt-6">Search Dogs
          </h1>
          <img class="object-top mx-auto px-5 pt-4 " src="./searchDogsLogo.png" alt="Dog logo" width="200" height="300"></img>
          <p className="my-7">Search Dogs powered by <a href="https://thedogapi.com" className="text-indigo-500 underline active:text-orange-950">The Dog API</a></p>
          <form className=" mx-auto px-5 pb-8" autoComplete="off">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search for a dog breed..."
              className="bg-white/50 py-2 px-5 rounded shadow-md w-full pt-3 placeholder-black"
              />
          </form>
          </div>
          <div>
          </div>
        </section>
      </>
    )}
    </>

  )
};



export default Home;