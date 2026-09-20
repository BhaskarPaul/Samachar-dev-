import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import FloatingToTop from "./FloatingToTop";
import NewsCard from "./Card";
import { withRouter } from "react-router-dom";
import useNewsQuery from "../hooks/useNewsQuery";

const World = ({ type }) => {
  const { loading, data } = useNewsQuery(
    !!type && {
      params: { category: [type] },
    },
  );

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

export default React.memo(withRouter(World));
