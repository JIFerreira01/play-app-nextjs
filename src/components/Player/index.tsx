'use client';
import { usePlayerGlobalContext } from "@/app/context";
import { useEffect, useState } from "react";

import Image from 'next/image';
import style from './style.module.css';


function ManipulatePlayer(trackParam: any){
    let audioElement: any;
    const { track, setTrack } = usePlayerGlobalContext();
    const [timeCurrent, setTimeCurrent]:any = useState();
    const [duration, setDuration]: any = useState();
    const [refAudioElement, setRefAudioElement]: any = useState();
    const [playlistLocal, setPlaylistLocal]: any = useState();

    const handlePlayPause = async () => {
        if(refAudioElement && refAudioElement.paused){
            await refAudioElement.play()
        } else {
            await refAudioElement.pause();
        }

        refAudioElement.addEventListener("timeupdate", (event: any) => {
            setTimeCurrent(event.target.currentTime);
            setDuration(event.target.duration);
          });
    }
    
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        audioElement = document.getElementsByTagName('audio')[0];
        audioElement.addEventListener('canplaythrough', (data: any) => {
            setTimeCurrent(audioElement.currentTime);
            setDuration(audioElement.duration);
            setRefAudioElement(data.target);
        })
    }, [trackParam]);

    const handleBackTrack = () => {
        const idTrackSelected = trackParam.track.track.id;
        const indexOfTrack = track.playlist[0].tracks.findIndex((x: Object<any>) => x.id == idTrackSelected)
        const positionOfNextTrack = indexOfTrack >= 0 ? track.playlist[0].tracks[indexOfTrack - 1] : null;
        if(positionOfNextTrack) setTrack({playlist: track.playlist, track: positionOfNextTrack});
    }
    const handleBackSeek = () => {
        if(Math.floor(refAudioElement.currentTime) > 1 && Math.floor(refAudioElement.currentTime) < 29){
            refAudioElement.currentTime -= 0.5;
        }
    }
    const handleNextSeek = () => {
        if(Math.floor(refAudioElement.currentTime) > 3 && Math.floor(refAudioElement.currentTime) < 29){
            refAudioElement.currentTime += 0.5;
        }
    }
    const handleNextTrack = () => {
        const idTrackSelected = trackParam.track.track.id;
        const indexOfTrack = track.playlist[0].tracks.findIndex(x => x.id == idTrackSelected)
        const positionOfNextTrack = (track.playlist[0].tracks.length - 1) == indexOfTrack ? null :  track.playlist[0].tracks[indexOfTrack + 1];
        if(positionOfNextTrack) setTrack({playlist: track.playlist, track: positionOfNextTrack});
    }

    return (
        <div className="w-full h-28 rounded-b-3xl">
            <div>
                <input type="range" readOnly={true} style={{backgroundSize: `${(Math.floor((100 * timeCurrent) / 29))}% 100%`}} min={0} max={29} value={Math.floor(timeCurrent)} className={style.timeline + " w-full"} />
                <div className="w-full flex justify-between">
                    <p className="text-[10px] text-[#2E3271] font-medium opacity-60">00:{String(Math.floor(timeCurrent)).padStart(2, "0")}</p>
                    <p className="text-[10px] text-[#2E3271] font-medium opacity-60">00:{String(Math.floor(duration) - Math.floor(timeCurrent)).padStart(2, "0")}</p>
                </div>
            </div>
            <div className={style.controls__container}>
                <button onClick={handleBackTrack}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="15" viewBox="0 0 10 15" fill="none">
                    <path d="M9 1.65448L1 7.68368L9 13.7129V1.65448Z" fill="url(#paint0_linear_107_201)" stroke="url(#paint1_linear_107_201)" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M1 2.65936V12.708" stroke="url(#paint2_linear_107_201)" strokeWidth="2" strokeLinecap="round"/>
                    <defs>
                        <linearGradient id="paint0_linear_107_201" x1="5" y1="-4.37472" x2="16.11" y2="2.99605" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF7E3A"/>
                        <stop offset="1" stopColor="#FF9A45"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_107_201" x1="5" y1="-4.37472" x2="16.11" y2="2.99605" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF7E3A"/>
                        <stop offset="1" stopColor="#FF9A45"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_107_201" x1="1" y1="-2.36497" x2="2.98039" y2="-2.16789" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF7E3A"/>
                        <stop offset="1" stopColor="#FF9A45"/>
                        </linearGradient>
                    </defs>
                    </svg>                    
                </button>
                <button onClick={handleBackSeek}>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                    <path d="M16 1.65448L8 7.68368L16 13.7129V1.65448Z" fill="url(#paint0_linear_107_196)" stroke="url(#paint1_linear_107_196)" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M9 1.65448L1 7.68368L9 13.7129V1.65448Z" fill="url(#paint2_linear_107_196)" stroke="url(#paint3_linear_107_196)" strokeWidth="2" strokeLinejoin="round"/>
                    <defs>
                        <linearGradient id="paint0_linear_107_196" x1="12" y1="-4.37472" x2="23.11" y2="2.99605" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF7E3A"/>
                        <stop offset="1" stopColor="#FF9A45"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_107_196" x1="12" y1="-4.37472" x2="23.11" y2="2.99605" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF7E3A"/>
                        <stop offset="1" stopColor="#FF9A45"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_107_196" x1="5" y1="-4.37472" x2="16.11" y2="2.99605" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF7E3A"/>
                        <stop offset="1" stopColor="#FF9A45"/>
                        </linearGradient>
                        <linearGradient id="paint3_linear_107_196" x1="5" y1="-4.37472" x2="16.11" y2="2.99605" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF7E3A"/>
                        <stop offset="1" stopColor="#FF9A45"/>
                        </linearGradient>
                    </defs>
                    </svg>
                </button>
                <button onClick={handlePlayPause} className={style.player + " drop-shadow-[0_15px_30px_rgba(255,133,61,0.16)]"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="116" viewBox="28 10 60 100" fill="none">
                    <g filter="url(#filter0_d_107_210)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M30 43.0162C30 27.5615 42.5676 15 58 15C73.4324 15 86 27.5615 86 43.0162C86 58.4385 73.4324 71 58 71C42.5676 71 30 58.4385 30 43.0162ZM68.2703 45.85C68.5676 45.5528 68.946 45.0936 69.0271 44.9855C69.4595 44.4182 69.6757 43.7159 69.6757 43.0162C69.6757 42.2301 69.4325 41.5007 68.973 40.9064C68.9353 40.8688 68.8616 40.7885 68.7655 40.6839C68.5857 40.4882 68.3277 40.2074 68.0811 39.9609C65.8649 37.5837 60.0811 33.6937 57.0541 32.5051C56.5946 32.3187 55.4325 31.9108 54.8108 31.8837C54.2162 31.8837 53.6487 32.0188 53.1081 32.289C52.4325 32.6671 51.8919 33.2615 51.5946 33.9638C51.4054 34.4501 51.1081 35.9088 51.1081 35.9358C50.8108 37.5297 50.6487 40.123 50.6487 42.9865C50.6487 45.7176 50.8108 48.2002 51.0541 49.821C51.0608 49.8277 51.084 49.9436 51.1201 50.1237C51.2299 50.6712 51.4587 51.8118 51.7027 52.2793C52.2973 53.4139 53.4595 54.1163 54.7027 54.1163H54.8108C55.6217 54.0892 57.3244 53.3869 57.3244 53.3599C60.1892 52.1712 65.8379 48.4703 68.1081 46.0121L68.2703 45.85Z" fill="url(#paint0_linear_107_210)"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_107_210" x="0" y="0" width="116" height="116" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="15"/>
                        <feGaussianBlur stdDeviation="15"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.521569 0 0 0 0 0.239216 0 0 0 0.16 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_107_210"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_107_210" result="shape"/>
                        </filter>
                        <linearGradient id="paint0_linear_107_210" x1="58" y1="-13" x2="2" y2="43" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF7E3A"/>
                        <stop offset="1" stopColor="#FF9A45"/>
                        </linearGradient>
                    </defs>
                    </svg>
                </button>
                <button onClick={handleNextSeek}>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                    <path d="M1 1.65448L9 7.68368L1 13.7129V1.65448Z" fill="url(#paint0_linear_107_191)" stroke="url(#paint1_linear_107_191)" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M8 1.65448L16 7.68368L8 13.7129V1.65448Z" fill="url(#paint2_linear_107_191)" stroke="url(#paint3_linear_107_191)" strokeWidth="2" strokeLinejoin="round"/>
                    <defs>
                        <linearGradient id="paint0_linear_107_191" x1="5" y1="-4.37472" x2="-6.10995" y2="2.99605" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF7E3A"/>
                        <stop offset="1" stopColor="#FF9A45"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_107_191" x1="5" y1="-4.37472" x2="-6.10995" y2="2.99605" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF7E3A"/>
                        <stop offset="1" stopColor="#FF9A45"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_107_191" x1="12" y1="-4.37472" x2="0.890049" y2="2.99605" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF7E3A"/>
                        <stop offset="1" stopColor="#FF9A45"/>
                        </linearGradient>
                        <linearGradient id="paint3_linear_107_191" x1="12" y1="-4.37472" x2="0.890049" y2="2.99605" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF7E3A"/>
                        <stop offset="1" stopColor="#FF9A45"/>
                        </linearGradient>
                    </defs>
                    </svg>
                </button>
                <button onClick={handleNextTrack}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="15" viewBox="0 0 10 15" fill="none">
                    <path d="M1 1.65448L9 7.68368L1 13.7129V1.65448Z" fill="url(#paint0_linear_107_205)" stroke="url(#paint1_linear_107_205)" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M9 2.65936V12.708" stroke="url(#paint2_linear_107_205)" strokeWidth="2" strokeLinecap="round"/>
                    <defs>
                        <linearGradient id="paint0_linear_107_205" x1="5" y1="-4.37472" x2="-6.10995" y2="2.99605" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF7E3A"/>
                        <stop offset="1" stopColor="#FF9A45"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_107_205" x1="5" y1="-4.37472" x2="-6.10995" y2="2.99605" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF7E3A"/>
                        <stop offset="1" stopColor="#FF9A45"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_107_205" x1="9" y1="-2.36497" x2="7.01961" y2="-2.16789" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF7E3A"/>
                        <stop offset="1" stopColor="#FF9A45"/>
                        </linearGradient>
                    </defs>
                    </svg>                    
                </button>
            </div>
        </div>
    )
}

export default function PlayerComponent(){
    let trackFormatedtrack: any = {};
    const { track } = usePlayerGlobalContext();
    if(track) trackFormatedtrack  = Object.keys(track).length > 2 ?{track: track} : track; 

    return (
        <div className="h-full bg-white rounded-3xl pt-4">
            {Object.keys(trackFormatedtrack).length > 0 ? (
                <>
                 <div className="w-full flex justify-center h-44">
                    <div className="bg-transparent flex justify-center items-center h-36 shadow-[0_20px_60px_0_rgba(0,0,0,0.15)] rounded-3xl">
                        <Image
                            className="rounded-3xl"
                            src={trackFormatedtrack?.track?.album?.images[0].url}
                            width={160}
                            height={160}
                            priority={true}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
                <div className="text-center">
                    <div>
                        <p className="text-[#2E3271] text-lg font-normal">{trackFormatedtrack?.track?.name}</p>
                        <p className="text-[#7c8db5b8]">{trackFormatedtrack?.track?.artists[0].name}</p>
                    </div>
                </div>
                <div>
                    <div className="mt-2 mx-4">
                        
                        <audio className={style.audio} controls={false} src={trackFormatedtrack?.track?.preview_url} />
                        <ManipulatePlayer  track={trackFormatedtrack} />
                    </div>
                </div>
            </>
            ) : (
                <div className="w-full h-full flex justify-center items-center">
                    <h1>Selecione uma faixa</h1>
                </div>
                )
            }
        </div>
    )
}
