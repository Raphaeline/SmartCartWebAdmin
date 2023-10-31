"use client";
import React, { useState } from "react";
import Navbar from "../../../components/Navbar";

const Produk = () => {
  const [allChecked, setAllChecked] = useState(false);
  const [individualChecks, setIndividualChecks] = useState([false, false]);

  const handleMainCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAllChecked(e.target.checked);
    setIndividualChecks(individualChecks.map(() => e.target.checked));
  };

  const handleIndividualCheckbox = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedChecks = [...individualChecks];
    updatedChecks[index] = e.target.checked;
    setIndividualChecks(updatedChecks);

    setAllChecked(updatedChecks.every((check) => check));
  };

  return (
    <main className="min-h-screen flex-col items-center p-24 bg-[#f4f9fb]">
      <Navbar isDashboardPage={true} isProdukPage={false} isAdminPage={false} />
      <div className="fixed right-10 top-10">
        <a href="#" className="bg-[#55A3BD] hover:bg-[#5495a2] py-[9px] 2xl:py-[12px] px-[22px] 2xl:px-[30px] rounded-md font-poppins text-[14px] 2xl:text-[16px] drop-shadow hover:drop-shadow-md shadow-md mr-4">
          Buat Kategori
        </a>
        <a href="#" className="bg-[#25B6D0] hover:bg-[#64abba] py-[9px] 2xl:py-[12px] px-[22px] 2xl:px-[30px] rounded-md font-poppins text-[14px] 2xl:text-[16px] drop-shadow hover:drop-shadow-md hover:shadow-lg ml-4">
          Tambah Produk
        </a>
      </div>
      <div className="relative left-28 mx-10">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <img src="/produk/searchIcon.svg" alt="Search Icon" className="w-4 h-4" />
        </span>
        <input type="text" id="searchInput" placeholder="Cari produk (nama/UPC/SKU)" className="font-poppins font-[18px] text-[#98A2A5] w-[310px] 2xl:w-[583px] h-[32px] 2xl:h-[48px] pl-10 rounded border border-[#98A2A5]" />
      </div>

      <div className="relative left-28 mx-10 mt-5">
        <table>
          <thead className="bg-[#E4F2F6]">
            <tr>
              <th className="border border-[#D4E3E8] py-[15px] px-[20px]">
                <input type="checkbox" checked={allChecked} onChange={handleMainCheckbox}></input>
              </th>
              <th className="border border-[#D4E3E8] text-black py-[15px] px-[5px] font-poppins text-[16px] w-[300px] max-w-[300px]">Produk</th>
              <th className="border border-[#D4E3E8] text-black py-[15px] px-[5px] font-poppins text-[16px] w-[150px] max-w-[150px]">Kategori</th>
              <th className="border border-[#D4E3E8] text-black py-[15px] px-[5px] font-poppins text-[16px] w-[150px] max-w-[150px]">UPC</th>
              <th className="border border-[#D4E3E8] text-black py-[15px] px-[5px] font-poppins text-[16px] w-[150px] max-w-[150px]">SKU</th>
              <th className="border border-[#D4E3E8] text-black py-[15px] px-[5px] font-poppins text-[16px] w-[150px] max-w-[150px]">Harga</th>
            </tr>
          </thead>
          <tbody>
            {[0, 1].map((_, index) => (
              <tr className="bg-white" key={index}>
                <th className="border-y border-y-[#E0E0E0] py-[15px] px-[20px]">
                  <input type="checkbox" checked={individualChecks[index]} onChange={handleIndividualCheckbox(index)}></input>
                </th>
                <td className="border-y border-y-[#E0E0E0] text-black py-[15px] px-[30px] font-poppins text-[12px] w-[300px] max-w-[300px] flex items-center">
                  <img src="/dummy/citra.svg" className="w-[45px]" />
                  <p className="ml-3">Sabun Citra - Bengkoang Natural Glow</p>
                </td>

                <td className="border-y border-y-[#E0E0E0] text-black py-[15px] px-[30px] font-poppins text-[12px] w-[150px] max-w-[150px] text-center">Perawatan</td>
                <td className="border-y border-y-[#E0E0E0] text-black py-[15px] px-[30px] font-poppins text-[12px] w-[150px] max-w-[150px] text-center">8999999533731</td>
                <td className="border-y border-y-[#E0E0E0] text-black py-[15px] px-[30px] font-poppins text-[12px] w-[150px] max-w-[150px] text-center">S533731</td>
                <td className="border-y border-y-[#E0E0E0] text-black py-[15px] px-[30px] font-poppins text-[12px] w-[150px] max-w-[150px] text-center">Rp 3.500,00</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};
export default Produk;
