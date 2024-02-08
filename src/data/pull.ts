import { ZodSchema, z } from "zod";

import fetch from "node-fetch";
import { endpoint } from "@/data/endpoint";
import { getData, saveData } from "@/utils";

const pullData = async () => {
  const provinsi = await getData(
    endpoint.provinsi.url,
    endpoint.provinsi.schema,
  ).then(({ data }) => data);

  await saveData(endpoint.provinsi.file, provinsi);

  const kabupatenKota = await getData(
    endpoint.kabupatenKota.url,
    endpoint.kabupatenKota.schema,
  ).then(({ data }) =>
    data.map((item) => ({
      ...item,
      kode_kabupaten_kota: item.kode_kabkota,
      nama_kabupaten_kota: item.nama_kabkota,
    })),
  );

  await saveData(endpoint.kabupatenKota.file, kabupatenKota);

  const kecamatan = await getData(
    endpoint.kecamatan.url,
    endpoint.kecamatan.schema,
  ).then(({ data }) =>
    data.map((item) => ({
      ...item,
      kode_kabupaten_kota: item.kode_kabkota,
    })),
  );

  await saveData(endpoint.kecamatan.file, kecamatan);

  const desaKelurahan = await getData(
    endpoint.desaKelurahan.url,
    endpoint.desaKelurahan.schema,
  ).then(({ data }) =>
    data.map((item) => ({
      ...item,
      kode_kabupaten_kota: item.kode_kabkota,
    })),
  );

  await saveData(endpoint.desaKelurahan.file, desaKelurahan);

  console.log("Data has been pulled");
};

pullData();
