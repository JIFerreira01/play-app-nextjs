export default function PlayerComponent(){
    return (
        <div className="h-full bg-white rounded-3xl pt-4">
            <div className="w-full flex justify-center h-60">
                <div className="w-11/12 h-52 shadow-[0_20px_60px_0_rgba(0,0,0,0.15)] rounded-3xl">
                    album
                </div>
            </div>
            <div className="text-center">
                <div>
                    <p className="text-[#2E3271] text-lg font-normal">Living My Best Life</p>
                    <p className="text-[#7c8db5b8]">Ben Hector</p>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        Streams Loading Time
                    </div>
                    <div>
                        Streams Time
                    </div>
                </div>
                <div>Stream Control</div>
            </div>
        </div>
    )
}
