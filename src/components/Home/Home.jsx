import React, { useState, useEffect } from "react";
import Search from "../../assets/icon-search.svg";
import { TrendingCard } from "../TrendingCard/TrendingCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { RecommendedCard } from "../RecommendedCard/RecommendedCard";

export const Home = () => {
  const [records, setRecords] = useState();
  const [searchMode, setSearchMode] = useState(false);
  const [searchRecords, setSearchRecords] = useState();
  const [keyword, setKeyword] = useState("")

  useEffect(() => {
    fetch("http://localhost:5173/public/data.json")
      .then((response) => response.json())
      .then((data) => {
        setRecords(data);
      });
  }, []);

  const handleSearch = (event) => {
    setKeyword(event.target.value)
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
    <div>
      <div className="flex items-center gap-6">
        <img src={Search} />
        <div className="w-full">
          <input
            className="bg-transparent placeholder:text-[24px] w-full font-light text-pureWhite"
            type="text"
            placeholder="Search for movies or TV series"
            onChange={(e) => {
              handleSearch(e);
            }}
          />
        </div>
      </div>
      <div className={searchMode ? "" : "hidden"}>
        <h1 className="mt-6 text-pureWhite">
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
      <div className={searchMode ? "hidden" : null}>
        <div>
          <h1 className="mt-6 text-[32px] text-pureWhite font-light">
            Trending
          </h1>
          <Swiper spaceBetween={50} slidesPerView={3}>
            {records?.map((oneRecord, index) => {
              if (oneRecord.isTrending == true) {
                return (
                  <SwiperSlide key={index}>
                    <TrendingCard
                      src={oneRecord.thumbnail.trending.large}
                      title={oneRecord.title}
                      year={oneRecord.year}
                      category={oneRecord.category}
                      rating={oneRecord.rating}
                    />
                  </SwiperSlide>
                );
              }
            })}
          </Swiper>
          <h1 className="mt-6 text-[32px] text-pureWhite font-light">
            Recommended for you
          </h1>
          <div className="recommendedGrid grid grid-cols-4 gap-[40px]">
            {records?.map((oneRecord, index) => {
              if (oneRecord.isBookmarked && oneRecord.isTrending == false) {
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
        </div>
      </div>
    </div>
  );
};
