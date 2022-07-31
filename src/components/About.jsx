import React from 'react';
import logo from '../asset/pakDedi.png'
import { dummy_1, dummy_2, dummy_3 } from '../components/Images';
import icon from '../asset/Icons/shooping.png'

const About = () => {
    return (
        <div className="container mx-auto px-8 py-10">
            <h1 className="text-center text-4xl font-bold tracking-widest text-slate-800">About</h1>
            <div className="border-2 w-16 mx-auto rounded my-2"></div>

            <div className="Image">
                <div class="grid justify-center grid-rows-3 grid-flow-col gap-x-8 gap-y-4 mt-5">
                    <div class="row-span-3"><img src={dummy_1} alt="" /></div>
                    <div class="col-span-2"><img src={dummy_2} alt="" /></div>
                    <div class="col-span-2"><img src={dummy_3} alt="" /></div>
                </div>
            </div>

            <div className='text-center my-20 tracking-widest text-[24px]'>
                <p >
                    Ini adalah website resmi dari politeknik IDN yang telah kami bikin.
                    Kamu tau gak ? kami bikinnya bertiga lho awokawoawkawokw.
                </p>

                <p>Kamu pengen kayak kami gak ? yaudah join ke RPL. Di TKJ malah jadi
                    pengguli jaringan handal apalagi di DMM malah menjadi yuai/yuex
                    designer. Pdahal gaji yang terbesar itu ada di RPL awkawokaow
                    Meskipun dapat bikin kepala botak awkawoakwokawok</p>

                <p>dan ingat joks dari RPL “Mama aku di render”. awokawok</p>
            </div>

            <div className="px-20">
                <h1 className="text-4xl font-semibold tracking-wides text-slate-800">Director of education IDN</h1>
                <div className="border-2 w-28 rounded my-2"></div>

                <div className="flex items-center">
                    <div class="avatar">
                        <div class="w-44 rounded-full">
                            <img src={logo} />
                        </div>
                    </div>
                    <div className="ml-5 w-1/2">
                        <h5 className="mt-5 font-bold text-slate-800">Deddy Gunawan MT. CCIE,</h5>
                        <p className="py-5 text-slate-600">"Untuk menjadi terlatih tidak ada cara instant, caranya ya hanya harus
                            mau mengulang ulang terus menerus. Kalau nilai diri kita ingin menjadi
                            tinggi, ya harus melatih diri, minimal sampai terlatih. Bukan hanya sekedar
                            bisa, ya harus mengulang"
                            <br />
                            - Pak Dedi Gunawan</p>
                    </div>
                </div>
            </div>

            <div className='p-20 bg-sky-800 text-slate-800'>
                <h1 className="text-4xl font-semibold tracking-wides text-slate-800">History IDN Campus</h1>
                <div className="border-2 w-28 rounded my-2"></div>
                <div className='flex items-center'>
                    <div>
                        <p className='py-5'>Sekolah SMP dan SMK IDN berada dibawah Yayasan IDN dengan pembina bapak Dedi Gunawan, MT, CCIE. SMP dan SMK IDN memiliki keunggulan utama di bidang IT (teknologi informasi) yang mengacu pada kebutuhan industri IT Internasional. setiap anak terutama untuk jenjang SMK akan disiapkan untuk memiliki skill dan sertifikasi untuk berkiprah di dunia internasional.</p>
                        <p className='py-5'>SMP dan SMK IDN disupport oleh IDN/ ID-Network dan Imastudio yang memiliki banyak client di asia, eropa, afrika, serta middle east sehingga dengan pengalaman tersebut kami mencoba turun ke dunia pendidikan untuk dapat menarik lebih banyak lagi orang-orang indonesia agar dapat berkancah di dunia internasional.</p>
                        <p className='py-5'>Selain pendidikan formal, kami juga menerapkan pendidikan diniyah berdasarkan pemahaman alquran dan sunnah, sehingga selain membangun kompetensi santri di bidang IT juga membangun diniyah mereka.</p>
                    </div>
                    <img src={icon} alt="" />
                </div>

                <h5 className='font-semibold text-xl'>Tim Pengajar Sekolah SMP-SMK IDN</h5>
                <ul className='list-disc'>
                    <li>
                        <p className='py-1'>Tim Pengajar Diniyah dari STDI Imam Syafi’i Jember, LIPIA Jakarta, STAI Assunnah Medan, Sudan University dan Pesantren Sunnah di Indonesia
                        </p>
                    </li>

                    <li>
                        <p className='py-1'>Tim Pengajar IT dari ID-Networks, CCIE Expert, MTCINE dan IMAStudio, Google Associate Developer
                        </p>
                    </li>

                    <li>
                        <p className='py-1'>Tim Pengajar Inggris Native Speaker dari Amerika dan juga guru-guru dari Kampung Inggris Pare Kediri <br /> Serta tim pengajar/guru/asatdiz lainnya
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About