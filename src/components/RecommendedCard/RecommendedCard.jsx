import React from "react";

export const RecommendedCard = (props) => {
  return (
    <div className="relative w-max">
      <img
        className="w-[280px] h-[174px] rounded-[8px]"
        src={`../src${props.src.substring(1)}`}
      ></img>
      <div className="bg-darkBlue hover:bg-pureWhite hover:stroke-black absolute top-0 right-0 rounded-full p-2 right-[24px] top-[24px]">
        <svg
          className="fill-none z-10 cursor-pointer stroke-pureWhite hover:stroke-black"
          width="12"
          height="14"
          viewBox="0 0 12 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.7112 0.771005L10.7215 0.775484L10.7319 0.779653C10.7992 0.806575 10.8386 0.840492 10.8705 0.886923C10.9032 0.934576 10.9167 0.977859 10.9167 1.03635V12.9636C10.9167 13.0221 10.9032 13.0654 10.8705 13.1131C10.8386 13.1595 10.7992 13.1934 10.7319 13.2203L10.7237 13.2236L10.7156 13.2271C10.7107 13.2292 10.6807 13.2407 10.6094 13.2407C10.5085 13.2407 10.4397 13.2142 10.3686 13.15L6.3572 9.2346L5.83333 8.72327L5.30946 9.2346L1.29754 13.1505C1.21287 13.2276 1.14206 13.25 1.05729 13.25C1.02004 13.25 0.988249 13.2433 0.955471 13.229L0.945175 13.2245L0.934749 13.2203C0.867434 13.1934 0.828051 13.1595 0.796199 13.1131C0.763509 13.0654 0.75 13.0221 0.75 12.9636V1.03635C0.75 0.977859 0.763509 0.934576 0.796198 0.886924C0.828051 0.840491 0.867435 0.806574 0.93475 0.779653L0.945175 0.775484L0.95547 0.771004C0.988248 0.756743 1.02004 0.75 1.05729 0.75H10.6094C10.6466 0.75 10.6784 0.756743 10.7112 0.771005Z"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <div className="mt-2">
        <div className="flex items-center gap-2">
          <h6 className="text-[15px] font-light text-pureWhite opacity-75">
            {props.year}
          </h6>
          <div className="w-[3px] h-[3px] bg-pureWhite opacity-75 rounded-full"></div>
          {props.category == "Movie" ? (
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z"
                fill="#FFF"
                opacity=".75"
              />
            </svg>
          ) : null}

          {props.category == "TV Series" ? (
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z"
                fill="#FFF"
                opacity=".75"
              />
            </svg>
          ) : null}

          <h6 className="text-[15px] font-light text-pureWhite opacity-75">
            {props.category}
          </h6>
          <div className="w-[3px] h-[3px] bg-pureWhite opacity-75 rounded-full"></div>
          <h6 className="text-[15px] font-light text-pureWhite opacity-75">
            {props.rating}
          </h6>
        </div>
        <h2 className="text-[24px] text-pureWhite whitespace-nowrap">
          {props.title}
        </h2>
      </div>
    </div>
  );
};
