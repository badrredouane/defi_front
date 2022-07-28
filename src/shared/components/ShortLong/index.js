import React, { useState } from "react";
import { BiTrendingDown, BiTrendingUp } from "react-icons/bi";

const ShortLong = () => {
  const [cls, setCls] = useState("c-green-linear");
  return (
    <div
      className={`button--shortLong ${cls}`}
      onClick={() =>
        setCls((cls) =>
          cls === "c-red-linear" ? "c-green-linear" : "c-red-linear"
        )
      }
    >
      <span className="label">
        {cls === "c-green-linear" ? "Long" : "Short"}
      </span>
      <span className="icon">
        {cls === "c-green-linear" ? (
          <BiTrendingUp size={32} />
        ) : (
          <BiTrendingDown size={32} />
        )}
      </span>
    </div>
  );
};

ShortLong.propTypes = {};

ShortLong.defaultProps = {};

export default ShortLong;
