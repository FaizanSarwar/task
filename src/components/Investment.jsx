import React from "react";

const Investment = () => {
  return (
    <div className="ms-2 mt-5">
      <h5 style={{fontSize:'14px'}}>Which type of “Investment” content do you want to create?</h5>

      <div className="row me-5">
        <div className="col-sm-3 col-md-3">
        <select class="form-select  w-100  mt-3" aria-label="Default select example">        <option selected>Select</option>

        <option>Robo-advising</option>
        <option value="1">Geopolitical impacts</option>
        <option value="2">Index funds</option>
        <option value="3">Real estate trends</option>
        <option value="4">Startup investing</option>
        <option value="5">Social trading</option>
         <option value="7">Tax strategies</option>
        <option value="8">Emerging markets</option>
        <option value="9">Financial literacy</option   >
 
      </select>
    </div>
    </div>
    </div>
  );
};

export default Investment;
