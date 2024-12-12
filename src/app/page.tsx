import { Sidebar } from "@/_components/sidebar";
import { getContacts } from "@/_services/api";
import { Contact } from "@/_types/contacts";

export default async function Home() {
  const contacts = await getContacts<Contact[]>();
  return (
    <div className="w-full h-screen overflow-y-scroll  flex flex-col">
      <div className="flex lg:hidden w-full justify-center bg-gray-950">
        <Sidebar contacts={contacts} />
      </div>
      <main className=" hidden lg:flex  w-full  h-full  flex-col gap-8 justify-center items-center  bg-gray-950 lg:bg-black p-8">
        <h1 className="text-3xl text-white font-bold">Iara Chat | vanessa</h1>
      </main>
    </div>
  );
}
