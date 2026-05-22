export default function DossierPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-slate-50 p-8 text-slate-900">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold">Dossier de reprise</h1>
        <p className="mt-2 text-slate-600">Page prévue pour afficher le détail du dossier : {params.id}</p>
      </div>
    </main>
  );
}
