import React from 'react';

const Skill = () => {
    return (
        <section className="text-gray-600 body-font" id='skill'>
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 md:pr-12 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Habilidades</h1>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
              </div>
              <div className="flex flex-col md:w-1/2 md:pl-12">
                <h2 className="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3">Back-end y Front-end</h2>
                <nav className="flex flex-wrap list-none -mb-2">
                  <li className="lg:w-1/3 mb-1 w-1/2">
                    <a className="text-gray-600 hover:text-gray-800">HTML</a>
                  </li>
                  <li className="lg:w-1/3 mb-1 w-1/2">
                    <a className="text-gray-600 hover:text-gray-800">CSS</a>
                  </li>
                  <li className="lg:w-1/3 mb-1 w-1/2">
                    <a className="text-gray-600 hover:text-gray-800">JAVASCRIPT</a>
                  </li>
                  <li className="lg:w-1/3 mb-1 w-1/2">
                    <a className="text-gray-600 hover:text-gray-800">BOOTSTRAP</a>
                  </li>
                  <li className="lg:w-1/3 mb-1 w-1/2">
                    <a className="text-gray-600 hover:text-gray-800">PHP</a>
                  </li>
                  <li className="lg:w-1/3 mb-1 w-1/2">
                    <a className="text-gray-600 hover:text-gray-800">SQL</a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
        </section>
    );
};

export default Skill;
