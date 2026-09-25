import type { TextureId } from "@/lib/pressure-cleaning";

/** Concrete speckle used across the page. */
export const concrete =
  "bg-[#cfd1cc] [background-image:radial-gradient(rgb(60_66_64/0.28)_1px,transparent_1.6px),radial-gradient(rgb(255_255_255/0.5)_1px,transparent_1.6px),radial-gradient(rgb(60_66_64/0.16)_2px,transparent_2.8px)] [background-size:9px_9px,13px_13px,31px_31px] [background-position:0_0,5px_7px,11px_3px]";

/** Clean surface textures per surface type (illustrations only). */
export const textures: Record<TextureId, string> = {
  concrete,
  driveway: `${concrete}`,
  pavers:
    "bg-[#c9b8a3] [background-image:linear-gradient(#9d8c78_3px,transparent_3px),linear-gradient(90deg,#9d8c78_3px,transparent_3px),radial-gradient(rgb(255_255_255/0.25)_1px,transparent_1.5px)] [background-size:64px_34px,64px_34px,8px_8px]",
  path:
    "bg-[#c4c0b6] [background-image:radial-gradient(#8f877a_2px,transparent_2.6px),radial-gradient(#e6e1d6_2px,transparent_2.6px),radial-gradient(#6f6a61_1.5px,transparent_2px)] [background-size:11px_11px,14px_14px,17px_17px] [background-position:0_0,6px_4px,3px_9px]",
  patio:
    "bg-[#d9d4c9] [background-image:linear-gradient(#b6afa2_2px,transparent_2px),linear-gradient(90deg,#b6afa2_2px,transparent_2px)] [background-size:84px_84px]",
  garage: `${concrete}`,
  other:
    "bg-[#bdb9ae] [background-image:radial-gradient(ellipse_40px_26px_at_20%_30%,rgb(255_255_255/0.25),transparent_70%),radial-gradient(ellipse_50px_30px_at_70%_60%,rgb(60_66_64/0.14),transparent_70%),radial-gradient(rgb(60_66_64/0.2)_1px,transparent_1.6px)] [background-size:120px_90px,140px_110px,8px_8px]",
};

/** Weathering overlay: dark wash, organic blotches and streaks. */
export const grime =
  "[background-image:radial-gradient(ellipse_90px_60px_at_18%_30%,rgb(64_82_46/0.5),transparent_70%),radial-gradient(ellipse_120px_70px_at_62%_70%,rgb(64_82_46/0.42),transparent_70%),radial-gradient(ellipse_70px_50px_at_85%_20%,rgb(40_36_30/0.4),transparent_70%),repeating-linear-gradient(98deg,rgb(40_36_30/0.08)_0_14px,transparent_14px_40px),linear-gradient(rgb(52_56_50/0.42),rgb(52_56_50/0.42))] [background-size:240px_180px,300px_220px,200px_150px,100%_100%,100%_100%]";

/** Extra marks per surface drawn on top of the weathered side only. */
export const marks: Partial<Record<TextureId, string>> = {
  driveway:
    "[background-image:linear-gradient(90deg,transparent_22%,rgb(30_30_28/0.28)_22%,rgb(30_30_28/0.28)_32%,transparent_32%,transparent_68%,rgb(30_30_28/0.28)_68%,rgb(30_30_28/0.28)_78%,transparent_78%),radial-gradient(ellipse_40px_26px_at_50%_60%,rgb(20_20_20/0.45),transparent_70%)]",
  garage: "[background-image:linear-gradient(rgb(30_30_28/0.35),transparent_35%),radial-gradient(ellipse_50px_30px_at_40%_70%,rgb(20_20_20/0.4),transparent_70%)]",
};
