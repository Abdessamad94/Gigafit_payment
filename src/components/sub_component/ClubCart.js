import React from "react";

function ClubCart({ id, name, addres, idclub, setIdclub, setPage, page }) {
  return (
    <div className="club-cart">
      <div className="head">
        <img
          className="clubimg"
          src="https://gigafit.fr/wp-content/uploads/2022/04/saint-orens-1.jpg"
          alt="test"
        />
      </div>
      <div className="set">
        <div className="cart-body">
          <span>{id}</span>
          <span>{name}</span>
          <span>{addres}</span>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setIdclub(true);
              setPage(page + 1);
            }}
          >
            s'inscrire
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClubCart;
