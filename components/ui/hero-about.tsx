import { Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { HeroVideoDialog } from "@/components/ui/video-dialog";
import { HeroSectionData } from "@/lib/constants";


interface HeroProps {
    badge?: string;
    title?: string;
    description?: string;
    highlight?: string;
    members?: string;
    portadaUrl?: string;
    portadaAlt?: string
    videoUrl?: string;
}


const HeroAbout = ({
    badge = HeroSectionData.badge,
    title = HeroSectionData.title,
    description = HeroSectionData.description,
    highlight = HeroSectionData.highlight,
    members = HeroSectionData.members,
    portadaAlt = HeroSectionData.portadaAlt,
    portadaUrl = HeroSectionData.portadaUrl,
    videoUrl = HeroSectionData.videoUrl,
}: HeroProps) => {
    return (
        <section className="overflow-hidden">
            <div className="container flex justify-center items-center w-full max-w-7xl m-auto ">
                <div className="flex flex-col gap-5 ">
                    <div className="relative flex flex-col gap-5">
                        <div
                            style={{
                                transform: "translate(-50%, -50%)",
                            }}
                            className="absolute left-1/2 top-1/2 -z-10 mx-auto size-[800px] rounded-full  border border-yellow-600 p-16 [mask-image:linear-gradient(to_top,transparent,transparent,white,white,white,transparent,transparent)] md:size-[1300px] md:p-32"
                        >
                            <div className="size-full rounded-full border border-neutral-600 p-16 md:p-32">
                                <div className="size-full rounded-full border border-neutral-800"></div>
                            </div>
                        </div>
                        <ContainerScroll
                            titleComponent={
                                <>
                                    <div className="container flex flex-col items-center gap-4 text-center">
                                        <Badge variant="outline">{badge}</Badge>
                                        <div>
                                            <h1 className="max-w-2xl text-3xl font-semibold md:text-5xl text-zinc-300">
                                                {title}
                                            </h1>
                                            <p className=" text-zinc-500 mt-4">{description}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center gap-2 pb-6">
                                        <div className="text-yellow-700 font-sans font-semibold text-sm  flex justify-center items-center">
                                            {highlight}
                                            <Zap className="ml-2 size-4" />
                                        </div>
                                        <div className="text-xs text-muted-foreground text-neutral-500">
                                            {members}
                                        </div>
                                    </div>
                                </>
                            }
                        >
                            <HeroVideoDialog
                                className="w-full h-full"
                                animationStyle="from-center"
                                videoSrc={videoUrl}
                                thumbnailSrc={portadaUrl}
                                thumbnailAlt={portadaAlt}
                            />
                        </ContainerScroll>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { HeroAbout };





