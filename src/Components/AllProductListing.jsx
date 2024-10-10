import React, { useState } from 'react';
import  Listingproducts  from "./Products";


const AllProductListing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 8; // Define how many items you want per page

  // Function to handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
    setCurrentPage(1); // Reset to the first page on new search
  };

  // Filtered data based on the search term
  const filteredData = Listingproducts.filter((item) =>
    item.productdescription?.toLowerCase().includes(searchTerm)
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  // Function to handle page change
  const handlePageChange = (direction) => {
    if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="p-6 bg-gray-0 ">

      {/* Search input */}
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search for products, brands, categories . . ."
          value={searchTerm}
          onChange={handleSearch}
          className="px-4 py-2 w-[30rem] border border-gray-300 rounded-lg shadow-lg md:w-1/2"
        />
      </div>



 <div className=" gap- grid grid-cols-2 md:grid md:grid-cols-8 mt-4">

                 {paginatedData.length > 0 ? (
                   paginatedData.map((item) => (

                 <div key={item.id}  className='bg-slate-100 rounded-md w-36 p-2 my-3 flex flex-col items-center justify-center shadow-lg relative hover:scale-105'>
                    <span className='bg-orange-100 text-orange-600 w-10   absolute right-0 top-0 font-medium flex justify-center'>{item.discount}</span>
                    <img src={item.image}className='h-24 w-24 ' alt="" />
                    <p className='mt-2 uppercase'>{item.productdescription}</p>
                    <div className='text-sm mt-1'>
                        <span className='font-bold mr-2'> ₦{item.currentprice} </span>
                        <span className='line-through text-gray-500'> {item.oldprice}</span>
                    </div>
                    <a href="https://wa.link/kp1lwl">
             <button className='bg-orange-400 font-semibold text-white px-6 py-1 mt-2 rounded-md hover:text-black'>BUY NOW</button>
                    </a>

                  </div>


          ))
        ) : (
          <p className="flex flex-col justify-center md:flex md:justify-end">
            <span className='font-mono font-semibold'>
            Sorry,  you could not find your prefered Item chat us now to get your prefered Item

            </span>
             <button className=" mt-4">
                  <a
                    href="https://wa.link/vpgifv"
                    className="
                    
                    bg-orange-500 text-white p-2
                    rounded-md hover:text-black
                     hover:bg-orange-400 "
                  >
                    Chat Now 
                  </a>
                </button>
          </p> // Show 'None' when no results are found
        )}
        </div>

      {/* Pagination Controls */}
      {filteredData.length > itemsPerPage && (
        <div className="flex justify-center items-center space-x-4 mt-6">
          <button
            onClick={() => handlePageChange('prev')}
            disabled={currentPage === 1}
            className={`px-2 py-1 rounded-lg text-xs ${currentPage === 1 ? 'bg-orange-200' : 'bg-orange-500 text-white hover:bg-orange-100 hover:text-black'} transition-colors`}
          >
            PREV
          </button>

          <span className="text-gray-500">
             <strong className='font-mono'></strong> {currentPage} / {totalPages}
          </span>
            
          <button
            onClick={() => handlePageChange('next')}
            disabled={currentPage === totalPages}
            className={`px-2 py-1 rounded-lg text-xs ${currentPage === totalPages ? 'bg-orange-200' : 'bg-orange-500 text-white  hover:text-black'} transition-colors`}
          >
            NEXT
          </button>
        </div>
      )}

      
    </div>
  );
};

export default AllProductListing;
