import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faFacebook , faInstagram} from '@fortawesome/free-brands-svg-icons'
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
          <span className="club-id">{id}</span>
          <span className="club-addres">{addres}</span>
          <span className="club-name">{name}</span>
          <div className="club-info">
            <a className="fb" href="#"><span><FontAwesomeIcon icon={faFacebook} /></span></a>
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
