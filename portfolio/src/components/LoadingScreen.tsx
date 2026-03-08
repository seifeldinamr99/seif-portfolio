export function LoadingScreen({ visible }: { visible: boolean }) {
  if (!visible) return null;

  return (
    <div className="loading-screen" role="status" aria-live="polite">
      <div className="loading-screen__content">
        <div className="loading-screen__spinner" />
        <p className="loading-screen__message">Loading…</p>
      </div>
    </div>
  );
}
