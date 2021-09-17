import React from "react"
import { Chrono } from "react-chrono";
import HorizontalTimeline from "react-horizontal-timeline";

export const Roadmap = (props) => {


  const items = [{
    title: "May 1940",
    cardTitle: "Dunkirk",
    cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    media: {
      type: "IMAGE",
      source: {
        url: "http://someurl/image.jpg"
      }
    }
  }, ];



  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>RoadMap</h2>
          <p>
          Our plans and strategy intended to achieve the goals.
          </p>
        </div>
       




        <div class="wrapper">
    <div class="center-line">
      <a href="#" class="scroll-icon"><i class="fas fa-caret-up"></i></a>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-home"></i>
        <div class="details">
          <span class="title">Q4 2021</span>
          <span>1st Jan 2021</span>
        </div>
        <p>    • Fund Raising<br/>
    • Onboarding Talented Artists<br/>
    • Building Alpha Platform<br/>
    • Platform Launch<br/>
    • Launch Most Interesting “Bitcoin Documentary Every</p>
        <div class="bottom">
          
          
        </div>
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fas fa-star"></i>
        <div class="details">
          <span class="title">Q1 2022</span>
          <span>2nd Jan 2021</span>
        </div>
        <p>    • Plan & Systematically Launch A Media Season on “Bitcoin” Initial Genre Would be Comedy to Attract More People to the Ecosystem <br/>
    • Launch 1 Episode Every Week<br/>
    • Promote Episodes With Influencers</p>
        <div class="bottom">
          
        </div>
      </section>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-rocket"></i>
        <div class="details">
          <span class="title">Q1 2022</span>
          <span>3rd Jan 2021</span>
        </div>
        <p>    • Complete Platform Launch<br/>
    • Implement Reward Features<br/>
    • Implement More Token Utility to Earn Royalties</p>
        <div class="bottom">
         
        </div>
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fas fa-globe"></i>
        <div class="details">
          <span class="title">Title of Section 4</span>
          <span>4th Jan 2021</span>
        </div>
        <p>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
        <div class="bottom">
          <a href="#">Read more</a>
          <i>- Someone famous</i>
        </div>
      </section>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-paper-plane"></i>
        <div class="details">
          <span class="title">Title of Section 5</span>
          <span>5th Jan 2021</span>
        </div>
        <p>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
        <div class="bottom">
          <a href="#">Read more</a>
          <i>- Someone famous</i>
        </div>
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fas fa-map-marker-alt"></i>
        <div class="details">
          <span class="title">Title of Section 6</span>
          <span>6th Jan 2021</span>
        </div>
        <p>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
        <div class="bottom">
          <a href="#">Read more</a>
          <i>- Someone famous</i>
        </div>
      </section>
    </div>
  </div>




  </div>
    </div>
  )
}