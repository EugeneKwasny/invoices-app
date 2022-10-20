import React from 'react';

//icons
import iconBell from './imgs/icon-bell.svg';
import iconDashboard from './imgs/icon-dashboard.svg';
import iconEmail from './imgs/icon-email.svg';
import iconArrowThin from './imgs/icon-arrow-thin.svg';
import iconArrow from  './imgs/icon-arrow.svg';
import iconComment from './imgs/icon-comment.svg';
import iconThumbnail from './imgs/icon-thumbnail.svg';
import iconDots from './imgs/icon-dots.svg';
import iconContact from './imgs/icon-contact.svg';
import iconCalendar from './imgs/icon-calendar-silhouette.svg';
import iconSettings from './imgs/icon-setting.svg';
import iconInvoice from './imgs/icon-invoice.svg';
import iconGift from './imgs/icon-gift.svg';
import iconCheckbox from './imgs/icon-checkbox.svg';
import iconOffice from './imgs/icon-office.svg';
import iconTriangle from './imgs/icon-triangle.svg';
import iconProfile from './imgs/icon-profilePicture.svg';
import iconChecked from  './imgs/icon-checked.svg';
import iconCheckedDouble from  './imgs/icon-checked-double.svg';
import iconClock from './imgs/icon-clock.svg';
import iconArrowLeft from './imgs/icon-arrow-left.svg';
import iconArrowRight from './imgs/icon-arrow-right.svg';
import iconOption from  './imgs/icon-option.svg';

