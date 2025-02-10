import React from "react";
import { Card, CardContent, CardFooter, CardTitle } from "../card";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

function AnimationCards() {
  return (
    <div>
      <h5 className="text-5xl font-bold">Components</h5>
      <p className="card-text pt-2">
        Some quick example text to build on the card title and make up the bulk
        of the card &#39;s content.
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>

      <div className="grid grid-cols-4 gap-4 mt-10">
        <Card className="w-full max-w-sm mx-auto bg-neutral-800  rounded-xl p-3 shadow-md overflow-hidden md:max-w-2xl cursor-pointer">
          <CardTitle className="text-2xl font-bold underline">
            Height Animation
          </CardTitle>
          <CardContent className=" text-neutral-300 mt-2 text-sm font-thin">
            Some quick example text to build on the card title and make up the
            bulk of the card &#39;s content.
          </CardContent>
          <CardFooter className="mt-5">
            <Link
              href="/height-animation"
              className=" uppercase text-sm font-semibold tracking-wider"
            >
              Go somewhere <ArrowUpRightIcon className="size-5 inline" />{" "}
            </Link>
          </CardFooter>
        </Card>
        <Card className="w-full max-w-sm mx-auto bg-neutral-800  rounded-xl p-3 shadow-md overflow-hidden md:max-w-2xl cursor-pointer">
          <CardTitle className="text-2xl font-bold underline">
            Text Animation
          </CardTitle>
          <CardContent className=" text-neutral-300 mt-2 text-sm font-thin">
            Text animation is a technique used to create visual effects on text
            elements, making them more engaging and dynamic.
          </CardContent>
          <CardFooter className="mt-5">
            <Link
              href="/text-animation"
              className=" uppercase text-sm font-semibold tracking-wider"
            >
              Go somewhere <ArrowUpRightIcon className="size-5 inline" />{" "}
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default AnimationCards;
