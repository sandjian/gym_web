"use client";
import React from "react";
import { Label } from "./label";
import { Input } from "./input";
import { Textarea } from "./text-area";
import { cn } from "@/lib/utils";
import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandTiktok,
} from "@tabler/icons-react";
import { ContactSectionData } from "@/lib/constants";

const Contact = ({
    title=ContactSectionData.title,
    description=ContactSectionData.description,
    telefono=ContactSectionData.telefono,
    mail=ContactSectionData.mail,
    direccion=ContactSectionData.direccion
}) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    }
    return (
        <div className="py-24 w-full max-w-7xl m-auto px-6 md:px-8">
            <div className=" grid md:grid-cols-2 mt-6 gap-16  duration-500 group  items-center relative overflow-hidden p-16  rounded-2xl  bg-gradient-to-b from-black-200/40 via-black-200/10 to-black-100 font-sans before:absolute before:right-0 before:w-[400px] border border-neutral-700  before:h-full before: max-md:before:hidden">
               
                <div>
                    <h2 className="text-slate-100 text-3xl font-extrabold">{title}</h2>
                    <p className="text-sm text-gray-200 mt-4 leading-relaxed">
                        {description}
                    </p>

                    <form className="my-8 text-neutral-300" onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                            <LabelInputContainer>
                                <Label htmlFor="firstname" >Nombre</Label>
                                <Input id="firstname" placeholder="Juan" type="text" className="rounded-2xl"/>
                            </LabelInputContainer>
                            <LabelInputContainer>
                                <Label htmlFor="lastname">Apellido</Label>
                                <Input id="lastname" placeholder="Perez" type="text"className="rounded-2xl" />
                            </LabelInputContainer>
                        </div>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="email">Correo electronico</Label>
                            <Input id="email" placeholder="example@example.com" type="email" className="rounded-2xl" />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="message">Mensaje</Label>
                            <Textarea id="message" placeholder="Escribe tu mensaje aquí" className="h-32" />
                        </LabelInputContainer>
                        
                        <button
                            className="rounded-2xl relative group/btn bg-transparent block w-full text-white  h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                            type="submit"
                        >
                            Enviar mensaje &rarr;
                            <BottomGradient />
                        </button>

                        <div className="bg-gradient-to-r from-transparent via-white to-transparent my-8 h-[1px] w-full" />

                        <div className="flex flex-col space-y-4">
                            <button
                                className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full   h-10 font-medium shadow-input  rounded-2xl  shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                                type="submit"
                            >
                                <IconBrandInstagram className="h-4 w-4 text-neutral-300" />
                                <span className="text-neutral-300 text-sm">
                                    Instagram
                                </span>
                                <BottomGradient />
                            </button>
                            <button
                                className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full   h-10 font-medium shadow-input  rounded-2xl  shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                                type="submit"
                            >
                                <IconBrandFacebook className="h-4 w-4 text-neutral-300" />
                                <span className="text-neutral-300 text-sm">
                                    Facebook
                                </span>
                                <BottomGradient />
                            </button>
                            <button
                                className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full   h-10 font-medium shadow-input  rounded-2xl  shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                                type="submit"
                            >
                                <IconBrandTiktok className="h-4 w-4 text-neutral-300" />
                                <span className="text-neutral-300 text-sm">
                                    Tiktok
                                </span>
                                <BottomGradient />
                            </button>
                        </div>
                    </form>


                    <ul className="mt-4 flex flex-wrap justify-center gap-6">
                    <li className="flex items-center text-yellow-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor" viewBox="0 0 479.058 479.058">
                                <path
                                    d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                />
                            </svg>
                            <a href="mailto:info@tabata.com" className="text-sm ml-4"><strong>{direccion}</strong></a>
                        </li>
                        <li className="flex items-center text-yellow-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor" viewBox="0 0 479.058 479.058">
                                <path
                                    d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                />
                            </svg>
                            <a href="mailto:info@tabata.com" className="text-sm ml-4"><strong>{mail}</strong></a>
                        </li>
                        <li className="flex items-center text-yellow-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor" viewBox="0 0 482.6 482.6">
                                <path
                                    d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                                />
                            </svg>
                            <a href="tel:+158996888" className="text-sm ml-4"><strong>{telefono}</strong></a>
                        </li>
                    </ul>
                </div>
                <div className="z-10 relative h-full max-md:min-h-[350px] rounded-2xl overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15796.389076609268!2d-57.503023296225024!3d-38.03214554342253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584ddae07a3847b%3A0xffccf3e6e7deff80!2sTabata%20Fitness%20Club!5e0!3m2!1ses!2sar!4v1721434912198!5m2!1ses!2sar"
                        className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg "
                        
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
      
        </div>
        
    )
}

export default Contact

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-yellow-700 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-yellow-700 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};