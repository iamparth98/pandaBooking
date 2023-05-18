import React from "react";
import "./propertyList.css";

function PropertyList() {
  return (
    <div className="PList">
      <div className="PListItem">
        <img
          src="https://images.unsplash.com/photo-1596386461350-326ccb383e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1113&q=80"
          alt=""
        />
        <div className="PListTitles">
          <h1>Hotels</h1>
          <h2>233 Properties</h2>
        </div>
      </div>
      <div className="PListItem">
        <img
          src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1980&q=80"
          alt=""
        />
        <div className="PListTitles">
          <h1>Apartments</h1>
          <h2>233 Properties</h2>
        </div>
      </div>
      <div className="PListItem">
        <img
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          alt=""
        />
        <div className="PListTitles">
          <h1>Villas</h1>
          <h2>233 Properties</h2>
        </div>
      </div>
      <div className="PListItem">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
          alt=""
        />
        <div className="PListTitles">
          <h1>Resorts</h1>
          <h2>233 Properties</h2>
        </div>
      </div>
      <div className="PListItem">
        <img
          src="https://images.unsplash.com/photo-1587061949409-02df41d5e562?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <div className="PListTitles">
          <h1>Cabins</h1>
          <h2>233 Properties</h2>
        </div>
      </div>
    </div>
  );
}

export default PropertyList;
