import React, { Component } from "react";
import { Link } from "react-router-dom";
import Article from "../Article";
import "../App.css";

class Main extends Component {
  render() {
    return (
      <div className="Mainarticle">
        <img src="https://cdn.vox-cdn.com/thumbor/4zA-KdbxKBuln0-0o_VTl7kXIjo=/0x0:5760x3840/1200x800/filters:focal(2032x1007:2952x1927)/cdn.vox-cdn.com/uploads/chorus_image/image/62408796/Googleplex.0.jpg"></img>
        <p>
          Google LLC[5] adalah sebuah perusahaan multinasional Amerika Serikat
          yang berkekhususan pada jasa dan produk Internet. Produk-produk
          tersebut meliputi teknologi pencarian, komputasi web, perangkat lunak,
          dan periklanan daring.[6] Sebagian besar labanya berasal dari
          AdWords.[7][8] Google didirikan oleh Larry Page dan Sergey Brin saat
          masih mahasiswa Ph.D. di Universitas Stanford. Mereka berdua memegang
          16 persen saham perusahaan. Mereka menjadikan Google sebagai
          perusahaan swasta pada tanggal 4 September 1998. Pernyataan misinya
          adalah "mengumpulkan informasi dunia dan membuatnya dapat diakses dan
          bermanfaat oleh semua orang",[9] dan slogan tidak resminya adalah
          "Don't be evil".[10][11] Pada tahun 2006, kantor pusat Google pindah
          ke Mountain View, California.
        </p>
        <Link to="/Article">Read More</Link>
      </div>
    );
  }
}

export default Main;
