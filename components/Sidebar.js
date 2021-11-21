import {SidebarData} from './SidebarData';

import CardAC from './CardAC';
import Settings from './Settings';

const showCardAC = () =>{
  if(window.location.pathname == "/"){
    return <CardAC />
  }
}

const showSettings = () =>{
  if(window.location.pathname == "/settings"){
    return <Settings />
  }
}

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
                id={window.location.pathname == val.path ? "active" : ""}
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
        {showCardAC()}
        {showSettings()}
      </div>
    </div>
  );
}

export default Sidebar;
