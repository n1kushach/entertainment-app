import React from "react";
import { useState, useEffect } from "react";
import Search from "../../assets/icon-search.svg";
import { RecommendedCard } from "../RecommendedCard/RecommendedCard";

export const Bookmarked = () => {
  const [records, setRecords] = useState();
  const [searchMode, setSearchMode] = useState(false);
  const [searchRecords, setSearchRecords] = useState();
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    fetch("http://localhost:5173/public/data.json")
      .then((response) => response.json())
      .then((data) => {
        setRecords(
          data.filter((oneData) => {
            return oneData.isBookmarked == true;
          })
        );
      });
  }, []);

  console.log(records)


  const handleSearch = (event) => {
    setKeyword(event.target.value);
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

      <h1
        className={
          searchMode ? "hidden" : "mt-6 text-[32px] text-pureWhite font-light"
        }
      >
        Bookmarked Movies
      </h1>
      <div
        className={
          searchMode ? "hidden" : "recommendedGrid grid grid-cols-4 gap-[40px]"
        }
      >
        {records?.map((oneRecord, index) => {
           
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
          
        })}
      </div>
      <div>
        <h1 className={searchMode ? "mt-6" : "hidden"}>
          Found {searchRecords?.length} results for "{keyword}"
        </h1>
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
    </div>
  );
};
