import { createSlice } from "@reduxjs/toolkit";
import { priceVariable } from "./data";

const initialState = {
  price: priceVariable[0],
  typeHouse: "Дома" || "Квартиры" || "Комерческое недвижиомть" || "Участки",
  comfort: {
    pool: false,
    gym: false,
    garage: false,
    parking: false,
    garden: false,
    fireplace: false,
    elevator: false,
    clubhouse: false,
    laundry: false,
    area: false,
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    // price
    setPrice: (state, { payload }) => {
      state.price = payload;
    },
    setPriceClear: (state) => {
      state.price.min = 0;
      state.price.max = 0;
    },

    // typeHouses
    setTypeHouse: (state, { payload }) => {
      state.typeHouse = payload;
    },

    // comfort
    setPool: (state) => {
      state.comfort.pool = !state.comfort.pool;
    },
    setGym: (state) => {
      state.comfort.gym = !state.comfort.gym;
    },
    setGarage: (state) => {
      state.comfort.garage = !state.comfort.garage;
    },
    setParking: (state) => {
      state.comfort.parking = !state.comfort.parking;
    },
    setGarden: (state) => {
      state.comfort.garden = !state.comfort.garden;
    },
    setFireplace: (state) => {
      state.comfort.fireplace = !state.comfort.fireplace;
    },
    setElevator: (state) => {
      state.comfort.elevator = !state.comfort.elevator;
    },
    setClubhouse: (state) => {
      state.comfort.clubhouse = !state.comfort.clubhouse;
    },
    setLaundry: (state) => {
      state.comfort.laundry = !state.comfort.laundry;
    },
    setArea: (state) => {
      state.comfort.area = !state.comfort.area;
    },

    // clear filter
    setClearFilter: () => {
      return initialState;
    },
  },
});

export const {
  setPrice,
  setTypeHouse,
  setPool,
  setGym,
  setGarage,
  setParking,
  setGarden,
  setFireplace,
  setElevator,
  setClubhouse,
  setLaundry,
  setArea,
  setClearFilter,
  setPriceClear,
} = filterSlice.actions;
export default filterSlice;
