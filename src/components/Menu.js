import React from "react";

const Menu = () => {
  return (
    <section id="menu">
      <div className="container mt-4">
        <h2 className="mb-4">Our Menu</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card bg-light">
              <div className="card-body">
                <h4 className="mb-4">Appetizers</h4>
                <ul className="list-group">
                  <li className="list-group-item">Baked Burrata</li>
                  <li className="list-group-item">Fried Green Tomatoes</li>
                  <li className="list-group-item">Veg Sandwich</li>
                  <li className="list-group-item">Ghee Roast</li>
                  <li className="list-group-item">Onion Roast</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card bg-light mb-4">
              <div className="card-body">
                <h4 className="mb-4">Salads</h4>
                <ul className="list-group">
                  <li className="list-group-item">House Salad</li>
                  <li className="list-group-item">Melon Salad</li>
                  <li className="list-group-item">Sweet Corn Veg</li>
                  <li className="list-group-item">
                    Tomato Grilled Cheese Soup
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
