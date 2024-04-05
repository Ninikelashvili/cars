import axios, { AxiosResponse } from "axios";

interface Car {
    name: string;
    color: string;
    id: number;
}

interface GetCarsResponse {
    cars: Car[];
    totalCount: number;
}

const getCars = async (page?: number, limit?: number): Promise<GetCarsResponse> => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
        params: {
            _page: page,
            _limit: limit
        }
    };
    const response: AxiosResponse<Car[]> = await axios.get(
        `${process.env.REACT_APP_API_URL}/garage`,
        config
    );

    const totalCount = Number(response.headers['x-total-count']);

    return {
        cars: response.data,
        totalCount: totalCount
    };
};

const carsService = {
    getCars,
};

export default carsService;
