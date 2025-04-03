import React from "react";
import AnimateIntoView from "../reusable/AnimateIntoView";

function TrendingNow() {
  return (
    <AnimateIntoView>
      <section className="section px-4 md:px-20 flex flex-col justify-center items-center">
        <article className="flex flex-col items-center justify-center text-center">
          <h3 className="heading">Trending Now at Accessories World</h3>
          <p className="subheading">
            These are the accessories everyone’s talking about! Grab yours
            before they’re gone!
          </p>
        </article>
      </section>
    </AnimateIntoView>
  );
}

export default TrendingNow;
