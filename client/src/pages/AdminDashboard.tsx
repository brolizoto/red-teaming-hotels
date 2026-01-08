import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { useState } from "react";
import { toast } from "sonner";
import { getLoginUrl } from "@/const";
import { Loader2, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

type ContactStatus = "pending" | "contacted" | "completed";

export default function AdminDashboard() {
  const { user, loading, isAuthenticated } = useAuth();
  const [, navigate] = useLocation();
  const [statusFilter, setStatusFilter] = useState<ContactStatus | "all">("all");

  const { data: requests, isLoading, refetch } = trpc.admin.listContactRequests.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  const updateStatusMutation = trpc.admin.updateStatus.useMutation({
    onSuccess: () => {
      toast.success("Status erfolgreich aktualisiert");
      refetch();
    },
    onError: (error) => {
      toast.error("Fehler beim Aktualisieren: " + error.message);
    },
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin h-8 w-8 text-primary" />
      </div>
    );
  }

  if (!isAuthenticated) {
    window.location.href = getLoginUrl();
    return null;
  }

  const filteredRequests = requests?.filter(req => 
    statusFilter === "all" ? true : req.status === statusFilter
  ) || [];

  const getStatusColor = (status: ContactStatus) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "contacted":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "completed":
        return "bg-green-100 text-green-800 border-green-300";
    }
  };

  const getStatusLabel = (status: ContactStatus) => {
    switch (status) {
      case "pending":
        return "Ausstehend";
      case "contacted":
        return "Kontaktiert";
      case "completed":
        return "Abgeschlossen";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-10">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              Zurück zur Webseite
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground">Kontaktanfragen verwalten</p>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            Angemeldet als: <span className="font-bold text-foreground">{user?.name || user?.email}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        {/* Filters */}
        <div className="mb-6 flex gap-4 items-center">
          <span className="text-sm font-bold text-foreground">Filter:</span>
          <div className="flex gap-2">
            {(["all", "pending", "contacted", "completed"] as const).map((status) => (
              <Button
                key={status}
                variant={statusFilter === status ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter(status)}
              >
                {status === "all" ? "Alle" : getStatusLabel(status)}
              </Button>
            ))}
          </div>
          <div className="ml-auto text-sm text-muted-foreground">
            {filteredRequests.length} Anfrage{filteredRequests.length !== 1 ? "n" : ""}
          </div>
        </div>

        {/* Requests Table */}
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="animate-spin h-8 w-8 text-primary" />
          </div>
        ) : filteredRequests.length === 0 ? (
          <div className="text-center py-12 border border-border rounded-lg">
            <p className="text-muted-foreground">Keine Anfragen gefunden</p>
          </div>
        ) : (
          <div className="border border-border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-card border-b border-border">
                <tr>
                  <th className="text-left p-4 text-sm font-bold text-foreground">Datum</th>
                  <th className="text-left p-4 text-sm font-bold text-foreground">Name</th>
                  <th className="text-left p-4 text-sm font-bold text-foreground">E-Mail</th>
                  <th className="text-left p-4 text-sm font-bold text-foreground">Telefon</th>
                  <th className="text-left p-4 text-sm font-bold text-foreground">Hotel/Unternehmen</th>
                  <th className="text-left p-4 text-sm font-bold text-foreground">Status</th>
                  <th className="text-left p-4 text-sm font-bold text-foreground">Aktionen</th>
                </tr>
              </thead>
              <tbody>
                {filteredRequests.map((request) => (
                  <tr key={request.id} className="border-b border-border hover:bg-card transition-colors">
                    <td className="p-4 text-sm text-muted-foreground">
                      {new Date(request.createdAt).toLocaleDateString("de-CH", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })}
                    </td>
                    <td className="p-4 text-sm font-bold text-foreground">{request.name}</td>
                    <td className="p-4 text-sm text-muted-foreground">
                      <a href={`mailto:${request.email}`} className="hover:text-primary transition-colors">
                        {request.email}
                      </a>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">
                      <a href={`tel:${request.phone}`} className="hover:text-primary transition-colors">
                        {request.phone}
                      </a>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">
                      {request.company || "-"}
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(
                          request.status
                        )}`}
                      >
                        {getStatusLabel(request.status)}
                      </span>
                    </td>
                    <td className="p-4">
                      <select
                        value={request.status}
                        onChange={(e) =>
                          updateStatusMutation.mutate({
                            id: request.id,
                            status: e.target.value as ContactStatus,
                          })
                        }
                        className="text-xs border border-border rounded px-2 py-1 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="pending">Ausstehend</option>
                        <option value="contacted">Kontaktiert</option>
                        <option value="completed">Abgeschlossen</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
