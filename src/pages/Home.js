import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search";
import Picture from "../components/Picture";

const Home = () => {
  let [input, setInput] = useState("");
  let [data, setData] = useState(null);
  let [page, setPage] = useState(1);
  let [currentSearch, setCurrentSearch] = useState("");
  const filePath = "./Pexel的API.txt";
  //請自行到 Pexel 網站上申請 API key，並創建一個名為"Pexel的API.txt"的文字文件，再將申請到的API key貼上即可
  const auth = axios
    .get(filePath)
    .then((response) => {
      response.data.trim();
    })
    .catch((error) => {
      console.error(error);
    });
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  let searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;

  const search = async (url) => {
    let result = await axios.get(url, {
      headers: { Authorization: auth },
    });
    setData(result.data.photos);
    setCurrentSearch(input);
  };

  const morePicture = async () => {
    console.log("page state目前的值是" + page);
    let newURL;
    setPage(page + 1);
    console.log("page state目前的值是" + page);
    if (currentSearch === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${
        page + 1
      }`;
    }
    console.log("正在morePicture內部");
    console.log(newURL);
    let result = await axios.get(newURL, {
      headers: { Authorization: auth },
    });
    setData(data.concat(result.data.photos));
  };

  useEffect(() => {
    search(initialURL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          search(searchURL);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
      <div className="morePicture">
        <button onClick={morePicture}>更多圖片</button>
      </div>
    </div>
  );
};

export default Home;
