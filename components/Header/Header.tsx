"use client"

import scrollToId from "@/utils/scrollToId";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full border-b border-[#e3d9ca] bg-[#f6f1e8]/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
                {/* Logo */}
                <button 
                type="button" 
                onClick={() => {
                    setOpen(false)
                    router.push('/')
                    scrollToId('hero')
                }} 
                className="text-lg font-semibold tracking-tight text-[#31382d] flex gap-2">
                    <Image width={30}
                    height={30} src='/icon.png' alt={""}/>
                    Cut & Costura
                </button>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-8 md:flex">
                    <button type="button" onClick={() => {
                        setOpen(false)
                        router.push('/')
                        scrollToId('hero')
                    }}
                        className="text-sm font-medium text-[#5a6350] hover:text-[#31382d]">
                        Inicio
                    </button>
                    <button type="button" onClick={() => {
                        setOpen(false)
                        router.push('/')
                        scrollToId('conteudo')
                    }}
                        className="text-sm font-medium text-[#5a6350] hover:text-[#31382d]">
                        Conteúdo
                    </button>
                    <Link target="_blank" href="https://wa.me/5521967585254?text=Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20curso%20Cut%20%26%20Costura" className="text-sm font-medium text-[#5a6350] hover:text-[#31382d]">
                        Contato
                    </Link>
                    <button
                        type="button" onClick={() => {
                            setOpen(false)
                            router.push('/')
                            scrollToId('primeiro-ponto')
                        }}
                        className="rounded-full bg-[#69775a] px-6 py-2.5 text-sm font-semibold text-[#faf8f2] shadow-sm transition hover:bg-[#5c6a4e]"
                    >
                        Quero meu guia
                    </button>
                </nav>

                {/* Mobile button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden"
                    aria-label="Abrir menu"
                >
                    <svg
                        className="h-6 w-6 text-[#31382d]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        {open ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="border-t border-[#e3d9ca] bg-[#f6f1e8] md:hidden">
                    <nav className="flex flex-col gap-4 px-6 py-6 text-[#5a6350]">
                        <button type="button" onClick={() => {
                            setOpen(false)
                            router.push('/')
                            scrollToId('hero')
                        }} >
                            Inicio
                        </button>
                        <button type="button" onClick={() => {
                            setOpen(false)
                            router.push('/')
                            scrollToId('conteudo')
                        }}
                        >
                            Conteúdo
                        </button>
                        <Link onClick={() => setOpen(false)} target="_blank" href="https://wa.me/5521967585254?text=Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20curso%20Cut%20%26%20Costura">
                            Contato
                        </Link>

                        <button
                            type="button" onClick={() => {
                                setOpen(false)
                                router.push('/')
                                scrollToId('primeiro-ponto')
                            }}
                            className="mt-2 inline-flex items-center justify-center rounded-full bg-[#69775a] px-6 py-3 text-sm font-semibold text-[#faf8f2]"
                        >
                            Quero meu guia
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}
