import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faFacebook , faInstagram } from '@fortawesome/free-brands-svg-icons'
function ClubCart({ id, idclub, info , setIdclub , setPage, page }) {
  return (
    <div className="club-cart">
      <div className="head">
        <img
          className="clubimg"
          src= {`${process.env.React_APP_IMG_API}/images/clubs/${info.picture}`}
          alt="test"
        />
      </div>
      <div className="set">
        <div className="cart-body">
          <span className="club-id" style={{display:"none"}}>{idclub}</span>
          <span className="club-name">{info.name.replace('Gigafit ', '')}</span>
          <span className="club-addres">{info.adresse}</span>
          <a className="tel" href={`tel:${info.tel}`} target="_blanck"><span className="club-tel">{info.tel}</span></a>
          <div className="club-info">
            <a className="fb" href={info.facebook} target="_blanck"><span><FontAwesomeIcon icon={faFacebook}/></span></a>
            <a className="inst" href={info.instagram} target="_blanck"><span><FontAwesomeIcon icon={faInstagram} /></span></a>
            <a className="mail" href={`mailto:${info.email}`} target="_blanck"><span><FontAwesomeIcon icon={faEnvelope} /></span></a>
            <a className="mail" href={info.siteWeb} target="_blanck"><span><FontAwesomeIcon icon={faEnvelope} /></span></a>
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
