"use client";

import { Image as ImageType } from "@/types";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import GalleryTab from "./gallery-tab";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";

interface GalleryProps {
  images: ImageType[];
}

const Gallery = ({ images }: GalleryProps) => {
  if (!images) return <div>No images</div>;
  return (
    <Tabs
      defaultValue={images[0].id}
      className="flex flex-col-reverse gap-4 px-0"
    >
      <TabsList className="justify-between gap-1 w-fit relative h-fit">
        {images.map((image) => (
          <GalleryTab key={image.id} image={image} />
        ))}
      </TabsList>
      {images.map((image) => (
        <TabsContent key={image.id} value={image.id}>
          <AspectRatio ratio={1}>
            <Image
              src={image.url}
              alt="image"
              fill
              priority
              className="object-contain object-center sm:rounded-lg"
            />
          </AspectRatio>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default Gallery;
