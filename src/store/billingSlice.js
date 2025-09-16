import { createSlice } from "@reduxjs/toolkit";

const billingSlice = createSlice({
  name: "billing",
  initialState: {
    isYearly: false,
    selectedPlan: null,
    addons: [],
  },
  reducers: {
    toggleBilling(state) {
      state.isYearly = !state.isYearly;
    },
    setBilling(state, action) {
      state.isYearly = action.payload;
    },
    setSelectedPlan(state, action) {
      state.selectedPlan = action.payload;
    },
    toggleAddon(state, action) {
      const addon = action.payload;
      if (state.addons.includes(addon)) {
        state.addons = state.addons.filter((a) => a !== addon);
      } else {
        state.addons.push(addon);
      }
    },
  },
});

export const { toggleBilling, setBilling, setSelectedPlan, toggleAddon } =
  billingSlice.actions;
export default billingSlice.reducer;
