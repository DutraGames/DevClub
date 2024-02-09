import logoHeader from "./assets/logo-header.png";
import logo from "./assets/logo.png";
import video from "./assets/video.mp4";
import mario from "./assets/mario.png";
import whatsapp from "./assets/whatsapp.png";
import * as Dialog from "@radix-ui/react-dialog";

export default function App() {
  const handleWhatsapp = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=5511999999999&text=Ol%C3%A1%20irm%C3%A3os%20bross"
    );
  };

  return (
    <>
      <Dialog.Root>
        <header className="py-3 px-7 w-full flex items-center bg-transparent">
          <img
            src={logoHeader}
            alt="Logo header"
            className="size-12 2xl:size-20"
          />
          <a
            href="#"
            className="text-sm font-medium cursor-pointer hover:bg-black/50 p-5 transition 2xl:text-2xl"
          >
            Home
          </a>
          <Dialog.Trigger className="text-sm font-medium cursor-pointer hover:bg-black/50 p-5 transition 2xl:text-2xl">
            Fale Conosco
          </Dialog.Trigger>
          <a
            href="#sobre"
            className="text-sm font-medium cursor-pointer hover:bg-black/50 p-5 transition 2xl:text-2xl"
          >
            Nosso Serviços
          </a>
        </header>

        <main className="w-full px-5 flex xl:flex-row flex-col items-center justify-around">
          <div
            id="sobre"
            className="flex flex-col gap-3 xl:w-96 2xl:w-1/3 items-center"
          >
            <img src={logo} alt="Logo" className="w-56 2xl:w-80" />
            <span className="text-sm text-justify 2xl:text-2xl">
              🔧 Encanadores Mario & Luigi - Resolvendo Seus Problemas
              Hidráulicos Com Estilo! 🔧
            </span>
            <p className="text-sm text-justify 2xl:text-2xl">
              Você já se encontrou em uma situação de emergência com
              encanamento? Vazamentos inesperados, canos entupidos ou torneiras
              que não param de pingar? Não se preocupe, porque estamos aqui para
              salvar o dia! Apresentamos a vocês os encanadores mais famosos do
              Reino dos Cogumelos - Mario e Luigi!
            </p>

            <Dialog.Trigger
              type="button"
              className="w-52 h-12 bg-red-700 font-medium p-1 2xl:w-64 2xl:h-16 2xl:text-2xl"
            >
              Entre em Contato
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/50">
                <Dialog.Content
                  className="fixed inset-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                bg-white md:rounded-md flex flex-col overflow-hidden w-60 h-64 p-5 gap-5 2xl:w-1/3 h-1/3"
                >
                  <form className="flex flex-col gap-3 text-slate-950">
                    <input
                      type="text"
                      placeholder="Digite seu nome"
                      className="outline-none ring-2 rounded p-1 2xl:text-xl"
                    />
                    <input
                      type="tel"
                      placeholder="Digite seu celular"
                      className="outline-none ring-2 rounded p-1 2xl:text-xl"
                    />
                    <textarea
                      placeholder="Escreva sua mensagem"
                      className="outline-none ring-2 rounded p-1 h-24 resize-none 2xl:text-xl"
                    ></textarea>
                    <button className="w-full bg-red-700 font-medium p-1 text-white rounded 2xl:text-xl">
                      Enviar
                    </button>
                  </form>
                </Dialog.Content>
              </Dialog.Overlay>
            </Dialog.Portal>
          </div>

          <img src={mario} alt="Mario" className="w-56 2xl:w-96" />

          <div className="-z-10 fixed xl:absolute inset-0 size-screen">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40" />
            <video
              loop
              autoPlay
              muted
              src={video}
              className="size-full object-cover"
            />
          </div>

          <button type="button" onClick={handleWhatsapp}>
            <img
              src={whatsapp}
              alt="Whatsapp"
              className="w-20 fixed bottom-3 right-2 2xl:w-28"
            />
          </button>
        </main>
      </Dialog.Root>
    </>
  );
}
