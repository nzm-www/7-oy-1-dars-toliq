import React, { useEffect, useState } from "react";
import Header from "../components/Header";
function Home() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);

  useEffect(
    function () {
      fetch(
        `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`
      )
        .then((res) => res.json())
        .then((d) => {
          setData([...data, ...d]);
        })
        .then((err) => {
          console.log(err);
        });
    },
    [page]
  );

  function handleScroll(event) {
    const scrollHeight = event.target.documentElement.scrollHeight;
    const currentHeight =
      event.target.documentElement.scrollTop + window.innerHeight;

    if (currentHeight + 1 >= scrollHeight) {
      setPage(Number(page) + 1);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

  return (
    <div>
      <Header />
      <div className="wrapper bg-slate-500 container mx-auto flex my-5 flex-wrap gap-5 justify-center">
        {data.length > 0 &&
          data.map(function (value, index) {
            return (
              <div
                className="w-[300px] flex justify-center flex-col  rounded-md border p-4"
                key={index}
              >
                <img className="w-[200px] " src={value.url} alt="" />
                <p>{value.id}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
