"use client";
import { motion } from "framer-motion";
import SectionHeader from "../Common/SectionHeader";

const products = [
  {
    id: 1,
    name: "Mr. Solomon Rufus Jeffrey",
    href: "",
    imageSrc: "images/team/001_2-2-570x696.jpg",
    imageAlt: "aa",
    price: "",
    position: "Chief Executive Officer (CEO)",
  },
  {
    id: 2,
    name: "Mr. Ramesh Sethuraman",
    href: "",
    imageSrc: "images/team/1582536518567-570x696.jpeg",
    imageAlt: "",
    price: "",
    position: "Advisor",
  },
  {
    id: 3,
    name: "Mr. Rakesh S",
    href: "",
    imageSrc: "images/team/1641927867573-570x696.jpeg",
    imageAlt: "",
    price: "",
    position: "Chief Technology Officer (CTO)",
  },
  {
    id: 5,
    name: "Mr. Venkatachalapathy Sandur",
    href: "",
    imageSrc: "images/team/venkat-2-570x696.png",
    imageAlt: "",
    price: "",
    position: "Chief Financial Officer (CFO)",
  },
  {
    id: 6,
    name: "Miss. Simran",
    href: "",
    imageSrc: "images/team/IMG-20240423-WA0005.jpg",
    imageAlt: "",
    price: "",
    position: "HR Manager",
  },
  {
    id: 6,
    name: "Mr. Venu M",
    href: "",
    imageSrc: "images/team/venu.jpg",
    imageAlt: "",
    price: "",
    position: "Software Development Engineer",
  },
];

export default function Team() {
  return (
    <div>
      <SectionHeader
        headerInfo={{
          title: "WHO WE ARE",
          subtitle: "Meet people who make you successful",
          description: `Our Mobile & web development company is focused on the needs of your customers. We create engaging, motivating websites with our strategy-driven approach.`,
        }}
      />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              //       className="animate_left md:w-[70%] lg:w-1/2"
            >
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-slate-500 group-hover:opacity-75 dark:bg-gray-200 lg:h-80 ">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-zinc-950 dark:text-zinc-50">
                      <div>
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 dark:text-zinc-50"
                        />
                        {product.name}
                      </div>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.position}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
