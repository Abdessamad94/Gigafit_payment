import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
import Subscription from "./Subscription";
import Clubs from "./Clubs";

function Form() {
  /*check if user come from landing page or from Gigafit.fr*/
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const landingpage = urlParams.get("landingpage");

  /* form info */
  const [idclub, setIdclub] = useState(false);
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    idclub: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });

  const FormTitles = ["Votre club", "Abonnement", "Vos accessoires", "Coordonnées" , "Votre club", "Votre formule & options", "Vos accessoires", "Coordonnées"];

  const PageDisplay = () => {
    if (page === 0) {
      if (!landingpage) {
        return <Clubs id={idclub} setIdclub={setIdclub} setPage = {setPage} page={page}/>;
      } else {
        setPage((page) => page + 1);
        console.log("this is " + page)
      }
    } else if (page === 1) {
      return <Subscription formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  const progress = () => {
    return page === 0 ? "0%" : page == 1 ? "25%" : page === 2 ? "50%" : "100%";
  };

  const nav = () => {
    if (page === FormTitles.length - 1) {
      console.log(formData);
    } else {
      setPage((currPage) => currPage + 1);
      console.log(page);
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        {console.log(landingpage)}
        {console.log(idclub)}
        <div className="progress" style={{ width: progress() }}></div>
        <div className="stepnum" disabled={page == 0}>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
        </div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        {
          page ? (<div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              nav();
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>) : "" 
        }
      </div>
    </div>
  );
}

export default Form;
