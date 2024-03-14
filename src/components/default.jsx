import React from 'react';

export const Default = () => (
  <>
    <div className='container'>
      <h3 className='pt-4' style={{textAlign: 'center'}}>Trend</h3>    
      
      <div className='table-responsive'>
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Crops</th>
              {/* <th>Name</th> */}
              <th>High</th>
              <th>Avg</th>
              <th>Low</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              {/* <td>john@example.com</td> */}
              <td>30</td>
              <td>30</td>
              <td>30</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jane Smith</td>
              {/* <td>jane@example.com</td> */}
              <td>25</td>
              <td>30</td>
              <td>30</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Mike Johnson</td>
              {/* <td>mike@example.com</td> */}
              <td>35</td>
              <td>30</td>
              <td>30</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Mike Johnson</td>
              {/* <td>mike@example.com</td> */}
              <td>35</td>
              <td>30</td>
              <td>30</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Mike Johnson</td>
              {/* <td>mike@example.com</td> */}
              <td>35</td>
              <td>30</td>
              <td>30</td>
            </tr>
          </tbody>
        </table>
      </div>
        
    </div>
    
    <div className='mt-2 container'>
      <h3 className='pt-5' style={{textAlign: 'center'}}>Blogs</h3>
      <div className='row'>
        
        <div className='col-sm-12 col-md-4 col-lg-4'>
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>


        <div className='col-sm-12 col-md-4 col-lg-4'>
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>


        <div className='col-sm-12 col-md-4 col-lg-4'>
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </>
);