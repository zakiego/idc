import { endpoint } from "@/data/endpoint";
import {
  DesaKelurahan,
  KabupatenKota,
  Kecamatan,
  Provinsi,
  schemaDesaKelurahan,
  schemaKabupatenKota,
  schemaKecamatan,
  schemaProvinsi,
} from "@/types";
import { loadData } from "@/utils";

type KodeProvinsi = `${number}${number}`;
type KodeKabupatenKota = `${number}${number}.${number}${number}`;
type KodeKecamatan = `${number}${number}.${number}${number}.${number}${number}`;

type GetListProvinsi = () => Provinsi;

export const getListProvinsi: GetListProvinsi = () => {
  const data = loadData("provinsi.json", schemaProvinsi);
  return data;
};

type GetListKabupatenKotaProps = {
  kode_provinsi: KodeProvinsi;
};
type GetListKabupatenKota = (props: GetListKabupatenKotaProps) => KabupatenKota;

export const getListKabupatenKota: GetListKabupatenKota = (props) => {
  const data = loadData("kabupaten-kota.json", schemaKabupatenKota);

  const find = data.filter(
    (item) => item.kode_provinsi === props.kode_provinsi,
  );

  if (find.length === 0) {
    throw new Error("Data not found");
  }

  return find;
};

type GetListKecamatanProps =
  | { kode_kabupaten_kota: KodeKabupatenKota }
  | {
      kode_provinsi: KodeProvinsi;
    };
type GetListKecamatan = (props: GetListKecamatanProps) => Kecamatan;

export const getListKecamatan: GetListKecamatan = (props) => {
  const data = loadData("kecamatan.json", schemaKecamatan);

  let find: Kecamatan = [];

  if ("kode_kabupaten_kota" in props) {
    find = data.filter(
      (item) => item.kode_kabupaten_kota === props.kode_kabupaten_kota,
    );
  }

  if ("kode_provinsi" in props) {
    find = data.filter((item) => item.kode_provinsi === props.kode_provinsi);
  }

  if (find.length === 0) {
    throw new Error("Data not found");
  }

  return find;
};

type GetListDesaKelurahanProps =
  | { kode_kecamatan: KodeKecamatan }
  | { kode_kabupaten_kota: KodeKabupatenKota }
  | { kode_provinsi: KodeProvinsi };
type GetListDesaKelurahan = (props: GetListDesaKelurahanProps) => DesaKelurahan;

export const getListDesaKelurahan: GetListDesaKelurahan = (props) => {
  const data = loadData("desa-kelurahan.json", schemaDesaKelurahan);

  let find: DesaKelurahan = [];

  if ("kode_kecamatan" in props) {
    find = data.filter((item) => item.kode_kecamatan === props.kode_kecamatan);
  }

  if ("kode_kabupaten_kota" in props) {
    find = data.filter(
      (item) => item.kode_kabupaten_kota === props.kode_kabupaten_kota,
    );
  }

  if ("kode_provinsi" in props) {
    find = data.filter((item) => item.kode_provinsi === props.kode_provinsi);
  }

  if (find.length === 0) {
    throw new Error("Data not found");
  }

  return find;
};
