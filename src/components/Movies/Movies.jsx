import React from "react";
import { useState, useEffect } from "react";
import Search from "../../assets/icon-search.svg";
import { RecommendedCard } from "../RecommendedCard/RecommendedCard";

export const Movies = () => {
  const [records, setRecords] = useState();
  const [searchMode, setSearchMode] = useState(false);
  const [searchRecords, setSearchRecords] = useState();

  useEffect(() => {
    fetch("http://localhost:5173/public/data.json")
      .then((response) => response.json())
      .then((data) => {
        setRecords(data.filter((oneData) => {
          return oneData.category == "Movie";
        }));
      });
  }, []);

  console.log(records)

  const handleSearch = (event) => {
    let query = event.target.value;
    setSearchMode(true);
    let updated = records.filter((item) => {
      return item.title.toLowerCase().includes(query.toLowerCase());
    });
    setSearchRecords(updated);
    if (query == 0) {
      setSearchMode(false);
    }
  };

  return (
    <div className="text-pureWhite">
      <div className="flex items-center gap-6">
        <img src={Search} />
        <div className="w-full">
          <input
            className="bg-transparent placeholder:text-[24px] w-full font-light text-pureWhite"
            type="text"
            placeholder="Search for movies"
            onChange={(e) => {
              handleSearch(e);
            }}
          />
        </div>
      </div>
      <h1 className="mt-6 text-[32px] text-pureWhite font-light">Movies</h1>
      <div
        className={
          searchMode ? "hidden" : "recommendedGrid grid grid-cols-4 gap-[40px]"
        }
      >
        {records?.map((oneRecord, index) => {
          if (oneRecord.category == "Movie") {
            return (
              <RecommendedCard
                key={index}
                src={oneRecord.thumbnail.regular.medium}
                year={oneRecord.year}
                category={oneRecord.category}
                rating={oneRecord.rating}
                title={oneRecord.title}
              />
            );
          }
        })}
      </div>
      <div
        className={
          searchMode
            ? "recommendedGrid grid grid-cols-4 gap-[40px] mt-16"
            : "hidden"
        }
      >
        {searchRecords?.map((item, index) => {
          return (
            <RecommendedCard
              key={index}
              src={item.thumbnail.regular.small}
              title={item.title}
              year={item.year}
              category={item.category}
              rating={item.rating}
            />
          );
        })}
      </div>
    </div>
  );
};
