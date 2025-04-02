import React from 'react';
import Navbar from './shared/Navbar';
import Job from './Job';
import Footer from './Footer';

const randomJobs = [1, 2, 3,4];

function Browse() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10 px-4">
        <h1 className="text-2xl font-semibold mb-6">
          Search Results: {randomJobs.length}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {randomJobs.map((item, index) => (
            <Job/>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Browse;
