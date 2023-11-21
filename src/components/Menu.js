import React from "react";

const Menu = () => {
  return (
    <div className="container mt-4">
      <h4 className="display-4 mb-4">Our Menu</h4>

      <div className="card bg-light mb-4">
        <div className="card-body">
          <h5 className="card-title">Appetizers</h5>
          <ul className="list-group">
            <li className="list-group-item">Baked Burrata</li>
            <li className="list-group-item">Fried Green Tomatoes</li>
            <li className="list-group-item">Veg Sandwich</li>
            <li className="list-group-item">Ghee Roast</li>
            <li className="list-group-item">Onion Roast</li>
          </ul>
        </div>
      </div>

      <div className="card bg-light mb-4">
        <div className="card-body">
          <h5 className="card-title">Salads</h5>
          <ul className="list-group">
            <li className="list-group-item">House Salad</li>
            <li className="list-group-item">Melon Salad</li>
            <li className="list-group-item">Sweet Corn Veg</li>
            <li className="list-group-item">Tomato Grilled Cheese Soup</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
