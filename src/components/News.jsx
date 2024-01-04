import React from "react";

const News = () => {
  return (
    <div className="ms-2 mt-5">
      <h5 style={{fontSize:'14px'}}>Which type of “News” content do you want to create?</h5>

      <div className="row me-5">
        <div className="col-sm-3 col-md-3">
        <select class="form-select  w-100  mt-3" aria-label="Default select example">        <option selected>Select</option>

        <option>Citizen journalism</option>
        <option value="1">Whistleblower influence</option>
        <option value="2">Fake news</option>
        <option value="3">Print media survival</option>
        <option value="4">Social media news</option>
        <option value="5">Cybersecurity news</option>
        <option value="6">Democratic media</option>
        <option value="7">News deserts</option>
        <option value="8">News economics</option>
        <option value="9">Broadcast evolution</option   >

      </select>
    </div>
    </div>
    </div>
  );
};

export default News;
