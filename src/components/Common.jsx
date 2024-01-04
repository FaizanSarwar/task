import React, { useState } from "react";
import Fun from "./Fun";
import Education from "./Education";
import Sport from "./Sport";
import News from "./News";
import Investment from "./Investment";
import Facts from "./Facts";

const Common = () => {
  const [showFunComponent, setShowFunComponent] = useState(false);
  const [education, setEducation] = useState(false);
  const [sport, setSport] = useState(false);
  const [news, setNews] = useState(false);
  const [invest, setInvest] = useState(false);
  const [facts, setFacts] = useState(false);
  const [selectedValue, setSelectedValue] = useState(100);

  const handleRangeChange = (event) => {
    setSelectedValue(parseInt(event.target.value, 10));
  };
  const handleFunButtonClick = () => {
    setShowFunComponent(true);
    setNews(false);
    setEducation(false);
    setSport(false);
    setInvest(false);
    setFacts(false);

  };
  const handleEducationButtonClick = () => {
    setEducation(true);
    setShowFunComponent(false);
    setSport(false);
    setNews(false);
    setInvest(false);
    setFacts(false);

  };
  const handleSportButtonClick = () => {
    setSport(true);
    setShowFunComponent(false);
    setEducation(false);
    setNews(false);
    setInvest(false);
    setFacts(false);

  };
  const handleNewsButtonClick = () => {
    setSport(false);
    setShowFunComponent(false);
    setEducation(false);
    setNews(true);
    setInvest(false);
    setFacts(false);

  };
  const handleInvestButtonClick = () => {
    setSport(false);
    setShowFunComponent(false);
    setEducation(false);
    setNews(false);
    setInvest(true);
    setFacts(false);

  };
  const handleFactButtonClick = () => {
    setSport(false);
    setShowFunComponent(false);
    setEducation(false);
    setNews(false);
    setInvest(false);
    setFacts(true);
  };
  return (
    <>
      <div className="bg-dark pb-5" style={{height:'100vh'}}>
        <div className="container-fluid ms-5 text-light">
          <h5>Content type</h5>
          <p style={{ fontSize: "12px" }}>
            Choose a content type that best fits your needs.
          </p>
          <hr className="mx-auto" style={{ width: "90%" }} />
        </div>

        <div className="ms-5 mb-6 text-light">
          <h6>What type of content are you creating?</h6>
          <div>
            <button
              type="button"
              class="btn btn-outline-primary mx-1 px-3 text-center"
              style={{ borderRadius: "22%", fontSize: "15px",padding:'10px' }}
              onClick={handleFunButtonClick}
            >
              Fun
            </button>
            <button
              type="button"
              class="btn btn-outline-primary mx-1 px-3 text-center"
              style={{ borderRadius: "22%", fontSize: "15px",padding:'10px' }}
              onClick={handleEducationButtonClick}
            >
              Education
            </button>
            <button
              type="button"
              class="btn btn-outline-primary mx-1 px-3 text-center"
              style={{ borderRadius: "22%", fontSize: "15px",padding:'10px' }}
              onClick={handleSportButtonClick}
            >
              Sports
            </button>
            <button
              type="button"
              class="btn btn-outline-primary mx-1 px-3 text-center"
              style={{ borderRadius: "22%", fontSize: "15px",padding:'10px' }}
              onClick={handleNewsButtonClick}
            >
              News
            </button>
            <button
              type="button"
              class="btn btn-outline-primary mx-1 px-3 text-center"
              style={{ borderRadius: "22%", fontSize: "15px",padding:'10px' }}
              onClick={handleInvestButtonClick}
            >
              Investment
            </button>
            <button
              type="button"
              class="btn btn-outline-primary mx-1 px-3 text-center"
              style={{ borderRadius: "22%", fontSize: "15px",padding:'10px' }}
              onClick={handleFactButtonClick}
            >
              Facts
            </button>
          </div>
          {/* render component on conditions */}
          {showFunComponent && <Fun />}
          {education && <Education />}
          {sport && <Sport />}
          {news && <News />}
          {invest && <Investment />}
          {facts && <Facts />}

          <div className="mt-5 ">
            <label for="customRange1" class="form-label">
              Set the number of words for output text
            </label>
            <br />
            <span>100</span>
            <input
              type="range"
              class="form-range"
              min="100"
              max="1000"
              id="customRange1"
              className="w-25 w-md-50"
              value={selectedValue}
              onInput={handleRangeChange}
            />
            <span>1000</span>

            <p>Selected Value: {selectedValue}</p>
          </div>
        </div>
        <hr />
        <div style={{ borderTop: "3px solid gray" }}>
          <div className="d-flex justify-content-between align-items-center mx-5 mt-5 flex-md-row flex-sm-column">
            <button
              type="button"
              class="btn mx-1 px-3 text-center text-light"
              style={{ backgroundColor: "gray" }}
            >
              Back
            </button>
            <button
              type="button"
              class="btn btn btn-light mx-1 px-3 text-center"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Common;
