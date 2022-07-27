import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faFacebook , faInstagram } from '@fortawesome/free-brands-svg-icons'
function ClubCart({ id, name, addres, idclub, setIdclub, picture , setPage, page }) {
  return (
    <div className="club-cart">
      <div className="head">
        <img
          className="clubimg"
          src= {`${process.env.React_APP_IMG_API}/images/clubs/${picture}`}
          alt="test"
        />
      </div>
      <div className="set">
        <div className="cart-body">
          <span className="club-id">{idclub}</span>
          <span className="club-name">{name}</span>
          <span className="club-addres">{addres}</span>
          <div className="club-info">
            <a className="fb" href="#"><span><FontAwesomeIcon icon={faFacebook}/></span></a>
            <a className="inst" href="#"><span><FontAwesomeIcon icon={faInstagram} /></span></a>
            <a className="mail" href="#"><span><FontAwesomeIcon icon={faEnvelope} /></span></a>
          </div>
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
