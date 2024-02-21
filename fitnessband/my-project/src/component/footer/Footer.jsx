import React from 'react'
import style from './Footer.module.css'

function Footer() {
  return (
    <div className={style.body}>
      <div className={style.sectionone}>
        <div className={style.imagetag}>
          <img
            alt=""
            src="./images/fit-ogp-logo.jpg"
            width="150"
            height="80"
            className="d-inline-block align-top"
          />
        </div>
        <div className={style.innersectionone}>
          <div className={style.texttag}>
            <ul>
              <ol>WORKOUT & PROGRAMS</ol>
              <div className={style.textset}>
              <ol>WORKOUT VIDEO</ol>
              <ol>CUSTOM WORKOUT</ol>
              <ol>WORKOUT PROGRAMS</ol>
              <ol>MEAL PLANS</ol>
              </div>
            </ul>
          </div>
          <div className={style.texttag}>
            <ul>
              <ol>HEALTHY LIVING</ol>
              <div className={style.textset}>
              <ol>FITNESS</ol>
              <ol>HEALTH</ol>
              <ol>NUTRITION</ol>
              <ol>HEALTHY RECIPY</ol>
              <ol>EXPERT</ol>
              </div>
            </ul>
          </div>
          <div className={style.texttag}>
            <ul>
              <ol>FB PLUS</ol>
              <ol>COMMUNITY</ol>
              <ol>BLOG</ol>
              <ol>ABOUT US</ol>
              <ol>CONTACT US</ol>
            </ul>
          </div>
        </div>
      </div>
      <div className={style.sectiontwo}>
        <div className={style.line}></div>
        <div className={style.alllinks}>
          <div className={style.paragraf}>
            <p>Copyright © 2020 Fitness Blender. All rights reserved. <a href='#'>Terms and Conditions Privacy Policy</a></p>
          </div>
          <div className={style.socilmedia}>
            <a href='#'><i class="bi bi-youtube"></i></a>
            <a href='#'><i class="bi bi-instagram"></i></a>
            <a href='#'><i class="bi bi-facebook"></i></a>
            <a href='#'><i class="bi bi-twitter-x"></i></a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
