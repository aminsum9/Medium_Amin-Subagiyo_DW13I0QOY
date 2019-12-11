import React from "react";
import ContainedButtons from "./Article-part/Follow";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import "./App.js";

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 480,
      width: 440,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

function Article(){

    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
    
    const handleChange = event => {
        setSpacing(Number(event.target.value));
    };
    return(
        <div className="post konten">
                <h1>What is Google?</h1>
                <img src="https://www.tripsavvy.com/thmb/oOoIxfAquiM7PBa_sDMXNdo_wtk=/2416x1600/filters:fill(auto,1)/how-to-visit-the-googleplex-google-hq-mountain-view-57e2d4515f9b586c3529ba9c.jpg"></img>
                <p id="main">Google LLC[5] adalah sebuah perusahaan multinasional Amerika Serikat yang berkekhususan pada jasa dan produk Internet. Produk-produk tersebut meliputi teknologi pencarian, komputasi web, perangkat lunak, dan periklanan daring.[6] Sebagian besar labanya berasal dari AdWords.[7][8]

                Google didirikan oleh Larry Page dan Sergey Brin saat masih mahasiswa Ph.D. di Universitas Stanford. Mereka berdua memegang 16 persen saham perusahaan. Mereka menjadikan Google sebagai perusahaan swasta pada tanggal 4 September 1998. Pernyataan misinya adalah "mengumpulkan informasi dunia dan membuatnya dapat diakses dan bermanfaat oleh semua orang",[9] dan slogan tidak resminya adalah "Don't be evil".[10][11] Pada tahun 2006, kantor pusat Google pindah ke Mountain View, California.

                Sejak didirikan, pertumbuhan perusahaan yang cepat telah menghasilkan berbagai produk, akuisisi, dan kerja sama di bidang mesin pencari inti Google. Perusahaan ini menawarkan perangkat lunak produktivitas daring (dalam jaringan), termasuk surat elektronik (surel), paket aplikasi perkantoran, dan jejaring sosial. Produk-produk komputer mejanya meliputi aplikasi untuk menjelajah web, mengatur dan menyunting foto, dan pesan instan. Perusahaan ini memprakarsai pengembangan sistem operasi Android untuk telepon genggam dan Google Chrome OS[12] untuk jajaran netbook Chromebook. Google sudah beralih ke perangkat keras komunikasi. Mereka bekerja sama dengan berbagai produsen elektronik besar untuk memproduksi perangkat Nexus-nya dan mengakuisisi Motorola Mobility pada Mei 2012.[13] Tahun 2012, infrastruktur serat optik dipasang di Kansas untuk memfasilitasi layanan Internet pita lebar Google Fiber.[14]

                Perusahaan ini diperkirakan mengoperasikan lebih dari satu juta server di beberapa pusat data di seluruh dunia[15] dan memproses lebih dari satu miliar kueri pencarian[16] dan sekitar 24 petabita data buatan pengguna setiap harinya.[17][18][19][20] Pada bulan Desember 2012, Alexa menyebut google.com sebagai situs web paling banyak dikunjungi di dunia. Situs-situs Google dalam bahasa lain masuk peringkat 100 teratas, sebagaimana halnya situs milik Google seperti YouTube dan Blogger.[21] Google menempati peringkat kedua di basis data ekuitas merek BrandZ.[22] Dominasi pasarnya menuai kritik mengenai hak cipta, penyensoran, dan privasi.[23][24]. Pada tahun 2014, Google juga mendapat penghargaaan dari Business Indeed sebagai perusahaan yang memiliki merk paling bernilai.[25]

                Pada 10 Agustus 2015, Google melalui postingan blog, CEO Google Larry Page mengumumkan pembentukan perusahan baru bernama Alphabet yang akan menjadi perusahaan induk mencakupi Google dan usaha-usaha lain yang tak terlalu terkait erat dengan bisnis utama Google[26]. Pada restrukturisasi tersebut, Larry Page akan menjadi CEO perusahaan baru Alphabet. Sergey Brin menjabat sebagai President didampingi Erich Schmidt sebagai Executive Chairman. Sedangkan, CEO Google akan dijabat oleh Sundar Pichai[27].</p>
                <hr width="1000px"></hr>
                <ContainedButtons />
                <div className="comments"></div>
                <div className="comments"></div>
                <div className="comments"></div>
                <br></br>
                <br></br>
                <h1>Related Post</h1>
                <div className="related-post">
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                        <Grid item>
                            <Paper className={classes.paper}>
                                <img src="http://bisnisbandung.com/wp-content/uploads/2017/12/youtube-crowd-uproar-protest-ss-19201920.jpg"></img>
                                <Link>You Tube</Link>
                                <p>You Tube is the most popular video sharing...</p>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper className={classes.paper}>
                                <img src="https://cnet1.cbsistatic.com/img/eOEoOQ4eSDQPxbPCJASBnbsjpmQ=/1092x0/2019/08/14/d9363e04-fd4f-4a81-97ae-88a25d5feef0/gettyimages-858489898.jpg"></img>
                                <Link>Instagram</Link>
                                <p>Instagram is the most popular social media...</p>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper className={classes.paper}>
                                <img src="https://devclass.com/wp-content/uploads/2018/12/Oracle.jpg"></img>
                                <Link>Oracle</Link>
                                <p>Oracle is the most popular and biggest database management...</p>
                            </Paper>
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>
                </div>
            </div>
    );
}

export default Article;