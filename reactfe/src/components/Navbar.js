import React from 'react';
//import classNames from 'classnames';

const Navbar = () => {
    return (
      <nav className="bg-gray-800">
        <div className="container mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <svg className="h-6 w-6 text-white" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span className="ml-2 text-xl text-white font-medium">Notes</span>
          </div>
        </div>
      </nav>
    )
  }

  export default Navbar