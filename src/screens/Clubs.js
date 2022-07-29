import { React, useEffect, useState } from "react";
import ClubCart from "../components/sub_component/ClubCart";
import axios from "axios";
import { SpinnerCircular } from "spinners-react";
import { FaSearch } from "react-icons/fa";

function Clubs({ id, setIdclub, setPage, page }) {
  const [clubs, setClubs] = useState([]);
  const [search, setSearch] = useState("");
  const [isloaded, setIsloaded] = useState(false);

  /*  just dummy data   */
  // const clubs = [
  //   {
  //     id: "123",
  //     name: "test",
  //     adress: "hfhfhf 21 jhfjkdhfjkdfj",
  //   },
  //   {
  //     id: "123",
  //     name: "test",
  //     adress: "hfhfhf 21 jhfjkdhfjkdfj",
  //   },
  //   {
  //     id: "123",
  //     name: "test",
  //     adress: "hfhfhf 21 jhfjkdhfjkdfj",
  //   },
  //   {
  //     id: "123",
  //     name: "test",
  //     adress: "hfhfhf 21 jhfjkdhfjkdfj",
  //   },
  //   {
  //     id: "123",
  //     name: "test2",
  //     adress: "hfhfhf 21 jhfjkdhfjkdfj",
  //   },
  //   {
  //     id: "123",
  //     name: "test",
  //     adress: "hfhfhf 21 jhfjkdhfjkdfj",
  //   },
  //   {
  //     id: "123",
  //     name: "test",
  //     adress: "hfhfhf 21 jhfjkdhfjkdfj",
  //   },
  //   {
  //     id: "123",
  //     name: "test",
  //     adress: "hfhfhf 21 jhfjkdhfjkdfj",
  //   },
  // ];

  /** get all clubs from our Api (app api) */

  useEffect(() => {
    const getclubs = async () => {
      const res = await axios.get(`${process.env.React_APP_HEROKO_API}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJfaWQiOiI2MjQ2YWU2OGEyNWY4YTU1N2RhOTY1ZmUiLCJsYXN0bmFtZSI6InRlc3QiLCJmaXJzdG5hbWUiOiJ0ZXN0ICIsImdlbmRlciI6Ik1hbGUiLCJkYXRlQmlydGgiOiIyMDE3LTA1LTExIiwiZW1haWwiOiJ0ZXN0QGdtYWlsLmNvbSIsInRlbCI6IjIwMjIyNTU0NTc4IiwicGFzc3dvcmQiOiIkMmIkMTAkV3gzN0V2V3I1VmxacmUveWRnWC5DTzBLcnUuUEhWd29yaGlnb2IydTR5NnhtVjRqelcyVWEiLCJwcm9maWxlUGljdHVyZSI6IjE2NDg3OTkzMzU1MjkxLmpwZWciLCJjbHViIjoiNjIxOTBjZjNkYzc5YjI5YmY3OGIyN2VhIiwiY3JlYXRlZEF0IjoiMjAyMi0wNC0wMVQwNzo0ODo1Ni4zNjhaIiwidXBkYXRlZEF0IjoiMjAyMi0wNC0wMVQwNzo0ODo1Ni4zNjhaIn0sImlhdCI6MTY1MDM2MjMwNn0.0jwSSlW9ALtTtSs4wp-dlmvuJyyt8A2iC1brjSa7LSY`,
        },
      });
      setClubs(res.data);
      setIsloaded(true);
    };
    if (isloaded) return;

    getclubs();
  }, []);
  return (
    <>
      <div className="search-continer">
        <div className="search">
          <input
            type="text"
            placeholder="Chercher..."
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
           <i className="search-icon">
            <FaSearch />
          </i>
        </div>
      </div>
      {/* when the clubs are loading */}
      {clubs.length === 0 && (
        <div
          style={{
            width: "100%",
            height: "40vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SpinnerCircular />
        </div>
      )}
      <div className="clubslist">
        {clubs
          .filter((c) => c.name.toLowerCase().includes(search))
          .map((e) => (
            <ClubCart
              key={e.id}
              info={e}
              idclub={e.resId}
              setIdclub={setIdclub}
              setPage={setPage}
              page={page}
            />
          ))}
      </div>
    </>
  );
}

export default Clubs;
