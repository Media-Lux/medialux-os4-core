import { useState, useEffect } from "react";
import { RefreshCw, FileText, CheckCircle, XCircle, GitCommit, Clock } from "lucide-react";

interface AuditEntry {
  timestamp: string;
  action: string;
  path: string;
  sha?: string;
  error?: string;
  operator?: string;
}

interface AuditResponse {
  success: boolean;
  entries: AuditEntry[];
  error?: string;
}

function formatAction(action: string): { label: string; color: string } {
  const lc = action.toLowerCase();
  if (lc.includes("approved") || lc.includes("approve")) {
    return { label: "Genehmigt", color: "text-green-400" };
  }
  if (lc.includes("rejected") || lc.includes("reject")) {
    return { label: "Abgelehnt", color: "text-amber-400" };
  }
  if (lc.includes("push") || lc.includes("commit")) {
    return { label: "Gepusht", color: "text-blue-400" };
  }
  if (lc.includes("pending") || lc.includes("created")) {
    return { label: "Erstellt", color: "text-slate-400" };
  }
  return { label: action, color: "text-slate-400" };
}

function formatTime(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

export default function AuditHistoryPanel() {
  const [entries, setEntries] = useState<AuditEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAudit = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/audit/history?limit=15");
      const data: AuditResponse = await res.json();
      if (data.success && data.entries) {
        setEntries(data.entries.slice(0, 15));
      } else {
        setError(data.error || "Keine Daten verfügbar");
        setEntries([]);
      }
    } catch {
      setError("Verbindungsfehler");
      setEntries([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAudit();
    const interval = setInterval(fetchAudit, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="rounded-xl border border-slate-500/20 p-4"
      style={{
        background: "linear-gradient(135deg, rgba(71,85,105,0.15) 0%, rgba(51,65,85,0.1) 100%)",
        backdropFilter: "blur(12px)",
      }}
      data-testid="panel-audit-history"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-slate-400" />
          <span className="text-sm font-medium text-slate-300">Audit-Verlauf</span>
        </div>
        <button
          onClick={fetchAudit}
          disabled={loading}
          className="p-1.5 rounded-lg border border-slate-500/20 bg-slate-500/10 hover:bg-slate-500/20 transition-colors disabled:opacity-50"
          data-testid="button-refresh-audit"
        >
          <RefreshCw className={`w-3 h-3 text-slate-400 ${loading ? "animate-spin" : ""}`} />
        </button>
      </div>

      {error && !entries.length ? (
        <div className="text-xs text-slate-500 py-4 text-center">{error}</div>
      ) : loading && !entries.length ? (
        <div className="text-xs text-slate-500 py-4 text-center">Laden...</div>
      ) : entries.length === 0 ? (
        <div className="text-xs text-slate-500 py-4 text-center">Keine Einträge vorhanden</div>
      ) : (
        <div className="space-y-1.5 max-h-64 overflow-y-auto">
          {entries.map((entry, idx) => {
            const { label, color } = formatAction(entry.action);
            return (
              <div
                key={idx}
                className="p-2 rounded-lg bg-slate-800/30 border border-slate-500/10 text-xs"
                data-testid={`audit-entry-${idx}`}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5">
                    {entry.action.toLowerCase().includes("approved") ? (
                      <CheckCircle className="w-3 h-3 text-green-400" />
                    ) : entry.action.toLowerCase().includes("rejected") ? (
                      <XCircle className="w-3 h-3 text-amber-400" />
                    ) : (
                      <GitCommit className="w-3 h-3 text-slate-400" />
                    )}
                    <span className={`font-medium ${color}`}>{label}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-500">
                    <Clock className="w-2.5 h-2.5" />
                    <span>{formatTime(entry.timestamp)}</span>
                  </div>
                </div>
                <div className="text-slate-400 truncate" title={entry.path}>
                  {entry.path}
                </div>
                {entry.sha && (
                  <div className="flex items-center gap-1 mt-1 text-slate-500">
                    <GitCommit className="w-2.5 h-2.5" />
                    <span className="font-mono">{entry.sha.slice(0, 7)}</span>
                  </div>
                )}
                {entry.error && (
                  <div className="mt-1 text-slate-400 text-[10px]">
                    Fehler: {entry.error}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
