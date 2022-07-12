import React from "react";
import ClubCart from "../components/sub_component/ClubCart";

function Clubs({ id, setIdclub,setPage,page }) {
  const clubs = [
    {
      id: "123",
      name: "test",
      adress: "hfhfhf 21 jhfjkdhfjkdfj",
    },
    {
      id: "123",
      name: "test",
      adress: "hfhfhf 21 jhfjkdhfjkdfj",
    },
    {
      id: "123",
      name: "test",
      adress: "hfhfhf 21 jhfjkdhfjkdfj",
    },
    {
      id: "123",
      name: "test",
      adress: "hfhfhf 21 jhfjkdhfjkdfj",
    },
    {
      id: "123",
      name: "test2",
      adress: "hfhfhf 21 jhfjkdhfjkdfj",
    },
    {
      id: "123",
      name: "test",
      adress: "hfhfhf 21 jhfjkdhfjkdfj",
    },
    {
      id: "123",
      name: "test",
      adress: "hfhfhf 21 jhfjkdhfjkdfj",
    },
    {
      id: "123",
      name: "test",
      adress: "hfhfhf 21 jhfjkdhfjkdfj",
    },
  ];
  /** get all club from resamanya */

  return (
    <div className="clubslist">
      {clubs.filter((c) => (c.name.toLowerCase().includes(""))).map((e) => (
        <ClubCart
          key={e.id}
          name={e.name}
          addres={e.adress}
          idclub={id}
          setIdclub={setIdclub}
          setPage={setPage}
          page={page}
        />
      ))}
    </div>
  );
}

export default Clubs;
