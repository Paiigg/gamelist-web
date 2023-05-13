import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

export default function Popular() {
  const [data, setData] = useState([]);
  const url =
    "https://rawg.io/api/games?token&key=bbe9f39be8c249a9aad68948d9c060f9&pages_size=4";
  useEffect(() => {
    const getGames = async () => {
      const response = await axios.get(url);
      console.log(response.data.results);
      setData(response.data.results);
    };
    getGames();
  }, []);

  return (
    <div className="max-w-[1240px] mx-auto mb-10 mt-10">
      <h3 className="p-4 text-2xl font-bold text-center md:text-left">
        Popular games
      </h3>
      <Card data={data} />
    </div>
  );
}
