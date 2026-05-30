"use client";

import Swal from "sweetalert2";

export function showUnavailableToast() {
  void Swal.fire({
    toast: true,
    position: "bottom-end",
    icon: "error",
    title: "Maaf, fitur belum tersedia",
    width: 440,
    showConfirmButton: false,
    timer: 2600,
    timerProgressBar: true,
  });
}
