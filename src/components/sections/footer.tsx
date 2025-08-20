import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[#2e2e2e] text-white py-10 px-4 text-center">
      <p>Contato: promessaspedreira@gmail.com</p>
      <p>
        Instagram:{" "}
        <a
          href="https://www.instagram.com/promessaszs/"
          className="text-primary"
        >
          @promessaszs
        </a>
      </p>
      <p className="mt-2 text-sm text-gray-400">
        Desenvolvido com ❤️ por{" "}
        <Link href="https://m3solucoesdigitais.com">M3 Digital Solutions</Link>
      </p>
    </footer>
  );
};
