import { useCallback, useEffect, useRef, useState } from "react";

const DISPLAY_TIME = 1650;
const EXIT_TIME = 350;

export function WelcomeSplash() {
  const [visible, setVisible] = useState(() => !document.documentElement.classList.contains("splash-seen"));
  const [leaving, setLeaving] = useState(false);
  const exitTimer = useRef();

  const dismiss = useCallback(() => {
    if (leaving) return;
    setLeaving(true);
    document.documentElement.classList.remove("splash-lock");
    exitTimer.current = window.setTimeout(() => setVisible(false), EXIT_TIME);
  }, [leaving]);

  useEffect(() => {
    if (!visible) return;
    const t = window.setTimeout(dismiss, DISPLAY_TIME);
    return () => { clearTimeout(t); clearTimeout(exitTimer.current); document.documentElement.classList.remove("splash-lock"); };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!visible) return null;

  return (
    <div className={`welcome-splash${leaving ? " welcome-splash--leaving" : ""}`} role="button" tabIndex={0} aria-label="Skip Mazent welcome screen" onClick={dismiss}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && dismiss()}>
      <div className="welcome-splash__content" aria-hidden="true">
        <img src="/images/mazent-icon.svg" alt="" className="welcome-splash__icon welcome-splash__icon--light" />
        <img src="/images/mazent-icon-white.svg" alt="" className="welcome-splash__icon welcome-splash__icon--dark" />
        <p className="welcome-splash__name">MAZENT</p>
        <p className="welcome-splash__tagline">Go Online. Get Customers.</p>
        <span className="welcome-splash__track"><span className="welcome-splash__progress" /></span>
      </div>
    </div>
  );
}
