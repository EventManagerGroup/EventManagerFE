import {SidebarData} from './Component2/SidebarData';
import {Outlet} from 'react-router-dom';

function Sidebar(){
  return (
    <div>
      <div className="sidebar">
        <ul className="sidebarList">
          {SidebarData.map((val, key) => {
            return(
              <li
                key={key}
                className= "row"
                id={window.location.pathname === val.path ? "active" : ""}
                onClick={()=>{
                  window.location.pathname = val.path;
                }}
              >
                <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Sidebar;
