import { useToastContext } from "@/contexts/ToastContext";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] });
export default function Home() {
  const { notify } = useToastContext();
  const handleNotify = () => {
    notify()
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className} `}
    >
      <button
        onClick={handleNotify}
        className="w-[200px] bg-green-300 rounded-3xl h-16 text-lg font-semibold text-gray-800">
        Mostrar Notificação
      </button>
    </main>
  )
}
