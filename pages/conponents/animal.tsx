import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";

type Control = {
  start: () => void;
  stop: () => void;
};

type State = 'RUNNING' | 'STOPPED';

type Fn = () => void;

export const useInterval = (fn: Fn, interval: number, autostart = true): [State, Control] => {
  const onUpdateRef = useRef<Fn>();
  const [state, setState] = useState<State>('STOPPED');
  const start = () => {
    setState('RUNNING');
  };
  const stop = () => {
    setState('STOPPED');
  };
  useEffect(() => {
    onUpdateRef.current = fn;
  }, [fn]);
  useEffect(() => {
    if (autostart) {
      setState('RUNNING');
    }
  }, [autostart]);
  useEffect(() => {
    let timerId: NodeJS.Timeout | undefined;
    if (state === 'RUNNING') {
      timerId = setInterval(() => {
        onUpdateRef.current?.();
      }, interval);
    } else {
      timerId && clearInterval(timerId);
    }
    return () => {
      timerId && clearInterval(timerId);
    };
  }, [interval, state]);
  return [state, { start, stop }];
};

const useClient = (): boolean => {
    const [isClient, setIsClient] = useState(false)
  
    useEffect(() => {
      if (typeof window !== 'undefined') setIsClient(true)
    }, [])
  
    return isClient
  }

const eggImages: string[] = [
    "/Animal/Egg.png",
    "/Animal/Egg2.png",
    "/Animal/Egg3.png",
    "/Animal/Egg4.png",
    "/Animal/Egg5.png",
    "/Animal/Chick1.png"
]

const chickImages: string[] = [
    "/Animal/Chick2.png"
]

const chickWalkImages: string[] = [
    "/Animal/Chick2walk1.png",
    "/Animal/Chick2walk2.png",
    "/Animal/Chick2walk3.png"
]

const chickinStopImage = "/Animal/ChickinStop.png";

const chickinWalkImages: string[] = [
    "/Animal/ChickinWalk1.png",
    "/Animal/ChickinWalk2.png",
    "/Animal/ChickinWalk3.png"
]

let dir = 1;
let rot = 1;
let isStop = true;
let isLeft = true;

const userName = "user";
export const Animal = ()=>{
    const [position, setPosition] = useState(500);
    const [rotation, setRotetion] = useState(0);
    const [count, setCount] = useState(0);

    const getArticleAmount = () =>{
        let articleAmountStr = localStorage.getItem(`${userName}AA`);
        if(articleAmountStr == null){
            localStorage.setItem(`${userName}AA`, "0");
            articleAmountStr = "0";
        }
        return Number(articleAmountStr);
    }

    let articleAmount = 0;
    try{
        articleAmount = getArticleAmount();
    } catch(e) {
        console.log(e);
    }
    //console.log(articleAmount);

    useInterval(()=>{
        if(articleAmount < 12){
            if(rotation >= 10 || rotation <= -10){
                rot *= -1;
            }
            setRotetion(rotation+rot);
        }  
        else {
            setRotetion(0);
            setCount(count-1);
            if(count <= 0){
                setCount(Math.floor(Math.random() * 70) + 40);
                const move = Math.floor(Math.random()* 3) -1;
                switch(move){
                    case -1:
                        isLeft = true;
                        isStop = false;
                        break;
                    case 0:
                        isStop = true;
                        break;
                    case 1:
                        isLeft = false;
                        isStop = false;
                        break;
                }
                dir = move;
            }
        }
        if(position >= 900 || position <= 200){
            dir *= -1;
        }
        setPosition(position+dir);
        
    }, 50)
    const degree = 180 * Math.asin(rotation*0.05) / Math.PI;
    let animalImage: string = eggImages[5];
    let imageScale = 1;
    let imageWid: number;
    let imageHi: number;
    if(articleAmount < 12){
        const index = Math.floor(articleAmount/2);
        console.log(index);
        animalImage = eggImages[index];
        imageWid = 48;
        imageHi = 56;
    }
    else if(articleAmount < 16){
        if(isStop)
            animalImage = chickImages[0];
        else{
            if(dir < 0) imageScale = -1;
            animalImage = chickWalkImages[count%3];
        }
        imageWid = 48 + 48 * (articleAmount-11)/4;
        imageHi = 56 + 56 * (articleAmount-11)/4;
    }
    else{
        if(isStop)
            animalImage = chickinStopImage;
        else{
            if(dir < 0) imageScale = -1;
            animalImage = chickinWalkImages[Math.floor((count%3)/2)];
        }
        imageWid = imageHi =128;
    }
    const isClient = useClient();
    return(
        <>
        {isClient &&
        <img src={animalImage}
            style={{width: `${imageWid}px`, height: `${imageHi}px`, imageRendering: "pixelated",
            position: "fixed", bottom: "50px", left: position, zIndex: 1200,
            transform: `rotate(${degree}deg) scale(${imageScale},1)`, transformOrigin:"center 80%"}}
        />}
        </>
    )
}