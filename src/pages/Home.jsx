import React, { useEffect, useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
function Home() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(900);
  const [limit, setLimit] = useState(8);
  const [parames, setParames] = useSearchParams();

  //   useEffect(() => {
  //     let pageParams = Number(parames.get("page")) || 1;
  //     let limitParams = Number(parames.get("limit")) || 8;

  //     setPage(pageParams);
  //     setLimit(limitParams);
  //   }, [parames]);

  useEffect(
    function () {
      fetch(
        `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`
      )
        .then((res) => res.json())
        .then((d) => {
          setData(d);
          setParames({ page: page, limit: limit });
        });
    },
    [page, limit, setParames]
  );

  function handleChange(e) {
    setPage(e);
  }

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
      <ResponsivePagination
        current={page}
        total={total}
        onPageChange={handleChange}
      />
    </div>
  );
}

export default Home;
