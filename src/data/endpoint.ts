import { z } from "zod";

export const endpoint = {
  provinsi: {
    file: "provinsi.json",
    url: "https://api-e-database.kemendagri.go.id/api/data_master_kode_provinsi/51F890E2DF",
    schema: z.object({
      data: z.array(
        z.object({
          kode_provinsi: z.string(),
          nama_provinsi: z.string(),
        }),
      ),
    }),
  },
  kabupatenKota: {
    file: "kabupaten-kota.json",
    url: "https://api-e-database.kemendagri.go.id/api/data_master_kode_kabupaten_kota/51F890E2DF",
    schema: z.object({
      data: z.array(
        z.object({
          kode_provinsi: z.string(),
          kode_kabkota: z.string(),
          nama_kabkota: z.string(),
        }),
      ),
    }),
  },
  kecamatan: {
    file: "kecamatan.json",
    url: "https://api-e-database.kemendagri.go.id/api/data_master_kode_kecamatan/51F890E2DF",
    schema: z.object({
      data: z.array(
        z.object({
          kode_provinsi: z.string(),
          kode_kabkota: z.string(),
          kode_kecamatan: z.string(),
          nama_kecamatan: z.string(),
        }),
      ),
    }),
  },
  desaKelurahan: {
    file: "desa-kelurahan.json",
    url: "https://api-e-database.kemendagri.go.id/api/data_master_kode_desa_kelurahan/51F890E2DF",
    schema: z.object({
      data: z.array(
        z.object({
          kode_provinsi: z.string(),
          kode_kabkota: z.string(),
          kode_kecamatan: z.string(),
          kode_desa_kelurahan: z.string(),
          nama_desa_kelurahan: z.string(),
        }),
      ),
    }),
  },
};
