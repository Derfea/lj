import React, { Component } from "react";
import "./footer.css";
import logo from "../../2.png";
export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__parralax">
          <div className="footer__parralax-trees"></div>
          <div className="footer__parralax-moto"></div>
          <div className="footer__parralax-secondplan"></div>
          <div className="footer__parralax-premierplan"></div>
          <div className="footer__parralax-voiture"></div>
        </div>
        <div className="container">
          <div className="footer__columns">
            <div className="footer__col">
              <h3 className="footer__col-title">
                <i data-feather="shopping-bag"></i> <br />
                <img src={logo} height="50px" style={{ top: "40px" }} />
                <span className="span">ProCompletions</span>
              </h3>
              <nav className="footer__nav">
                <ul className="footer__nav-list">
                  <li className="footer__nav-item">
                    <a href="" className="footer__nav-link a">
                      {" "}
                      Mentions légales{" "}
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a href="" className="footer__nav-link">
                      Politique de confidentialité
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a href="" className="footer__nav-link a">
                      {" "}
                      CGV{" "}
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a href="" className="footer__nav-link a">
                      Livraisons et retours
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a href="" className="footer__nav-link a">
                      {" "}
                      Règlement concours{" "}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer__col">
              <h3 className="footer__col-title">
                <i data-feather="share-2"></i> <span className="span"></span>
              </h3>
              <nav className="footer__nav">
                <ul className="footer__nav-list">
                  <li className="footer__nav-item">
                    <a href="" className="footer__nav-link">
                      <i data-feather="youtube"></i>
                      <span className="span">Youtube</span>
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a href="" className="footer__nav-link a">
                      <i data-feather="facebook"></i>
                      <span className="span">Facebook</span>
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a href="" className="footer__nav-link a">
                      <i data-feather="instagram"></i>
                      <span className="span">Instagram</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer__col">
              <h3 className="footer__col-title">
                <i data-feather="send"></i> <span className="span"></span>
              </h3>
              <nav className="footer__nav">
                <ul className="footer__nav-list">
                  <li className="footer__nav-item">
                    <a
                      href="mailto:contact.laboiserie@gmail.com"
                      className="footer__nav-link a"
                    >
                      chika.kanu@gmail.com
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="footer__copyrights">
            <p className="p">
              Made By
              <a
                href="https://www.google.com/search?sca_esv=d9b3b500f3bb4a30&sca_upv=1&rlz=1C1ONGR_en-GBGB1028GB1028&sxsrf=ADLYWIIM8Of219CnHCGFOhglpDHgvqKFyg:1721241691321&q=Chikamso+Kanu&si=ACC90nwLLwns5sISZcdzuISy7t-NHozt8Cbt6G3WNQfC9ekAgMd_cmW3N8FE77_aNP6apjw-EOA_UXzzXwvc6aREze0VH1tZWPqZ96xqlTZvqBg_AZmFg7RjpHZLdHVv82bRPyHt_TrIYwTekD1zh4M7156XeJ1NxgR2yiyPhYFcGCQcirXJdLrRC0lDIWD2swdrt37Z0ThtsGEnsglXwO1pHwZx2VhZew%3D%3D&sa=X&ved=2ahUKEwjOstX83K6HAxVca0EAHXKJAyQQmxMoAHoECC8QAg&biw=1280&bih=551&dpr=1.5"
                target="_blank"
                className="a"
              >
                @ChikamsoKanu
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
