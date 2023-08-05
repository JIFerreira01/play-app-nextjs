import { Play } from 'lucide-react';
import style from './style.module.css';
export default function PlaylistComponent () {
    return (
        <div className="bg-white h-full rounded-3xl flex flex-col shadow-[0_4px_50px_15px_rgba(99,60,247,0.04)]">
            <div className=" bg-[#FDFEFF] shadow-[2px_0_25px_2px_rgba(0,0,0,0.02)] w-full h-20 rounded-t-3xl pl-5 pt-5">
                <p className="text-[#2E3271] font-bold">Playlist Name</p>
            </div>
            <div className={"w-full h-full bg-[#ffffffcc] rounded-b-3xl px-5 overflow-y-scroll " + style.custom_overflow}>
                <div className="h-24 w-full bg-white mt-10 rounded-3xl flex shadow-[0_25px_40px_0_rgba(0,0,0,0.02)] justify-center items-center">
                    <div className="w-24 h-4/5 shadow-[0_15px_30px_0_rgba(0,0,0,0.16)] mr-10"> album_</div>
                    <div className="w-3/5 h-4/5 pr-10">
                        <p className="text-[#2E3271] font-normal text-base">She will be loved</p>
                        <p className="text-[#7c8dfecc] text-sm">Marrom 5</p>
                    </div>
                    <div className="w-20 h-12 rounded-xl justify-center items-center gap-3 flex shadow-[0_15px_30px_0_rgba(0,0,0,0.06)]">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 10 13" fill="none">
                            <path d="M9.65909 7.57169C9.61648 7.63001 9.41761 7.87789 9.26136 8.03828L9.17614 8.12576C7.98295 9.45261 5.0142 11.4502 3.50852 12.0917C3.50852 12.1063 2.61364 12.4854 2.1875 12.5H2.13068C1.47727 12.5 0.866477 12.1209 0.553977 11.5085C0.383523 11.1731 0.227273 10.1962 0.213068 10.1817C0.0852273 9.3068 0 7.96683 0 6.49271C0 4.94714 0.0852273 3.54739 0.241477 2.68712C0.241477 2.67254 0.397727 1.88518 0.497159 1.62272C0.653409 1.24362 0.9375 0.922843 1.29261 0.718712C1.5767 0.572904 1.875 0.5 2.1875 0.5C2.5142 0.514581 3.125 0.734751 3.36648 0.835358C4.95739 1.47691 7.99716 3.57655 9.16193 4.85966C9.3608 5.06379 9.57386 5.31167 9.63068 5.36999C9.87216 5.69077 10 6.08445 10 6.50875C10 6.88639 9.88636 7.26549 9.65909 7.57169Z" fill="#7C8DB5" fill-opacity="0.72"/>
                            </svg>
                        </div>
                        <p className="text-xs text-[#313D58] font-extralight">1235</p>
                    </div>
                </div>

                <div className="h-24 w-full bg-white mt-10 rounded-3xl flex shadow-[0_25px_40px_0_rgba(0,0,0,0.02)] justify-center items-center">
                    <div className="w-24 h-4/5 shadow-[0_15px_30px_0_rgba(0,0,0,0.16)] mr-10"> album_</div>
                    <div className="w-3/5 h-4/5 pr-10">
                        <p className="text-[#2E3271] font-normal text-base">She will be loved</p>
                        <p className="text-[#7c8dfecc] text-sm">Marrom 5</p>
                    </div>
                    <div className="w-20 h-12 rounded-xl justify-center items-center gap-3 flex shadow-[0_15px_30px_0_rgba(0,0,0,0.06)]">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 10 13" fill="none">
                            <path d="M9.65909 7.57169C9.61648 7.63001 9.41761 7.87789 9.26136 8.03828L9.17614 8.12576C7.98295 9.45261 5.0142 11.4502 3.50852 12.0917C3.50852 12.1063 2.61364 12.4854 2.1875 12.5H2.13068C1.47727 12.5 0.866477 12.1209 0.553977 11.5085C0.383523 11.1731 0.227273 10.1962 0.213068 10.1817C0.0852273 9.3068 0 7.96683 0 6.49271C0 4.94714 0.0852273 3.54739 0.241477 2.68712C0.241477 2.67254 0.397727 1.88518 0.497159 1.62272C0.653409 1.24362 0.9375 0.922843 1.29261 0.718712C1.5767 0.572904 1.875 0.5 2.1875 0.5C2.5142 0.514581 3.125 0.734751 3.36648 0.835358C4.95739 1.47691 7.99716 3.57655 9.16193 4.85966C9.3608 5.06379 9.57386 5.31167 9.63068 5.36999C9.87216 5.69077 10 6.08445 10 6.50875C10 6.88639 9.88636 7.26549 9.65909 7.57169Z" fill="#7C8DB5" fill-opacity="0.72"/>
                            </svg>
                        </div>
                        <p className="text-xs text-[#313D58] font-extralight">1235</p>
                    </div>
                </div>


                <div className="h-24 w-full bg-white mt-10 rounded-3xl flex shadow-[0_25px_40px_0_rgba(0,0,0,0.02)] justify-center items-center">
                    <div className="w-24 h-4/5 shadow-[0_15px_30px_0_rgba(0,0,0,0.16)] mr-10"> album_</div>
                    <div className="w-3/5 h-4/5 pr-10">
                        <p className="text-[#2E3271] font-normal text-base">She will be loved</p>
                        <p className="text-[#7c8dfecc] text-sm">Marrom 5</p>
                    </div>
                    <div className="w-20 h-12 rounded-xl justify-center items-center gap-3 flex shadow-[0_15px_30px_0_rgba(0,0,0,0.06)]">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 10 13" fill="none">
                            <path d="M9.65909 7.57169C9.61648 7.63001 9.41761 7.87789 9.26136 8.03828L9.17614 8.12576C7.98295 9.45261 5.0142 11.4502 3.50852 12.0917C3.50852 12.1063 2.61364 12.4854 2.1875 12.5H2.13068C1.47727 12.5 0.866477 12.1209 0.553977 11.5085C0.383523 11.1731 0.227273 10.1962 0.213068 10.1817C0.0852273 9.3068 0 7.96683 0 6.49271C0 4.94714 0.0852273 3.54739 0.241477 2.68712C0.241477 2.67254 0.397727 1.88518 0.497159 1.62272C0.653409 1.24362 0.9375 0.922843 1.29261 0.718712C1.5767 0.572904 1.875 0.5 2.1875 0.5C2.5142 0.514581 3.125 0.734751 3.36648 0.835358C4.95739 1.47691 7.99716 3.57655 9.16193 4.85966C9.3608 5.06379 9.57386 5.31167 9.63068 5.36999C9.87216 5.69077 10 6.08445 10 6.50875C10 6.88639 9.88636 7.26549 9.65909 7.57169Z" fill="#7C8DB5" fill-opacity="0.72"/>
                            </svg>
                        </div>
                        <p className="text-xs text-[#313D58] font-extralight">1235</p>
                    </div>
                </div>



                <div className="h-24 w-full bg-white mt-10 rounded-3xl flex shadow-[0_25px_40px_0_rgba(0,0,0,0.02)] justify-center items-center">
                    <div className="w-24 h-4/5 shadow-[0_15px_30px_0_rgba(0,0,0,0.16)] mr-10"> album_</div>
                    <div className="w-3/5 h-4/5 pr-10">
                        <p className="text-[#2E3271] font-normal text-base">She will be loved</p>
                        <p className="text-[#7c8dfecc] text-sm">Marrom 5</p>
                    </div>
                    <div className="w-20 h-12 rounded-xl justify-center items-center gap-3 flex shadow-[0_15px_30px_0_rgba(0,0,0,0.06)]">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 10 13" fill="none">
                            <path d="M9.65909 7.57169C9.61648 7.63001 9.41761 7.87789 9.26136 8.03828L9.17614 8.12576C7.98295 9.45261 5.0142 11.4502 3.50852 12.0917C3.50852 12.1063 2.61364 12.4854 2.1875 12.5H2.13068C1.47727 12.5 0.866477 12.1209 0.553977 11.5085C0.383523 11.1731 0.227273 10.1962 0.213068 10.1817C0.0852273 9.3068 0 7.96683 0 6.49271C0 4.94714 0.0852273 3.54739 0.241477 2.68712C0.241477 2.67254 0.397727 1.88518 0.497159 1.62272C0.653409 1.24362 0.9375 0.922843 1.29261 0.718712C1.5767 0.572904 1.875 0.5 2.1875 0.5C2.5142 0.514581 3.125 0.734751 3.36648 0.835358C4.95739 1.47691 7.99716 3.57655 9.16193 4.85966C9.3608 5.06379 9.57386 5.31167 9.63068 5.36999C9.87216 5.69077 10 6.08445 10 6.50875C10 6.88639 9.88636 7.26549 9.65909 7.57169Z" fill="#7C8DB5" fill-opacity="0.72"/>
                            </svg>
                        </div>
                        <p className="text-xs text-[#313D58] font-extralight">1235</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
