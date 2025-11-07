import PublicationList from "../../components/PublicationList";

export default function PublicationsPage() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Publications</h1>
      <PublicationList />
    </main>
  );
}
