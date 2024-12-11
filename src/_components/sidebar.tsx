import { Contact } from "@/_types/contacts";
import { ContactButton } from "./contact-button";

interface SidebarProps extends React.PropsWithChildren {
  contacts: Contact[];
}

export const Sidebar: React.FC<SidebarProps> = ({
  contacts,
  ...props
}: SidebarProps) => {
  return (
    <main
      {...props}
      className="flex max-h-screen overflow-y-scroll flex-col gap-4  items-center sm:items-start bg-gray-950 px-4"
    >
      <div className="flex flex-col gap-4">
        {contacts.map((contact) => (
          <ContactButton
            key={contact.id || ""}
            name={contact.name || ""}
            number={contact.number}
          />
        ))}
      </div>
    </main>
  );
};
