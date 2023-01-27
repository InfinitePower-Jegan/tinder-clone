import React from 'react'
import homeStyle from '../styles/home.module.scss'
function Topheader() {
  return (
    <div className={homeStyle.Topheader}>
      <div className={homeStyle.iconperfil}>
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHJ6dUXL27uam7YjFGiJnTFZJqA0m40nlTG00d8Hg&s"
          width="50px">
        </img>
        <h3>PNG BABY</h3>
      </div>
      <img width="50px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaULG0WAOf_HG6VxAKwNSnTlX_VuGklJqlsz91XKY&s"></img>
      <img width="50px" src="https://w7.pngwing.com/pngs/1000/494/png-transparent-computer-icons-suitcase-baggage-briefcase-suitcase-rectangle-logo-suitcase.png"></img>
    </div>
  )
}

export default Topheader