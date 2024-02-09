import { z } from "zod";

export const provinsiSchema = z.array(
  z.object({ kode_provinsi: z.string(), nama_provinsi: z.string() }),
);
export type Provinsi = {
  kode_provinsi: string;
  nama_provinsi: string;
}[];

export const kabupatenKotaSchema = z.array(
  z.object({
    kode_provinsi: z.string(),
    kode_kabupaten_kota: z.string(),
    nama_kabupaten_kota: z.string(),
  }),
);
export type KabupatenKota = {
  kode_provinsi: string;
  kode_kabupaten_kota: string;
  nama_kabupaten_kota: string;
}[];

export const kecamatanSchema = z.array(
  z.object({
    kode_provinsi: z.string(),
    kode_kabupaten_kota: z.string(),
    kode_kecamatan: z.string(),
    nama_kecamatan: z.string(),
  }),
);
export type Kecamatan = {
  kode_provinsi: string;
  kode_kabupaten_kota: string;
  kode_kecamatan: string;
  nama_kecamatan: string;
}[];

export const desaKelurahanSchema = z.array(
  z.object({
    kode_provinsi: z.string(),
    kode_kabupaten_kota: z.string(),
    kode_kecamatan: z.string(),
    kode_desa_kelurahan: z.string(),
    nama_desa_kelurahan: z.string(),
  }),
);
export type DesaKelurahan = {
  kode_provinsi: string;
  kode_kabupaten_kota: string;
  kode_kecamatan: string;
  kode_desa_kelurahan: string;
  nama_desa_kelurahan: string;
}[];
