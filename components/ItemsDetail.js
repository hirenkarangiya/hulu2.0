import Image from "next/image";
import styles from "../styles/components/ItemsDetails.module.css";
import { StarIcon } from "@heroicons/react/outline";

function SinglePost({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  const release_year = new Date(result.release_date || result.last_air_date);

  const timeConvert = (num) => {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    return hours + " : " + minutes;
  };

  return (
    <div
      className={`relative bg-local bg-cover bg-no-repeat ${styles.backgroundImage}`}
      style={{
        backgroundImage: `url(${BASE_URL}${
          result.backdrop_path || result.poster_path
        })`,
        backgroundPosition: "center top",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-2 w-full" />
      <div className="container md:flex items-center mx-auto px-4 py-12">
        <div className="mb-5 md:w-3/12 md:mb-0">
          <div className="px-3">
            <Image
              layout="responsive"
              src={`${BASE_URL}${result.poster_path}`}
              height={450}
              width={300}
              alt={result.title}
              className="rounded-lg"
            />
            {result.networks
              ? result.networks.map((item) => (
                  <div className="-mt-1 bg-white p-3 pt-4 rounded-br-lg rounded-bl-lg text-center">
                    <Image
                      className="object-contain"
                      src={`${BASE_URL}${item.logo_path}`}
                      width={100}
                      height={30}
                    />
                  </div>
                ))
              : ""}
          </div>
        </div>

        <div className="md:w-9/12">
          <div className="px-3">
            {/* Title */}
            <h1 className="text-2xl md:text-5xl inline-block text-white font-semibold mb-2">
              {result.title || result.original_name} (
              {release_year.getFullYear()})
            </h1>

            <div className="clear-both"></div>

            {/* Vote Average */}
            {result.vote_average ? 
            <div className="bg-gray-300 my-3 text-black font-semibold rounded-full h-16 w-16 inline-flex items-center justify-center">{result.vote_average}/10</div>
            : ''}

            {/* Vote Counts */}
            <p className="inline-flex my-3 md:pl-3">
              <span className="border-b-2 border-solid mr-2">Vote Counts :</span>{Intl.NumberFormat('en-US').format(result.vote_count)}
            </p>

            <div className="clear-both"></div>

            {/* Genres */}
            {result.genres ? (
              <ul className="inline-flex items-center space-x-2 mb-3 md:pr-3 list-none list-outside inline">
                <li className="border-b-2 border-solid mr-2">Genres : </li>
                {result.genres.map((item) => (
                  <li
                    className="border-solid border rounded py-0.5 px-1.5 text-xs"
                    key={item.id}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            ) : (
              ""
            )}

            {/* Spoken Languages */}
            {result.spoken_languages ? (
              <ul
                className={`inline-flex items-center space-x-1 mb-3 md:pl-3 list-none list-outside inline ${styles.item_languages}`}
              >
                <li className="border-b-2 border-solid mr-2">Languages : </li>
                {result.spoken_languages.map((item, index) => (
                  <li className="font-semibold" key={item.iso_639_1}>
                    {item.english_name}
                  </li>
                ))}
              </ul>
            ) : (
              ""
            )}

            <div className="clear-both"></div>

            {/* Duration */}
            {result.runtime ? (
              <div className="p-0">
                <p className="text-md">
                  <span className="border-b-2 border-solid mr-2">
                    Duration :
                  </span>{" "}
                  <span>{timeConvert(result.runtime)} hrs</span>
                </p>
              </div>
            ) : (
              ""
            )}

            {/* Seasons */}
            {result.seasons ? (
              <ul className="mt-3 flex space-x-1">
                <li className="border-b-2 border-solid mr-2">Season : </li>
                {result.seasons.map((item) => (
                  <li
                    key={item.id}
                    className="py-1 px-3 text-xs uppercase bg-white text-black border-solid border rounded-full"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            ) : (
              ""
            )}

            {/* Production Companies */}
            {result.production_companies ? (
              <div className={`mt-3 ${styles.produce_by}`}>
                <span className="border-b-2 border-solid mr-2">
                  Produce by :
                </span>

                {result.production_companies.map((value) => (
                  <span key={value.id}>{value.name}</span>
                ))}
              </div>
            ) : (
              ""
            )}

            {/* Overview */}
            {result.overview ? (
              <div className="mt-3">
                <h2 className="text-3xl text-white font-semibold mb-2">
                  Overview
                </h2>
                <p className="text-lg">{result.overview}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
