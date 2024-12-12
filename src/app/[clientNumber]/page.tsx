import { getMessages } from "@/_services/api";
import { Menssage } from "@/_types/menssage";
import { ArrowUturnLeftIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default async function Chat({
  params,
}: {
  params: Promise<{ clientNumber: string }>;
}) {
  const { clientNumber } = await params;
  const messages = await getMessages<Menssage[]>({
    clientNumber: clientNumber,
  });

  return (
    <main>
      <div className="w-full text-white h-10 bg-gray-900 flex justify-between p-2">
        {messages[0].client_name}
        <Link
          className="text-white bg-gray-700 px-2 rounded-lg top-5 right-5"
          href="/"
        >
          <ArrowUturnLeftIcon className="h-6 w-6" />
        </Link>
      </div>
      <div className="flex flex-col py-4 px-10 gap-4 bg-gray-950 lg:bg-black h-[calc(100vh-40px)] overflow-y-scroll">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`w-full flex gap-2 ${
              message.action === "ENVIADO" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`flex text-white flex-col gap-2 p-5 rounded-xl w-full max-w-[65%] lg:max-w-[40%] ${
                message.action === "ENVIADO" ? "bg-gray-600" : "bg-gray-800"
              } `}
            >
              <p>{message.menssage}</p>
              <p className="w-full text-right text-xs text-white/50">
                {message.date}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
