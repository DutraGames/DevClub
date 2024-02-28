import Image from "next/image";
import Link from "next/link";
export default function Register() {
  return (
    <main className="flex items-center flex-col">
      <div className="mt-12 bg-white blur-md w-72 h-52 -z-10 absolute opacity-10 " />
      <Image
        className="mt-12"
        src={"/singup-img.svg"}
        width={300}
        height={300}
        alt="Logo"
      />

      <h1 className="text-3xl font-bold mt-12">Let’s Get Started</h1>

      <form className="mt-12 flex flex-col gap-3">
        <label htmlFor="email" className="text-sm text-zinc-500">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="outline-none bg-transparent border-b-2 border-zinc-500"
        />
        <label htmlFor="password" className="text-sm text-zinc-500">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="outline-none bg-transparent border-b-2 border-zinc-500"
        />
        <button
          type="submit"
          className=" p-4 bg-red-500 text-sm hover:bg-red-400 transition-all font-semibold"
        >
          Create Account
        </button>
        <button
          type="button"
          className="flex items-center gap-3 p-4 bg-zinc-700 text-sm hover:bg-zinc-500 transition-all font-semibold"
        >
          <Image alt="google" src="/icon-google.svg" width={20} height={20} />
          Create with Google
        </button>

        <p className="mt-12 text-sm text-zinc-500">
          Are you a Member?{" "}
          <Link href="/" className="text-white">
            Log In
          </Link>
        </p>
      </form>
    </main>
  );
}
