import axios from "axios";
import INumberInterface from "../interfaces/INumberInterface";
import NumberPaginationTypes from "./types/numberPaginationTypes";

const API_URL = "http://localhost:3001/items"; // We should save this URL in a .env file

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const getNumbers = async (
  page: number = 1,
  limit: number = 10
): Promise<{ data: INumberInterface[]; total: number, pages: number }> => {
  const { data: allData } = await axios.get<NumberPaginationTypes>(API_URL, { params: { _page: page, _per_page: limit } });

  await delay(2000);

  return { data: allData.data, total: allData.items, pages: allData.pages };
};

const getStoredNumbers = async (): Promise<INumberInterface[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getNextId = async (): Promise<number> => {
  const numbers = await getStoredNumbers();
  const maxId = numbers.length ? Math.max(...numbers.map((num) => Number(num.id))) : 0;
  return maxId + 1;
};

export const addNumber = async (
  newNumber: Omit<INumberInterface, "id">
) => {
  const nextId = await getNextId();

  await axios.post<INumberInterface>(API_URL, { ...newNumber, id: nextId.toString() });
  await delay(2000);
};

export const deleteNumber = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
  await delay(2000);
};

export const updateNumber = async (
  updatedNumber: INumberInterface
): Promise<INumberInterface> => {
  const { data } = await axios.put<INumberInterface>(
    `${API_URL}/${updatedNumber.id}`,
    updatedNumber
  );
  await delay(2000);

  return data;
};
