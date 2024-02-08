import * as fs from "fs";
import { ZodSchema, z } from "zod";

type GetData = {
  <T>(url: string, schema: z.ZodType<T>): Promise<T>;
};

export const getData: GetData = async (url, schema) => {
  const resp = await fetch(url).then((res) => res.json());
  const parsedData = schema.parse(resp);
  return parsedData;
};

export const saveData = async (file: string, data: unknown) => {
  fs.writeFileSync(`src/data/${file}`, JSON.stringify(data));
  console.log(`Data has been saved to ${file}`);
};

type LoadData = {
  <T>(file: string, schema: z.ZodType<T>): T;
};

export const loadData: LoadData = (file: string, schema: ZodSchema) => {
  const data = fs.readFileSync(`src/data/${file}`, "utf-8");
  return schema.parse(JSON.parse(data));
};
