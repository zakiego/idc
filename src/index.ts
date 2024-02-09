import {
  desaKelurahanData,
  kabupatenKotaData,
  kecamatanData,
  provinsiData,
} from "@/data";
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
  const data = loadData(provinsiData, schemaProvinsi);
  return data;
};

type GetListKabupatenKotaProps = {
  kode_provinsi: KodeProvinsi;
};
type GetListKabupatenKota = (props: GetListKabupatenKotaProps) => KabupatenKota;

export const getListKabupatenKota: GetListKabupatenKota = (props) => {
  const data = loadData(kabupatenKotaData, schemaKabupatenKota);

  let find: KabupatenKota = [];

  if (!props) {
    find = data;
    return find;
  }

  if ("kode_provinsi" in props) {
    find = data.filter((item) => item.kode_provinsi === props.kode_provinsi);
  }

  if (find.length === 0) {
    throw new Error("Data not found");
  }

  return find;
};

type GetListKecamatanProps =
  | { kode_kabupaten_kota: KodeKabupatenKota | undefined }
  | {
      kode_provinsi: KodeProvinsi | undefined;
    };
type GetListKecamatan = (props: GetListKecamatanProps) => Kecamatan;

export const getListKecamatan: GetListKecamatan = (props) => {
  const data = loadData(kecamatanData, schemaKecamatan);

  let find: Kecamatan = [];

  if (!props) {
    find = data;
    return find;
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

type GetListDesaKelurahanProps =
  | { kode_kecamatan: KodeKecamatan | undefined }
  | { kode_kabupaten_kota: KodeKabupatenKota | undefined }
  | { kode_provinsi: KodeProvinsi | undefined };
type GetListDesaKelurahan = (props: GetListDesaKelurahanProps) => DesaKelurahan;

export const getListDesaKelurahan: GetListDesaKelurahan = (props) => {
  const data = loadData(desaKelurahanData, schemaDesaKelurahan);

  let find: DesaKelurahan = [];

  if (!props) {
    find = data;
    return find;
  }

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
