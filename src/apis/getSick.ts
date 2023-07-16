import { SickProps } from "../types/sick";
import client from "./axisoInstance";

export const getSick = (disease: string) =>
  client.get<SickProps>(`/sick?q=${disease}`);
