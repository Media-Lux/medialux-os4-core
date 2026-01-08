import { useState, useEffect } from "react";
import { RefreshCw, Upload, GitCommit, Clock } from "lucide-react";

interface RepublishData {
  success: boolean;
  lastRepublishTime?: string;
  lastCommitSha?: string;
  error?: string;
}

function formatTime(iso: string | undefined): string {
  if (!iso) return "---";
  try {
    const d = new Date(iso);
    return d.toLocaleString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

export default function RepublishWidget() {
  const [data, setData] = useState<RepublishData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchRepublish = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/repo/republish");
      if (res.ok) {
        const json = await res.json();
        setData(json);
      } else {
        setData({ success: false, error: "Endpoint nicht verfügbar" });
      }
    } catch {
      setData({ success: false, error: "Verbindungsfehler" });
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRepublish();
    const interval = setInterval(fetchRepublish, 60000);
    return () => clearInterval(interval);
  }, []);

  const hasData = data?.lastRepublishTime || data?.lastCommitSha;

  return (
    <div
      className="rounded-xl border border-slate-500/20 p-4"
      style={{
        background: "linear-gradient(135deg, rgba(71,85,105,0.15) 0%, rgba(51,65,85,0.1) 100%)",
        backdropFilter: "blur(12px)",
      }}
      data-testid="widget-republish"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Upload className="w-4 h-4 text-slate-400" />
          <span className="text-sm font-medium text-slate-300">Letzter Republish</span>
        </div>
        <button
          onClick={fetchRepublish}
          disabled={loading}
          className="p-1.5 rounded-lg border border-slate-500/20 bg-slate-500/10 hover:bg-slate-500/20 transition-colors disabled:opacity-50"
          data-testid="button-refresh-republish"
        >
          <RefreshCw className={`w-3 h-3 text-slate-400 ${loading ? "animate-spin" : ""}`} />
        </button>
      </div>

      {loading && !data ? (
        <div className="text-xs text-slate-500 py-2 text-center">Laden...</div>
      ) : !hasData ? (
        <div className="text-xs text-slate-500 py-2 text-center">Keine Daten verfügbar</div>
      ) : (
        <div className="space-y-2 text-xs">
          {data?.lastRepublishTime && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-slate-400">
                <Clock className="w-3 h-3" />
                <span>Zeitpunkt</span>
              </div>
              <span className="text-slate-300">{formatTime(data.lastRepublishTime)}</span>
            </div>
          )}
          {data?.lastCommitSha && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-slate-400">
                <GitCommit className="w-3 h-3" />
                <span>Commit</span>
              </div>
              <span className="text-slate-300 font-mono">{data.lastCommitSha.slice(0, 7)}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
