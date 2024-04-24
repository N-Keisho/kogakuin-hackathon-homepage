
// デコレーション用のコンポーネント

// 右上の黄色い三本線
const ThreeYellowLines = () => {
    return (
        <div className="absolute w-full top-0 -left-1/2 pt-2 origin-top -rotate-45 overflow-hidden">
                <div className="grid place-content-center  bg-secondary-400  py-0.5"></div>
                <div className="grid place-content-center  bg-secondary-400  py-0.5 my-1"></div>
                <div className="grid place-content-center  bg-secondary-400  py-0.5"></div>
            </div>
    )
}

export const OneBlueLine = () => {
    return (
        <div className="relative origin-top -rotate-12 relative m-0 py-10 w-full bg-primary-400 z-0">
                <div className=""></div>
        </div>
    )
}

export const SingleYellowLines = () => {
    return (
        <div className="absolute bg-secondary-200 h-screen w-screen opacity-50 -z-10" style={{clipPath: "polygon(0% 100%, 0% 80%, 100% 0%, 100% 20%)"}}></div>
    )
}

export default ThreeYellowLines