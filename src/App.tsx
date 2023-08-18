import React from 'react';
import './App.css';

function App() {
  // api key: 30c5cfc9337e096fe62245c20e7bbe6a
  return (
    <main className="
      flex justify-center items-center bg-gradient-to-br
      from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
      <section className="
        w-full md:max-w-[800px] p-4 
        flex flex-col text-center 
        items-center justify-center 
        md:px-10 lg:p-24 h-full lg:h-[500px]
        bg-white bg-opacity-20 
        backdrop-blur-lg drop-shadow-lg 
        rounded text-zinc-700
        ">
          <h1 className="text-4xl font-thin">Weather <span className="font-black">forecast</span></h1>
          <p className="text-sm mt-2  ">Enter below a place you want to know the weather of. 
            Select an option from the dropdown menu.
          </p>
          <div className="flex mt-8 md:mt-3">
            <input 
              type="text" 
              value={''} 
              className="px-2 py-1 rounded-l-md border-white outline-0" 
            />
            <button
              className="rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500 text-zinc-100 px-2 py cursor-pointer" 
            >Search</button>
          </div>
      </section>
    </main>
  );
}

export default App;
