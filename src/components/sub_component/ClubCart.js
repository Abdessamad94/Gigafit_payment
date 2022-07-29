import React from "react";
import { FaFacebookSquare ,FaInstagramSquare,FaMailBulk,FaGlobe } from 'react-icons/fa';
function ClubCart({ id, idclub, info, setIdclub, setPage, page }) {
  return (
    <div className="club-cart">
      <div className="head">
        <img
          className="clubimg"
          src={`${process.env.React_APP_IMG_API}/images/clubs/${info.picture}`}
          alt="test"
        />
      </div>
      <div className="set">
        <div className="cart-body">
          <span className="club-id" style={{ display: "none" }}>
            {idclub}
          </span>
          <span className="club-name">{info.name.replace("Gigafit ", "")}</span>
          <span className="club-addres">{info.adresse}</span>
          <a className="club-tel" href={`tel:${info.tel}`} target="_blanck">
            {info.tel}
          </a>
          <div className="club-info">
            <a className="fb" href={info.facebook} target="_blanck">
              <span>
                <FaFacebookSquare/>
              </span>
            </a>
            <a className="inst" href={info.instagram} target="_blanck">
              <span>
                <FaInstagramSquare/>
              </span>
            </a>
            <a className="mail" href={`mailto:${info.email}`} target="_blanck">
              <span>
                <FaMailBulk/>
              </span>
            </a>
            <a className="web" href={info.siteWeb} target="_blanck">
              <span>
                <FaGlobe/>
              </span>
            </a>
  
            
          </div>
        </div>
        <div className="cart-footer">
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
