import React from "react";

function ClubCart({ id, name, addres, idclub, setIdclub }) {
  return (
    <div className="club-cart">
      <div className="head">
        <img
          className="clubimg"
          src="https://gigafit.fr/wp-content/uploads/2022/04/saint-orens-1.jpg"
        />
      </div>
      <div className="body">
        <span>{id}</span>
        <span>{name}</span>
        <span>{addres}</span>
      </div>
      <div className="footer">
        <button
          onClick={() => {
            setIdclub(true);
          }}
        >
          s'inscrire
        </button>
      </div>
    </div>
  );
}

export default ClubCart;
