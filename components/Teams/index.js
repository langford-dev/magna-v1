import React from "react";
import Image from "next/image";
import { members } from "../../constants";

const Teams = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Team</h1>
      <section className={styles.section}>
        {members.map((teamMember) => (
          <div>
            <Image
              width={120}
              height={120}
              className={styles.image}
              src={teamMember.imageUrl}
            />
            <p className={styles.text}>{teamMember.name}</p>
          </div>
        ))}
      </section>
    </div>
  );
};
const styles = {
  image: `bg-contain rounded-full`,
  text: `text-2xl pt-4`,
  container: `m-auto min-h-[80vh] max-w-[1000px] leading-[30px] px-6`,
  header: `my-[20px] mb-[50px] w-max rounded-[12px] bg-[#C13341] p-2 px-5 text-3xl font-bold lg:mx-auto lg:text-6xl`,
  section: `item-center flex flex-wrap justify-center gap-20`,
};

export default Teams;
