import { useState } from "react";
import OperatorDesktop from "./OperatorDesktop";
import IntegrationsView from "./IntegrationsView";
import PushHistoryView from "./PushHistoryView";
import { useI18n } from "../../i18n/I18nContext";
import SystemOverview from "../components/SystemOverview";
import ManualPushPanel from "../components/ManualPushPanel";
import PushHistoryPanel from "../components/PushHistoryPanel";
import AdminHubIconBar from "../components/AdminHubIconBar";
import WorkspaceDefault from "../components/WorkspaceDefault";
import AutoPushPendingPanel from "../components/AutoPushPendingPanel";
import SoTStatusCard from "../components/SoTStatusCard";
import WorkingBrainPanel from "../components/WorkingBrainPanel";
import { Watermark, Footer } from "../components/Branding";
import { Puzzle, History, Home, Clock } from "lucide-react";

type DesktopView = "PulseSnapshots" | "DecisionLocks" | "ChangeLogs" | "Documents";
type MainView = DesktopView | "Integrations" | "PushHistory" | "Dashboard" | "AutoPending";

const navKeys: DesktopView[] = ["PulseSnapshots", "DecisionLocks", "ChangeLogs", "Documents"];

const navI18nMap: Record<DesktopView, string> = {
  PulseSnapshots: "nav.pulseSnapshots",
  DecisionLocks: "nav.decisionLocks",
  ChangeLogs: "nav.changeLogs",
  Documents: "nav.documents",
};

export default function OperatorShell() {
  const [view, setView] = useState<MainView>("Dashboard");
  const { t } = useI18n();

  const handleBack = () => {
    setView("Dashboard");
  };

  const renderMainContent = () => {
    switch (view) {
      case "Integrations":
        return <IntegrationsView onBack={handleBack} />;
      case "PushHistory":
        return <PushHistoryView onBack={handleBack} />;
      case "AutoPending":
        return (
          <main className="col-span-2 rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-2 mb-4">
              <button onClick={handleBack} className="text-xs opacity-50 hover:opacity-100">
                {t("nav.dashboard")} /
              </button>
              <Clock className="w-4 h-4 opacity-70" />
              <span className="text-sm font-medium">Auto Push Pending</span>
            </div>
            <AutoPushPendingPanel onOpenPushHistory={() => setView("PushHistory")} />
          </main>
        );
      case "Dashboard":
        return (
          <>
            <main className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 mb-4">
                <Home className="w-4 h-4 opacity-70" />
                <span className="text-sm font-medium">{t("workspace.title")}</span>
              </div>
              <WorkspaceDefault onOpenPending={() => setView("AutoPending")} />
            </main>
            <aside className="space-y-4">
              <SoTStatusCard />
              <WorkingBrainPanel />
              <div className="rounded-xl border border-slate-500/20 p-4" style={{ background: "linear-gradient(135deg, rgba(71,85,105,0.1) 0%, rgba(51,65,85,0.08) 100%)", backdropFilter: "blur(8px)" }}>
                <div className="text-sm font-medium text-slate-300 mb-3">{t("workspace.quickInfo")}</div>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-800/30 border border-slate-500/10">
                    <div className="text-slate-500 mb-1">{t("workspace.mode")}</div>
                    <div className="text-slate-300 font-medium">{t("labels.readOnlyActive")}</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800/30 border border-slate-500/10">
                    <div className="text-slate-500 mb-1">{t("workspace.repository")}</div>
                    <div className="text-slate-400 break-all text-[11px]">Media-Lux/medialux-os4-core</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800/30 border border-slate-500/10">
                    <div className="text-slate-500 mb-1">{t("workspace.branch")}</div>
                    <div className="text-slate-400">main</div>
                  </div>
                </div>
              </div>
            </aside>
          </>
        );
      default:
        return <OperatorDesktop view={view as DesktopView} />;
    }
  };

  return (
    <div className="relative min-h-screen pb-8">
      <Watermark />
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-[220px_1fr_360px] gap-4 px-4 py-6">
        <aside className="flex flex-col gap-3 max-h-[calc(100vh-3rem)]">
          <SystemOverview />

          <div className="flex-1 rounded-xl border border-white/10 bg-white/5 p-3 overflow-y-auto">
            <div className="mb-2 text-[10px] opacity-50">{t("nav.workspaceNavigation")}</div>
            <nav className="space-y-1 text-sm">
              <button
                data-testid="nav-dashboard"
                onClick={() => setView("Dashboard")}
                className={`w-full rounded-lg px-3 py-2 text-left transition-colors flex items-center gap-2 ${
                  view === "Dashboard"
                    ? "bg-white/10"
                    : "opacity-70 hover:bg-white/5 hover:opacity-100"
                }`}
              >
                <Home className="w-4 h-4" />
                {t("nav.dashboard")}
              </button>
              {navKeys.map((key) => (
                <button
                  key={key}
                  data-testid={`nav-${key.toLowerCase()}`}
                  onClick={() => setView(key)}
                  className={`w-full rounded-lg px-3 py-2 text-left transition-colors ${
                    view === key
                      ? "bg-white/10"
                      : "opacity-70 hover:bg-white/5 hover:opacity-100"
                  }`}
                >
                  {t(navI18nMap[key])}
                </button>
              ))}
            </nav>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-3 space-y-2">
            <div className="text-[10px] opacity-50">{t("nav.operatorTools")}</div>
            <ManualPushPanel />
            <button
              onClick={() => setView("AutoPending")}
              className={`w-full flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm transition-colors ${
                view === "AutoPending" ? "bg-white/10" : "bg-white/5 hover:bg-white/10"
              }`}
              data-testid="button-open-auto-pending"
            >
              <Clock className="w-4 h-4 opacity-70" />
              <span>Auto Push Pending</span>
            </button>
            <button
              onClick={() => setView("PushHistory")}
              className={`w-full flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm transition-colors ${
                view === "PushHistory" ? "bg-white/10" : "bg-white/5 hover:bg-white/10"
              }`}
              data-testid="button-open-push-history"
            >
              <History className="w-4 h-4 opacity-70" />
              <span>{t("nav.pushHistory")}</span>
            </button>
            <AdminHubIconBar />
            <button
              onClick={() => setView("Integrations")}
              className={`w-full flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm transition-colors ${
                view === "Integrations" ? "bg-white/10" : "bg-white/5 hover:bg-white/10"
              }`}
              data-testid="button-open-integrations"
            >
              <Puzzle className="w-4 h-4 opacity-70" />
              <span>{t("integrations.openIntegrations")}</span>
            </button>
          </div>
        </aside>

        {renderMainContent()}
      </div>
      <Footer />
    </div>
  );
}
