export const getContacts: <T>() => Promise<T> = async () => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", "Token os9PiYuDGIC6FU5HQkxpkOVFkoXQTjmr");
  const response = await fetch(
    "https://api.baserow.io/api/database/rows/table/406231/?user_field_names=true",
    {
      method: "GET",
      headers,
    }
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data.results;
};

export const getMessages: <T>({
  clientNumber,
}: {
  clientNumber: string;
}) => Promise<T> = async ({ clientNumber }: { clientNumber: string }) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", "Token os9PiYuDGIC6FU5HQkxpkOVFkoXQTjmr");
  const response = await fetch(
    `
https://api.baserow.io/api/database/rows/table/406228/?user_field_names=true&&search=${clientNumber}`,
    {
      method: "GET",
      headers,
    }
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data.results;
};
