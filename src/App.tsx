import React from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from './components/Layout';
import Invoice from './features/invoice/Invoice';
import InvoiceList from './features/invoiceList/InvoiceList';
import InvoiceCreate from './components/InvoiceCreate';


function App() {
  return (
    <Routes>
       <Route path="/" element={<Layout />}>
        <Route index element={<InvoiceList />} />
        <Route path="invoice/detail" element={<Invoice />}/>
        <Route path="invoice/create" element={<InvoiceCreate />} />
     

        {/* <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />

        {/* Using path="*"" means "match anything", so this route
              acts like a catch-all for URLs that we don't have explicit
              routes for. */}
        {/* <Route path="*" element={<NoMatch />} /> */ }
      </Route>
      </Routes>
  );
}

export default App;
