import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore perferendis numquam, assumenda consequuntur, repudiandae unde, itaque dolorum minima facilis dolor voluptates? Saepe in laudantium sequi!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nesciunt facilis ipsum exercitationem modi doloremque corrupti est quaerat quam saepe.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, reiciendis nobis! Magni quo tempora ducimus natus laboriosam a commodi rem repudiandae iusto!</p>
      </div>
    </div>
  )
}

export default About