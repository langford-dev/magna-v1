import { useState } from "react";
import { FiMinus, FiPlus, FiZap } from "react-icons/fi"

const Mint = () => {
    let [mintQuantity, setMintQuantity] = useState(0)
    let presaleMaxNftPerWallet = 4

    const increaseMintNum = () => {
        if (mintQuantity <= (presaleMaxNftPerWallet - 1)) setMintQuantity(mintQuantity += 1)
    }

    const decreaseMintNum = () => {
        if (mintQuantity > 1) setMintQuantity(mintQuantity -= 1)
    }

    return (
        <div className="w-screen h-screen">
            <div className="w-full h-full flex items-center justify-center">
                <div className="bg-[#0000001c] border-2 border-red-100/10 text-white p-10 rounded-3xl max-w-[500px]">
                    <h3 className="text-4xl font-bold">Mint your magna</h3>
                    <ul className="mt-10 flex items-center justify-between rounded-full border-2 border-red-100/10 p-3">
                        <li onClick={decreaseMintNum} className="w-[40px] h-[40px] flex items-center justify-center hover:bg-[#c1334140] rounded-full border-2 border-red-100/10">
                            <FiMinus size={25} />
                        </li>
                        <p className="text-2xl font-bold">{mintQuantity}</p>
                        <li onClick={increaseMintNum} className="w-[40px] h-[40px] flex items-center justify-center hover:bg-[#c1334140] rounded-full border-2 border-red-100/10">
                            <FiPlus size={25} />
                        </li>
                    </ul>
                    <div className="my-10" />
                    <button className="rounded-lg active:scale-90 transition-all flex items-center justify-center bg-[#C13341] p-5 py-2 text-2xl font-bold text-[#fff] w-full">
                        <FiZap fill="#fff" />
                        <p className="ml-1">Mint</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Mint