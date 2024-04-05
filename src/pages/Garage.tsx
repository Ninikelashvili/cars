import { useEffect, useState } from "react";
import { getCars } from "../features/Cars/CarsSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";

const Garage = () => {
    const [responseMessage, setResponseMessage] = useState("");
    const [page, setPage] = useState(1); 
    const [limit, setLimit] = useState(4);
    const dispatch: AppDispatch = useDispatch();
    const { cars, isLoading, isError, message, totalCount } = useSelector(
        (state: RootState) => state.cars
    );

    useEffect(() => {
        dispatch(getCars({ page, limit }));
    }, [dispatch, page, limit]);

    useEffect(() => {
        if (isError) {
            setResponseMessage(message);
        }
    }, [isError, message]);

    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    if (isLoading) return <h1>Spinner</h1>;

    return (
        <div className="">
            {isError ? (
                <>{responseMessage}</>
            ) : (
                <div>
                    <ul>
                        {cars &&
                            cars.map((car) => <li key={car.id}>{car.name}</li>)}
                    </ul>
                    <button onClick={handlePreviousPage} disabled={page === 1}>
                        Previous
                    </button>
                    <button
                        onClick={handleNextPage}
                        disabled={page * limit >= totalCount}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default Garage;
