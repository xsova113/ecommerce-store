import { Image as ImageType } from "@/types";
import { TabsTrigger } from "../ui/tabs";
import Image from "next/image";

interface GalleryTabProps {
  image: ImageType;
}

const GalleryTab = ({ image }: GalleryTabProps) => {
  return (
    <TabsTrigger
      value={image.id}
      className="relative w-20 justify-between hover:bg-slate-200 dark:hover:bg-slate-600 px-1"
    >
      <div className="relative w-full h-12">
        <Image
          src={image.url}
          alt="image"
          fill
          className="object-cover object-center rounded-sm"
        />
      </div>
    </TabsTrigger>
  );
};

export default GalleryTab;
