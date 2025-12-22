import Image from "next/image";

export default function Gallery({ handle }) {
  return (
    <div
      className="
        relative
        h-[120vh]
        w-full
        [clip-path:polygon(0_0,0_100%,100%_100%,100%_0)]
      "
    >
      {/* Background image */}
      <div className="relative h-full w-full">
        <Image
          src={`/projects/${handle}/chuna.avif`}
          alt="background"
          fill
          className="object-cover"
        />
      </div>

      {/* Vignette */}
      <div
        className="
          fixed
          top-0
          h-[30vw]
          w-[25vw]
          rounded-[1.5vw]
          overflow-hidden
        "
      >
        <Image
          src={`/projects/${handle}/chuna.avif`}
          alt="vignette"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
