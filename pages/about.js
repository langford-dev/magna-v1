import magna2 from "../public/assets/magna2.png";
import Image from "next/image"
import Cursor from "../components/Cursor"
import FAB from "../components/FAB"
import Header from "../components/Header"

const About = () => {
    return (
        <>
            <Header />
            <Cursor />
            <FAB />
            <div className="min-h-screen w-screen text-[#fff] pt-[150px] text-center">
                <div className="pb-44 px-5 mt-32 lg:text-center text-left">
                    <div className="max-w-[1000px] m-auto leading-[30px]">
                        <h1 className="bg-[#C13341] lg:mx-auto my-[20px] mb-[50px] w-max p-2 px-5 rounded-[12px] lg:text-6xl text-3xl font-bold">WHO MAGNA?</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <br />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className="flex py-28 items-center justify-center">
                        <Image
                            src={magna2}
                            alt="magna background image"
                            className={`lg:w-[60%] lg:h-[60%] w-[100%] h-[100%] object-cover`}
                        />
                    </div>
                    <div className="max-w-[1300px] m-auto leading-[30px]">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <br />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
            <div className="pointer" />
        </>
    )
}

export default About