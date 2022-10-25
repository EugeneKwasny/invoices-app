import React from 'react';
import icons from  './icons';
import { Outlet, Link } from "react-router-dom";

export default function Layout()
{
    return(
        <div className='bg-slate-50'>
          <header className="py-8 px-4 bg-white">
            <div className="flex place-content-between">
              <Link to="/">
                <img src={icons.logo} alt="logo" />
              </Link>
              <div className='py-3.5 px-2.5 space-y-1'>
                <span className='block w-6 h-1 bg-black rounded'></span>
                <span className='block w-6 h-1 bg-black rounded'></span>
                <span className='block w-6 h-1 bg-black rounded'></span>
              </div>
            </div>
            <div className="hidden">
            <form>
                <input type="search" name="s"  defaultValue="" placeholder="Search here"/>
                <input type="submit" value="Submit"/>
              </form>
              <nav>
                <ul>
                  <li>
                    <span>
                      <img src={icons.iconBell} alt="icon-bell" />
                      <span>12</span>
                    </span>
                  </li>
                  <li>
                    <span>
                      <img src={icons.iconGift} alt="icon-gift" />
                      <span>5</span>
                    </span>
                  </li>
                  <li>
                    <span>
                      <img src={icons.iconCheckbox} alt="icon-checkbox" />
                      <span>2</span>
                    </span>
                  </li>
                  <li>
                    <span>
                      <img src={icons.iconOffice} alt="icon-office" />
                      <span>!</span>
                    </span>
                  </li>
                </ul>
              </nav>
              <select name='select' defaultValue='english'>
                <option value="english">English</option>
                <option value="other">Other language</option>
              </select>
              <div>
                <img src={icons.iconProfile} alt="icon-profile" />
                <div>
                <span>
                  Franklin Jr.
                  </span> 
                  <span>
                    Super Admin
                  </span>
                </div>
                <img src={icons.iconTriangle} alt="icon-triangle" />
              </div>
            </div>

            </header>
          <main className='px-4 py-5'>
            {<Outlet />}
          </main>
          <aside>
            <nav>
            <div>Main menu</div>
            <div>
              <ul>
                <li>
                  <span>
                    <img src={icons.iconDashboard} alt="icon-dashboard" />
                  </span>
                  <span>Dashboard</span>
                </li>
                <li>
                  <span>
                    <img src={icons.iconEmail} alt="icon-email" />
                  </span>
                  <span>Email</span>
                  <span>17</span>
                  <span>
                    <img src={icons.iconArrow} alt="icon-arrow"  />
                  </span>
                </li>
                <li>
                  <span>
                    <img src={icons.iconComment} alt="icon-comment" />
                  </span>
                  <span>Chat</span>
                </li>
                <li>
                  <span>
                  <img src={icons.iconThumbnail} alt="icon-thumbnail"  />
                  </span>
                  <span>Kanban</span>
                  <span>
                    <img src={icons.iconArrow} alt="icon-arrow"  />
                  </span>
                </li>
                <li>
                  <span>
                    <img src={icons.iconContact} alt="icon-contact"  />
                  </span>
                  <span>Contact</span>
                  <span>
                    New
                  </span>
                </li>
                <li>
                  <span>
                    <img src={icons.iconCalendar} alt="icon-calendar" />
                  </span>
                  <span>Calendar</span>
                </li>
                <li>
                  <span>
                    <img src={icons.iconInvoice} alt="icon-invoice" />
                  </span>
                  <span>Invoices</span>
                  <span>
                      <img src={icons.iconArrow} alt="icon-arrow"  />
                  </span>
                </li>
                <li>
                  <span>
                    <img src={icons.iconSettings} alt="icon-settings" />
                  </span>
                  <span>Settings</span>
                  <span>
                    <img src={icons.iconArrow} alt="icon-arrow"  />
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <span>
                <img src={icons.iconDots}  alt="icon-dots" />
              </span>
              Increase your work with kanban
              <span>
                <img src={icons.iconArrowThin} alt="icon-arrow-thin" />
              </span>
            </div>
          </nav>
          </aside>
    </div>  
    );
}