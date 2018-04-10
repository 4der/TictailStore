import React from "react"
import "./footer.css"

class Footer extends React.Component {
  render() {
    return (
    <div className="footerList">

    <footer>
    <div className="footerInfo">
    <div className="firstColumn">
      <ul>
        <h4>Upptäck</h4>
        <li>Herr</li>
        <li>Dam</li>
        <li>Hus och Hem</li>
        <li>Konst</li>
      </ul>
    </div>

    <div className="secondColumn">
      <ul>
        <h4>Trendigt</h4>
        <li>Bomberjackor</li>
        <li>Sammetsklänningar</li>
        <li>Unika örhängen</li>
        <li>Anime och Manga</li>
      </ul>
    </div>

    <div className="thirdColumn">
      <ul>
        <h4>Shoppa på Tictail</h4>
        <li>Betalningsalternativ</li>
        <li>Returer</li>
        <li>Tictail Market NYC</li>
      </ul>
    </div>

    <div className="fourthColumn">
      <ul>
        <h4>Sälj på Tictail</h4>
        <li>Starta en butik</li>
        <li>Tips och tricks</li>
        <li>Tictail-omdömen</li>
      </ul>
    </div>

    <div className="fifthColumn">
      <ul>
        <h4>Lär känna oss</h4>
        <li>Om oss</li>
        <li>Press</li>
        <li>Jobb</li>
        <li>Kontakta oss</li>
      </ul>
    </div>
    </div>

    </footer>
    </div>
    )
   }

  }


export default Footer
