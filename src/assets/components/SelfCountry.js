import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "./Card";
import Loader from "./Loader";
import FloatingToTop from "./FloatingToTop";
import { withRouter } from "react-router-dom";
import useNewsQuery from "../hooks/useNewsQuery";

const SelfCountry = ({ countryCode }) => {
  let newCountryCode = String(countryCode).toLowerCase();

  const { loading, data } = useNewsQuery({
    params: { country: [newCountryCode] },
  });

  return (
    <div>
      <FloatingToTop />
      {loading ? (
        <Loader />
      ) : (
        data?.articles?.map(
          (item) =>
            item.title !== "No title" && (
              <NewsCard
                key={item?.id}
                title={item.title}
                description={item.description}
                image={item.image}
                content={item.content}
                url={item.url}
              />
            ),
        )
      )}
    </div>
  );
};

export default React.memo(withRouter(SelfCountry));
