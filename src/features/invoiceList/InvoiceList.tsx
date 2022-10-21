import React from "react";
import icons from  '../../components/icons';

export default function InvoiceList()
{
    return (
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
                <img src={icons.iconInvoice}  alt="icon-invoice" />
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
                  <img src={icons.iconProfile} alt="icon-profile" />
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
                  <img src={icons.iconEmail} alt="icon-email" />
                </span>
                highspeed@mail.com
              </div>
            </div>
            <div>
              $ 650,036.34
            </div>
            <div>
              <div>
                <img src={icons.iconChecked} alt="icon-checked" />
                Completed
              </div>
              <div>
                <img src={icons.iconOption} alt="icon-option" />
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
                  <img src={icons.iconProfile} alt="icon-profile" />
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
                  <img src={icons.iconEmail} alt="icon-email" />
                </span>
                highspeed@mail.com
              </div>
            </div>
            <div>
              $ 650,036.34
            </div>
            <div>
              <div>
                <img src={icons.iconClock} alt="icon-clock" />
                Pending
              </div>
              <div>
                <img src={icons.iconOption} alt="icon-option" />
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
                  <img src={icons.iconProfile} alt="icon-profile" />
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
                  <img src={icons.iconEmail} alt="icon-email" />
                </span>
                highspeed@mail.com
              </div>
            </div>
            <div>
              $ 650,036.34
            </div>
            <div>
              <div>
                <img src={icons.iconCheckedDouble} alt="icon-checked-double" />
                Invoice Sent
              </div>
              <div>
                <img src={icons.iconOption} alt="icon-option" />
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
                <img src={icons.iconArrowLeft} alt="icon-arrow-left" />
              </li>
              <li><a href="?page=2">2</a></li>
              <li><a href="?page=3">3</a></li>
              <li><a href="?page=4">4</a></li>
              <li><a href="?page=5">5</a></li>
              <li>
                <img src={icons.iconArrowRight} alt="icon-arrow-right" />
              </li>
            </ul>
          </div>
        </footer>
      </section>
    );
}