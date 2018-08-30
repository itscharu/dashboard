export const UPDATE_PIE_CHARTS_STATS = 'UPDATE_PIE_CHARTS_STATS';

export function selectValueDropDown(selectedValue) {
  return {
    type: UPDATE_PIE_CHARTS_STATS,
    payload:selectedValue
  };
}