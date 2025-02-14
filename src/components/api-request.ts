import axios from "axios";
import { Image } from "../App";

const API_KEY = "3BWtJcI7eBtJex-ODxYLWGZ3WTdAlJGuTrtg7RK0FLo";

type ApiResponse = {
  total_pages: number;
  results: Image[];
};

export const fetchImages = async (
  query: string,
  page: number
): Promise<ApiResponse> => {
  const { data } = await axios.get<ApiResponse>(
    `https://api.unsplash.com/search/photos/?client_id=${API_KEY}`,
    {
      params: {
        query,
        page,
      },
    }
  );
  return data;
};
