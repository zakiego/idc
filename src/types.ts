import { z } from "zod";

export const schemaProvinsi = z.array(
  z.object({ kode_provinsi: z.string(), nama_provinsi: z.string() }),
);
export type Provinsi = z.infer<typeof schemaProvinsi>;

export const schemaKabupatenKota = z.array(
  z.object({
    kode_provinsi: z.string(),
    kode_kabupaten_kota: z.string(),
    nama_kabupaten_kota: z.string(),
  }),
);
export type KabupatenKota = z.infer<typeof schemaKabupatenKota>;

export const schemaKecamatan = z.array(
  z.object({
    kode_provinsi: z.string(),
    kode_kabupaten_kota: z.string(),
    kode_kecamatan: z.string(),
    nama_kecamatan: z.string(),
  }),
);
export type Kecamatan = z.infer<typeof schemaKecamatan>;

export const schemaDesaKelurahan = z.array(
  z.object({
    kode_provinsi: z.string(),
    kode_kabupaten_kota: z.string(),
    kode_kecamatan: z.string(),
    kode_desa_kelurahan: z.string(),
    nama_desa_kelurahan: z.string(),
  }),
);
export type DesaKelurahan = z.infer<typeof schemaDesaKelurahan>;
