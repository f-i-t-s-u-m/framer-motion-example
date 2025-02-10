"use client";

import React, { useEffect } from "react";

import { motion, AnimatePresence } from "motion/react";

const StepOne = () => {
  return (
    <div className="h-96 text-center">
      <ul>
        <li>
          <h4>List One</h4>

          <p>just a list</p>
        </li>
      </ul>
    </div>
  );
};

const StepTwo = () => {
  return (
    <motion.div
      initial={{
        x: -1000,

        opacity: 0,
      }}
      animate={{
        x: 0,

        opacity: 1,
      }}
      transition={{
        delay: 1,

        type: "spring",
      }}
      className="h-72"
    >
      <section className="p-4">
        <h2 className=" font-bold text-3xl ">Hello again</h2>

        <p>this is card two</p>
      </section>
    </motion.div>
  );
};

function HeightAnimation() {
  const [step, setStep] = React.useState("step-one");

  const [height, setHeight] = React.useState(
    step === "step-one" ? "24rem" : "18rem"
  );

  useEffect(() => {
    setHeight(step === "step-one" ? "24rem" : "18rem");
  }, [step]);

  return (
    <div className="">
      <div className="md:absolute top-30">
        <button
          className=" bg-[#ff2994] p-4 rounded-lg"
          onClick={() =>
            setStep((pre) => (pre === "step-one" ? "step-two" : "step-one"))
          }
        >
          Go to {step === "step one" ? "step-two" : "step one"}
        </button>

        <h4 className="text-2xl mt-5 underline uppercase tracking-widest pb-2">
          Status
        </h4>

        <ol>
          <li>Height: {height}</li>

          <li>Active Tab: {step}</li>
        </ol>
      </div>

      <div className="flex justify-center items-center h-[calc(100vh-200px)]">
        <AnimatePresence>
          <motion.section
            initial={{ height: height }}
            animate={{ height: height }}
            transition={{
              duration: 0.5,
            }}
            className="bg-neutral-900  flex-1 border  max-w-72 mx-auto shadow-lg border-neutral-800 rounded-md overflow-hidden "
          >
            {(() => {
              switch (step) {
                case "step-one":
                  return <StepOne />;

                default:
                  return <StepTwo />;
              }
            })()}
          </motion.section>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default HeightAnimation;
