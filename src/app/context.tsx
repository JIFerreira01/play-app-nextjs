'use client';
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

interface RequestProps {
  access_token: String,
  token_type: String,
  expires_in: Number
}

interface ContextProps {
  request_auth: RequestProps,
  setRequest_auth: Dispatch<SetStateAction<object>>
}

const PlayContextGlocal = createContext<any>({
  request_auth: {
    access_token: "",
    token_type: "",
    expires_in: 0
  },
  setRequest_auth: (): object => new Object()
});

export const GlobalContextProvider = ({ children }: any) => {
  const [request_auth, setRequest_auth] = useState<any>({
    access_token: "",
    token_type: "",
    expires_in: 0
  });

  return (
    <PlayContextGlocal.Provider value={{ request_auth, setRequest_auth }}>
      {children}
    </PlayContextGlocal.Provider>
  )
};

const PlayerContextGlocal = createContext<any>({
  track: {},
  setTrack: (): object => new Object()
});

export const GlobalPlayerContextProvider = ({ children }: any) => {
  const [track, setTrack] = useState<any>();

  return (
    <PlayerContextGlocal.Provider value={{ track, setTrack }}>
      {children}
    </PlayerContextGlocal.Provider>
  )
};


export const useGlobalContext = () => useContext(PlayContextGlocal)
export const usePlayerGlobalContext = () => useContext(PlayerContextGlocal)

