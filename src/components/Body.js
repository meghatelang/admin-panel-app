import React, {useState} from "react";
import UserList from './UserList';
import UserProfile from './UserProfile';

const Body = () => {
    const [ activeTab, setActiveTab ] = useState('userList');

    const handleTabs = (tabName) => {
        if (tabName != activeTab) {
        setActiveTab(tabName);
        }
    }

  return (
    <div
      className="row shadow-sm"
      style={{
        height: "90%",
        paddingLeft: "15px",
        display: "block",
      }}
    >
      <h4 className="text-primary">Details</h4>
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" onClick={() => handleTabs('userList')}>
              User List
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => handleTabs('userProfile')}>User Profile</a>
          </li>
        </ul>
        {activeTab == 'userList' ? <UserList/> : <UserProfile/>}
      </div>
    </div>
  );
};

export default Body;
