"use client";
import Podcaster from "@/components/Podcaster";
import Maintemplate from "@/components/Templates/MainTemplate";
import { useParams } from "next/navigation";

const Podcast = () => {
  const params = useParams();
  console.log({ params });

  return (
    <Maintemplate>
      <Podcaster />
    </Maintemplate>
  );
};

export default Podcast;
