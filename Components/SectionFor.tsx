import React from "react";

export default function SectionFor() {
  return (
    <div className="m-10">
      <div className="flex flex-wrap justify-center items-center lg:flex-nowrap xl:flex-nowrap">
        <div className="m-20">
          <iframe
            // className="sm:w-80"
            // width="564"
            // height="317"
            src="https://www.youtube.com/embed/rymDPObhsJc"
            title="2021 NOUVEAU DACIA JOGGER - Vidéo de présentation de notre voiture familiale"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="">
          <h1 className="text-3xl font-bold m-10">Auto DACIA</h1>
          <p>
            The first facility in the area was built between 1942 and 1945, as
            an extension of the <span className="text-blue-600">IAR</span>{" "}
            aircraft manufacturer. The new factory, built in the
            Colibași-Pitești area under the order of Marshal{" "}
            <span className="text-blue-600">Ion Antonescu</span> (conducător of
            Romania during <span className="text-blue-600">World War II</span>),
            was scheduled to produce up to 600 aircraft engines per month. The
            building work was completed in 1945. After the war, the facility was
            taken over by the Romanian Railways, later generating the Dacia
            plants.[10]
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center lg:flex-nowrap xl:flex-nowrap">
        <div>
          <h1 className="text-3xl font-bold m-10">
            MERCEDES_BENZ GLA SYSTEM SPORT
          </h1>
          <p>
            The Sport Edition is the entry-level trim in the Mercedes GLA range
            but you get some good kit such as 18-inch alloy wheels, LED
            headlights and a twin-screen setup inside. You also get heated front
            seats and Apple CarPlay/Android Auto integration as standard.
          </p>
        </div>
        <div className="m-20">
          <iframe
            // width="564"
            // height="317"
            src="https://www.youtube.com/embed/uZi0SbKykLs"
            title="2021 NOUVEAU DACIA JOGGER - Vidéo de présentation de notre voiture familiale"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          
        </div>
      </div>
    </div>
  );
}
