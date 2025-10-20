import { Search, X } from "lucide-react";
import { useEffect, useState, useCallback, useMemo } from "react";
import { useGetProductsQuery } from "../../api/productsApi";
import { useNavigate } from "react-router-dom";

function SearchBar({ search }) {
  const navigate = useNavigate();
  const { data: products, isLoading, isError, error } = useGetProductsQuery();
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);


  const searchResult = useMemo(() => {
    if (!products || !debouncedQuery.trim()) {
      return [];
    }

    return products.filter((product) =>
      product.title?.toLowerCase().includes(debouncedQuery.toLowerCase()),
    );
  }, [products, debouncedQuery]);


  const handleProductSelect = useCallback(
    (item) => {
      setSearchQuery("");
      if (search) {
        search();
      }
      navigate(`/products/slug/${item.slug}`);
    },
    [navigate, search]
  );


  const handleInputChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);


  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (searchResult.length > 0) {
        handleProductSelect(searchResult[0]);
      }
    },
    [searchResult, handleProductSelect]
  );


  const handleClose = useCallback(
    (e) => {
      e.preventDefault();
      setSearchQuery("");
      if (search) {
        search();
      }
    },
    [search]
  );

  return (
    <>
      <form
        className="relative flex items-center justify-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          className="w-50 sm:w-56 md:w-64 lg:w-72 border border-gray-300 rounded-full pl-10 pr-10 py-2 md:py-2.5 lg:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all duration-200"
          placeholder="Search products..."
          autoComplete="off"
          disabled={isLoading}
        />

        <button
          type="button"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
        >
          <Search className="h-4 w-4 md:h-5 md:w-5" />
        </button>

        <button
          type="button"
          onClick={handleClose}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 rounded-full hover:bg-gray-100 active:bg-gray-100 flex items-center justify-center transition-colors duration-200"
          aria-label="Close search"
        >
          <X className="h-4 w-4" />
        </button>
      </form>

      {/* Search Results Dropdown */}
      {searchQuery.trim() && (
        <div className="absolute top-18 left-0 lg:left-90 xl:left-200 right-0  max-w-xs sm:max-w-sm md:max-w-md bg-white border border-gray-300 rounded-lg shadow-lg z-50 mx-auto">
          <div className="max-h-60 overflow-y-auto">
            {/* Loading State */}
            {isLoading && (
              <div className="px-4 py-3 text-center text-gray-500">
                <div className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-teal-600"></div>
                <span className="ml-2">Searching...</span>
              </div>
            )}


            {isError && (
              <div className="px-4 py-3 text-center text-red-500">
                <p>Error loading products</p>
                {error?.message && (
                  <p className="text-xs text-gray-500 mt-1">{error.message}</p>
                )}
              </div>
            )}


            {!isLoading &&
              !isError &&
              debouncedQuery.trim() &&
              searchResult.length === 0 && (
                <div className="px-4 py-3 text-center text-gray-500">
                  No products found for "{debouncedQuery}"
                </div>
              )}

            {/* Search Results */}
            {!isLoading && !isError && searchResult.length > 0 && (
              <ul  className="py-1">
                {searchResult.slice(0, 8).map((item) => (
                  <li
                    key={item.id}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-150 border-b border-gray-100 last:border-b-0"
                    onClick={() => handleProductSelect(item)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-900 truncate flex-1">
                        {item.title}
                      </span>
                    </div>
                  </li>
                ))}

                {searchResult.length > 8 && (
                  <li className="px-4 py-2 text-center text-xs text-gray-500 bg-gray-50">
                    +{searchResult.length - 8} more results
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default SearchBar;
