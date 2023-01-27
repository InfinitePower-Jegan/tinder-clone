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
    </div>
  )
}

export default Topheader