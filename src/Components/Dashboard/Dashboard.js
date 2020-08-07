import React from 'react';
import './App.css';
import Product from './Product/Product'

function Dashboard() {
    return (
      <div className="Dashboard">
          <h1>Dashboard</h1>
          <Product />
          {/* {this.state.inventory.map((element) => {
              <Product />
          })} */}
      </div>
    );
  }
  
  export default Dashboard;
  