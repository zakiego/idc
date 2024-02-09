import {
  getListDesaKelurahan,
  getListKabupatenKota,
  getListKecamatan,
  getListProvinsi,
} from "@/index";

describe("provinsi", () => {
  test("all", () => {
    const data = getListProvinsi();
    expect(data).toHaveLength(38);
    expect(data[0]).toHaveProperty("kode_provinsi");
    expect(data[0]).toHaveProperty("nama_provinsi");
  });
});

describe("kabupaten", () => {
  // test("all", () => {
  //   const data = getListKabupatenKota();
  //   expect(data).toHaveLength(416);
  //   expect(data[0]).toHaveProperty("kode_provinsi");
  //   expect(data[0]).toHaveProperty("kode_kabupaten_kota");
  //   expect(data[0]).toHaveProperty("nama_kabupaten_kota");
  // });

  test("by kode_provinsi", () => {
    const data = getListKabupatenKota({ kode_provinsi: "11" });
    expect(data[0]).toHaveProperty("kode_provinsi");
    expect(data[0]).toHaveProperty("kode_kabupaten_kota");
    expect(data[0]).toHaveProperty("nama_kabupaten_kota");

    for (const item of data) {
      expect(item.kode_provinsi).toBe("11");
    }
  });

  test("should throw error", () => {
    expect(() => {
      getListKabupatenKota({ kode_provinsi: "99" });
    }).toThrowError("Data not found");
  });
});

describe("kecamatan", () => {
  test("by kode_kabupaten_kota", () => {
    const data = getListKecamatan({ kode_kabupaten_kota: "11.01" });
    expect(data[0]).toHaveProperty("kode_provinsi");
    expect(data[0]).toHaveProperty("kode_kabupaten_kota");
    expect(data[0]).toHaveProperty("kode_kecamatan");
    expect(data[0]).toHaveProperty("nama_kecamatan");

    for (const item of data) {
      expect(item.kode_kabupaten_kota).toBe("11.01");
    }
  });

  test("by kode_provinsi", () => {
    const data = getListKecamatan({ kode_provinsi: "11" });
    expect(data[0]).toHaveProperty("kode_provinsi");
    expect(data[0]).toHaveProperty("kode_kabupaten_kota");
    expect(data[0]).toHaveProperty("kode_kecamatan");
    expect(data[0]).toHaveProperty("nama_kecamatan");

    for (const item of data) {
      expect(item.kode_provinsi).toBe("11");
    }
  });

  test("should throw error", () => {
    expect(() => {
      getListKecamatan({ kode_provinsi: "99" });
    }).toThrowError("Data not found");
  });
});

describe("desa-kelurahan", () => {
  test("by kode_kecamatan", () => {
    const data = getListDesaKelurahan({
      kode_kecamatan: "11.01.01",
    });
    expect(data[0]).toHaveProperty("kode_provinsi");
    expect(data[0]).toHaveProperty("kode_kabupaten_kota");
    expect(data[0]).toHaveProperty("kode_kecamatan");
    expect(data[0]).toHaveProperty("kode_desa_kelurahan");
    expect(data[0]).toHaveProperty("nama_desa_kelurahan");

    for (const item of data) {
      expect(item.kode_kecamatan).toBe("11.01.01");
    }
  });

  test("by kode_kabupaten_kota", () => {
    const data = getListDesaKelurahan({ kode_kabupaten_kota: "11.01" });
    expect(data[0]).toHaveProperty("kode_provinsi");
    expect(data[0]).toHaveProperty("kode_kabupaten_kota");
    expect(data[0]).toHaveProperty("kode_kecamatan");
    expect(data[0]).toHaveProperty("kode_desa_kelurahan");
    expect(data[0]).toHaveProperty("nama_desa_kelurahan");

    for (const item of data) {
      expect(item.kode_kabupaten_kota).toBe("11.01");
    }
  });

  test("by kode_provinsi", () => {
    const data = getListDesaKelurahan({ kode_provinsi: "11" });
    expect(data[0]).toHaveProperty("kode_provinsi");
    expect(data[0]).toHaveProperty("kode_kabupaten_kota");
    expect(data[0]).toHaveProperty("kode_kecamatan");
    expect(data[0]).toHaveProperty("kode_desa_kelurahan");
    expect(data[0]).toHaveProperty("nama_desa_kelurahan");

    for (const item of data) {
      expect(item.kode_provinsi).toBe("11");
    }
  });

  test("should throw error", () => {
    expect(() => {
      getListDesaKelurahan({ kode_provinsi: "99" });
    }).toThrowError("Data not found");
  });
});
