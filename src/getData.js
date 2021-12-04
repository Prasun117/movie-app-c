import axios from "axios";
import { dataAction } from "./store/DataSlice";

export const getData = async (dispatch, setIsLoading, setError) => {
  setIsLoading(true);
  const responce = await axios.get("sample.json");
  setIsLoading(false);

  if (responce.status !== 200) {
    setError(true);
  } else {
    setError(false);
    dispatch(dataAction.getData(responce.data.entries));
  }
};
