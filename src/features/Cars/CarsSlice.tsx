import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import carsService from "./CarsService";

interface Car {
    name: string;
    color: string;
    id: number;
}

interface CarsState {
    cars: Car[];
    totalCount: number;
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
    message: string;
}

const initialState: CarsState = {
    cars: [],
    totalCount: 0,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

export const getCars = createAsyncThunk<
    { cars: Car[]; totalCount: number },
    { page?: number; limit?: number },
    { rejectValue: { message: string } }
>(
    "cars/get_cars",
    async ({ page, limit }, thunkAPI) => {
        try {
            const response = await carsService.getCars(page, limit);
            return {
                cars: response.cars,
                totalCount: response.totalCount,
            };
        } catch (error) {
            const message = "Error fetching cars";
            return thunkAPI.rejectWithValue({ message: message });
        }
    }
);

export const carsSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCars.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCars.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.cars = action.payload.cars;
                state.totalCount = action.payload.totalCount;
            })
            .addCase(getCars.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload?.message || "Unknown error";
            });
    },
});

export default carsSlice.reducer;
