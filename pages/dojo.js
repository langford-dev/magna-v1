import Image from "next/image"
import Link from "next/link"
import Cursor from "../components/Cursor"
import Header from "../components/Header"
import sensei from "../public/assets/sensei.png"

const Dojo = () => {
    return (
        <>
            <Header />
            <Cursor />
            <div className="flex items-center justify-center transition-shadow overflow-hidden">
                <div className="h-screen w-screen flex items-center justify-center">
                    <Link target="_blank" href="https://discord.gg/yYGxEjk5">
                        <Image
                            src={sensei}
                            alt="magna sensei background image"
                            className={`h-[90%] w-[90%] mt-32 object-contain`}
                            priority
                        />
                    </Link>
                </div>
            </div>
            <div className="pointer" />
        </>
    )
}

export default Dojo