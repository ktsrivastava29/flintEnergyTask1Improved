import React, { Component }  from 'react';
export const Tokenom = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Tokenomics: </h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <hr></hr>
              <p>{props.data ? props.data.paragraph2 : "loading..."}</p>
              
              <p>{props.data ? props.data.paragraph3 : "loading..."}</p>
                  <p>{props.data ? props.data.paragraph4 : "loading..."}</p>
                  <p>{props.data ? props.data.paragraph5 : "loading..."}</p>
                 
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                 
                  </ul>
                </div>
                
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
