import React from "react";
import "../../App.css";

const Monitor  = () =>{
    return(
         <div className="container-fluid ">
            <div className="row ">
        <div className="card-columns">
            <div className="card-title">
                <p> Monitor  </p>

                
            </div>
  <div className="card bg-primary">
    <div className="card-body text-center">
      <p className="card-text">Some text inside the first card</p>
    </div>
  </div>
  <div className="card bg-warning">
    <div className="card-body text-center">
      <p className="card-text">Some text inside the second card</p>
    </div>
  </div>
  <div className="card bg-success">
    <div className="card-body text-center">
      <p className="card-text">Some text inside the third card</p>
    </div>
  </div>

</div>
</div>
</div>

    )
}

export default Monitor  