import React, { useState } from 'react';

import { Default } from './default'
import { Page1 } from './page1'
import { Page2 } from './page2'
import { Page3 } from './page3'

export const Main = () => {
    const [activeTab, setActiveTab] = useState('default');
    console.log(activeTab)

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
    return(
        <>
            <nav className="nav bg-light">
              <a className= "{activeTab === 'page1' ? 'active' : ''} nav-link" onClick={() => handleTabClick('page1')}>Page1</a>
              <a className= "{activeTab === 'page2' ? 'active' : ''} nav-link" onClick={() => handleTabClick('page2')}>Page2</a>
              <a className= "{activeTab === 'page3' ? 'active' : ''} nav-link" onClick={() => handleTabClick('page3')}>Page3</a>
            </nav>

            <div className="tab-content">
              {activeTab === 'default' && <Default />}
              {activeTab === 'page1' && <Page1 />}
              {activeTab === 'page2' && <Page2 />}
              {activeTab === 'page3' && <Page3 />}
            </div>

            <footer className="mt-5 container">
              <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
              </ul>
              <p className="text-center text-muted">&copy; 2024-25 AgriConnect Private LTD.</p>
            </footer>
        </>
    )
}