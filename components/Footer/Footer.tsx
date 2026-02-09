import Link from "next/link";

export default function Footer() {
    return (
        < footer className="border-t border-[#e2d8c9] bg-[#f7f2e9]" >
            <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-10 text-sm text-[#5b6450] md:flex-row md:items-center md:justify-between md:px-10">
                <p>
                    © Cut & Costura. Todos os direitos reservados.
                </p>
                <nav className="flex flex-wrap gap-5">
                    <Link href="/termos-de-uso"
                        className="transition hover:text-[#45503c]">
                        Termos de Uso
                    </Link>
                    <Link href="/politicas-de-privacidade"
                        className="transition hover:text-[#45503c]">
                        Política de Privacidade
                    </Link>
                    <Link target="_blank"
                        href="https://wa.me/5521967585254?text=Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20curso%20Cut%20%26%20Costura" className="transition hover:text-[#45503c]">
                        Contato
                    </Link>
                </nav>
            </div>
        </footer >
    )
}