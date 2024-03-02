import axios, { AxiosResponse } from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

interface FetchApiResponse {
  data: any; // Adjust the type based on your actual response structure
}

export const fetchApi = async ({ url }: { url: string }): Promise<FetchApiResponse> => {
  try {
    const response: AxiosResponse<FetchApiResponse> = await axios.get(url, {
      headers: {
        'X-RapidAPI-Key': '53e1774125msh01752778d706fa6p1c036ajsnbbddf2014caa',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
      },
    });

    return response.data;
  } catch (error) {
    // Handle errors, e.g., log or throw a custom error
    console.error('Error during API request:', error);
    throw error;
  }
};
