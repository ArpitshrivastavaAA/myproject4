import React from 'react'
import STYLE from "./netflix.module.css"

const Netflix = () => {
  return (
    <div className={STYLE.main}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQag2Y9MYEnbXqvRslv_Hz_pXBspXx41LSQ8A&usqp=CAU" alt="" />
    <ul>
      <li><a href="HOME">HOME</a></li>
      <li><a href="SERIES">SERIES</a></li>
      <li><a href="FILMS">FILMS</a></li>
      <li><a href="LATEST">LATEST</a></li>
      <li><a href="MYLIST">MYLIST</a></li>
    </ul>
    <div className={STYLE.searchbar}><input type="text" name='' id='' placeholder='SEARCH' /></div>
     </div>
  
  )
}

export default Netflix