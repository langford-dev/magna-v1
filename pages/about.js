import magna2 from "../public/assets/magna2.webp";
import Image from "next/image";
import Cursor from "../components/Cursor";
import FAB from "../components/FAB";
import Header from "../components/Header"; 

const About = () => {
  return (
    <>
      <Header />
      <Cursor />
      <FAB />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <section className={`${styles.section} max-w-[1000px]`}>
            <h1 className={styles.title}>WHO MAGNA?</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <br />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </section>
          <div className={styles.imgContainer}>
            <Image
              src={magna2}
              alt="magna background image"
              className={styles.image}
            />
          </div>
          <section className={`${styles.section} max-w-[1300px]`}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <br />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </section>
        </div>
        {/* <Teams /> */}
      </div>
      <div className="pointer" />
    </>
  );
};
const styles = {
  wrapper: `min-h-screen w-screen pt-[150px] text-center text-[#fff]`,
  container: `mt-32 px-5 pb-44 text-left lg:text-center`,
  title: `my-[20px] mb-[50px] w-max rounded-[12px] bg-[#C13341] p-2 px-5 text-3xl font-bold lg:mx-auto lg:text-6xl`,
  section: `m-auto leading-[30px]`,
  image: `h-[100%] w-[100%] object-cover lg:h-[60%] lg:w-[60%]`,
  imgContainer: `flex items-center justify-center py-28`,
};

export default About;
