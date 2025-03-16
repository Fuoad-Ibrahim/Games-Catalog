
function SearchBar({handleSearch, updateSearchQuery, searchQuery}){
    return (
        <div className="container my-5">
            <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
                <form onSubmit={handleSearch} className="d-flex">
                <input 
                    type="text"
                    className="form-control rounded-3 me-2 px-3 py-2"
                    placeholder="Search for games..." 
                    value={searchQuery}
                    onChange={(e) => updateSearchQuery(e.target.value)}
                    style={{ backgroundColor: "#12303b", borderColor: "#0E4D2F", color: "white" }}
                />
                <button className="btn btn-danger rounded-3 px-4 py-2" type="submit">Search</button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default SearchBar