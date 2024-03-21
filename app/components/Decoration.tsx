
// デコレーション用のコンポーネント

// 右上の黄色い三本線
const ThreeYellowLines = () => {
    return (
        <div className="absolute w-full top-0 -left-1/2 pt-4 origin-top -rotate-45">
                <div className="grid place-content-center  bg-secondary-400  py-0.5"></div>
                <div className="grid place-content-center  bg-secondary-400  py-0.5 my-1"></div>
                <div className="grid place-content-center  bg-secondary-400  py-0.5"></div>
            </div>
    )
}

export default ThreeYellowLines