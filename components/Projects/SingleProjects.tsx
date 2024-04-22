import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const SingleProject = ({ feature }: { feature: Feature }) => {
  const { icon, title, description, link } = feature;

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: -20,
        },

        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
      className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
    >
      <Link href={`/blog/`} className="relative block aspect-[368/239]">
        <Image src={feature.icon} alt={title} fill />
      </Link>

      <div className="px-4">
        <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
          <Link href={`/blog/blog-details`}>{`${title.slice(0, 40)}...`}</Link>
        </h3>
        <p className="line-clamp-3">{feature.title}</p>
      </div>
    </motion.div>
  );
};

export default SingleProject;