function App() {
  return (
    <main>
      <aside>
        <nav>
        <div>
          <a href="/">Invoices</a>
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div>Main menu</div>
        <div>
          <ul>
            <li>
              <span>
                <img src={iconDashboard} alt="icon-dashboard" />
              </span>
              <span>Dashboard</span>
            </li>
            <li>
              <span>
                <img src={iconEmail} alt="icon-email" />
              </span>
              <span>Email</span>
              <span>17</span>
              <span>
                <img src={iconArrow} alt="icon-arrow"  />
              </span>
            </li>
            <li>
              <span>
                <img src={iconComment} alt="icon-comment" />
              </span>
              <span>Chat</span>
            </li>
            <li>
              <span>
              <img src={iconThumbnail} alt="icon-thumbnail"  />
              </span>
              <span>Kanban</span>
              <span>
                <img src={iconArrow} alt="icon-arrow"  />
              </span>
            </li>
            <li>
              <span>
                <img src={iconContact} alt="icon-contact"  />
              </span>
              <span>Contact</span>
              <span>
                New
              </span>
            </li>
            <li>
              <span>
                <img src={iconCalendar} alt="icon-calendar" />
              </span>
              <span>Calendar</span>
            </li>
            <li>
              <span>
                <img src={iconInvoice} alt="icon-invoice" />
              </span>
              <span>Invoices</span>
              <span>
                  <img src={iconArrow} alt="icon-arrow"  />
              </span>
            </li>
            <li>
              <span>
                <img src={iconSettings} alt="icon-settings" />
              </span>
              <span>Settings</span>
              <span>
                <img src={iconArrow} alt="icon-arrow"  />
              </span>
            </li>
          </ul>
        </div>
        <div>
          <span>
            <img src={iconDots}  alt="icon-dots" />
          </span>
          Increase your work with kanban
          <span>
            <img src={iconArrowThin} alt="icon-arrow-thin" />
          </span>
        </div>
      </nav>
      </aside>
      <section>
        <header>
          <form>
            <input type="search" name="s"  defaultValue="" placeholder="Search here"/>
            <input type="submit" value="Submit"/>
          </form>
          <nav>
            <ul>
              <li>
                <span>
                  <img src={iconBell} alt="icon-bell" />
                  <span>12</span>
                </span>
              </li>
              <li>
                <span>
                  <img src={iconGift} alt="icon-gift" />
                  <span>5</span>
                </span>
              </li>
              <li>
                <span>
                  <img src={iconCheckbox} alt="icon-checkbox" />
                  <span>2</span>
                </span>
              </li>
              <li>
                <span>
                  <img src={iconOffice} alt="icon-office" />
                  <span>!</span>
                </span>
              </li>
            </ul>
          </nav>
          <select name='select'>
            <option value="english">English</option>
            <option value="other" selected>Other language</option>
          </select>
          <div>
            <img src={iconProfile} alt="icon-profile" />
            <div>
             <span>
              Franklin Jr.
              </span> 
              <span>
                Super Admin
              </span>
            </div>
            <img src={iconTriangle} alt="icon-triangle" />
          </div>
        </header>
        <section>
          <header>
            <div>
              <h1>Invoices List</h1>
              <p>Lorem ipsum  dolor sit amet</p>
            </div>
            <div>
              <form>
                <input type="search" name="s"  defaultValue="" placeholder="Search here"/>
                <input type="submit" value="Submit"/>
              </form>
            </div>
            <div>
              <a href="/create-invoice">
                <span>
                  <img src={iconInvoice}  alt="icon-invoice" />
                </span>
                Create invoice
              </a>
            </div>
          </header>
          <main>
            <div>
              <div>
                <input type="checkbox"/>
              </div>
              <div>
                ID Invoice
              </div>
              <div>
                Due Date
              </div>
              <div>
                Client
              </div>
              <div>
                Contact
              </div>
              <div>
                Amount
              </div>
              <div>
                Status
              </div>
            </div>
            <div>
            <div>
                <input type="checkbox"/>
              </div>
              <div>
                #INV-0001234
              </div>
              <div>
                June 1, 2020, 08:22 AM
              </div>
              <div>
                <div>
                  <div>
                    <img src={iconProfile} alt="icon-profile" />
                  </div>
                  <div>
                    Higspeed Studios
                  </div> 
                  <div>
                    Creative Agency
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <span>
                    <img src={iconEmail} alt="icon-email" />
                  </span>
                  highspeed@mail.com
                </div>
              </div>
              <div>
                $ 650,036.34
              </div>
              <div>
                <div>
                  <img src={iconChecked} alt="icon-checked" />
                  Completed
                </div>
                <div>
                  <img src={iconOption} alt="icon-option" />
                </div>
              </div>
            </div>
            <div>
            <div>
                <input type="checkbox"/>
              </div>
              <div>
                #INV-0001234
              </div>
              <div>
                June 1, 2020, 08:22 AM
              </div>
              <div>
                <div>
                  <div>
                    <img src={iconProfile} alt="icon-profile" />
                  </div>
                  <div>
                    Higspeed Studios
                  </div> 
                  <div>
                    Creative Agency
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <span>
                    <img src={iconEmail} alt="icon-email" />
                  </span>
                  highspeed@mail.com
                </div>
              </div>
              <div>
                $ 650,036.34
              </div>
              <div>
                <div>
                  <img src={iconClock} alt="icon-clock" />
                  Pending
                </div>
                <div>
                  <img src={iconOption} alt="icon-option" />
                </div>
              </div>
            </div>
            <div>
            <div>
                <input type="checkbox"/>
              </div>
              <div>
                #INV-0001234
              </div>
              <div>
                June 1, 2020, 08:22 AM
              </div>
              <div>
                <div>
                  <div>
                    <img src={iconProfile} alt="icon-profile" />
                  </div>
                  <div>
                    Higspeed Studios
                  </div> 
                  <div>
                    Creative Agency
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <span>
                    <img src={iconEmail} alt="icon-email" />
                  </span>
                  highspeed@mail.com
                </div>
              </div>
              <div>
                $ 650,036.34
              </div>
              <div>
                <div>
                  <img src={iconCheckedDouble} alt="icon-checked-double" />
                  Invoice Sent
                </div>
                <div>
                  <img src={iconOption} alt="icon-option" />
                </div>
              </div>
            </div>
          </main>
          <footer>
            <div>
              Showing 1-10 from 46 data
            </div>
            <div>
              <ul>
                <li>
                  <img src={iconArrowLeft} alt="icon-arrow-left" />
                </li>
                <li><a href="?page=2">2</a></li>
                <li><a href="?page=3">3</a></li>
                <li><a href="?page=4">4</a></li>
                <li><a href="?page=5">5</a></li>
                <li>
                  <img src={iconArrowRight} alt="icon-arrow-right" />
                </li>
              </ul>
            </div>
          </footer>
        </section>
      </section>
    </main>  
  );
}

export default App;
