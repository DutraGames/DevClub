import logoHeader from "./assets/logo-header.png";
import logo from "./assets/logo.png";
import video from "./assets/video.mp4";
import mario from "./assets/mario.png";
import luigi from "./assets/luigi.png";
import whatsapp from "./assets/whatsapp.png";
import * as Dialog from "@radix-ui/react-dialog";

export default function App() {
  return (
    <>
      <Dialog.Root>
        <header className=" py-3 px-7 w-full flex items-center bg-transparent">
          <img src={logoHeader} alt="Logo header" className="size-12" />
          <a
            href="#"
            className="text-sm font-medium cursor-pointer hover:bg-black/50 p-5 transition"
          >
            Home
          </a>
          <Dialog.Trigger className="text-sm font-medium cursor-pointer hover:bg-black/50 p-5 transition">
            Fale Conosco
          </Dialog.Trigger>
          <a
            href="#sobre"
            className="text-sm font-medium cursor-pointer hover:bg-black/50 p-5 transition"
          >
            Nosso Serviços
          </a>
        </header>

        <main className="w-full px-5 flex items-center justify-around">
          <div id="sobre" className="flex flex-col gap-3 w-96 items-center">
            <img src={logo} alt="Logo" className="w-56" />
            <span className="text-sm">
              🔧 Encanadores Mario & Luigi - Resolvendo Seus Problemas
              Hidráulicos Com Estilo! 🔧
            </span>
            <p className="text-sm text-justify">
              Você já se encontrou em uma situação de emergência com
              encanamento? Vazamentos inesperados, canos entupidos ou torneiras
              que não param de pingar? Não se preocupe, porque estamos aqui para
              salvar o dia! Apresentamos a vocês os encanadores mais famosos do
              Reino dos Cogumelos - Mario e Luigi!
            </p>

            <Dialog.Trigger
              type="button"
              className="w-52 h-12 bg-red-700 font-medium p-1"
            >
              Entre em Contato
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/50">
                <Dialog.Content
                  className="fixed inset-0 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 
                bg-white md:rounded-md flex flex-col overflow-hidden w-60 h-64 p-5 gap-5"
                >
                  <form className="flex flex-col gap-3 text-slate-950">
                    <input
                      type="text"
                      placeholder="Digite seu nome"
                      className="outline-none ring-2 rounded p-1"
                    />
                    <input
                      type="tel"
                      placeholder="Digite seu celular"
                      className="outline-none ring-2 rounded p-1"
                    />
                    <textarea
                      placeholder="Escreva sua mensagem"
                      className="outline-none ring-2 rounded p-1 h-24 resize-none"
                    ></textarea>
                    <button className="w-full bg-red-700 font-medium p-1 text-white rounded">
                      Enviar
                    </button>
                  </form>
                </Dialog.Content>
              </Dialog.Overlay>
            </Dialog.Portal>
          </div>

          <img src={mario} alt="Mario" className="w-56 " />

          <div className="-z-10 absolute inset-0 size-screen">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40" />
            <video
              loop
              autoPlay
              muted
              src={video}
              className="size-full object-cover"
            />
          </div>

          <button type="button">
            <img
              src={whatsapp}
              alt="Whatsapp"
              className="w-20 absolute bottom-3 right-2"
            />
          </button>
        </main>
      </Dialog.Root>
    </>
  );
}
