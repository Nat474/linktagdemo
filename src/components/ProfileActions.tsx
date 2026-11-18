"use client";

import { useEffect, useRef, useState } from "react";
import { CopyIcon } from "@phosphor-icons/react/Copy";
import { ShareNetworkIcon } from "@phosphor-icons/react/ShareNetwork";
import { XIcon } from "@phosphor-icons/react/X";
import { shareProfileLink } from "@/lib/share";
import demo from "@/data/demo.json";

export default function ProfileActions({ path, name, role }: { path: string; name: string; role: string }) {
  const [notice, setNotice] = useState("");
  const [manual, setManual] = useState(false);
  const [busy, setBusy] = useState(false);
  const pending = useRef(false);
  const url = new URL(path, demo.canonicalOrigin).href;

  useEffect(() => {
    if (!notice || manual) return;
    const timer = window.setTimeout(() => setNotice(""), 6000);
    return () => window.clearTimeout(timer);
  }, [notice, manual]);

  async function act(copy: boolean) {
    if (pending.current) return;
    pending.current = true;
    setBusy(true);
    setManual(false);
    setNotice("");
    try {
      const capabilities = copy ? { clipboard: navigator.clipboard } : navigator;
      const result = await shareProfileLink({ title: `${name} · Linktag`, text: role, url }, capabilities);
      if (result === "shared") setNotice("Profile shared.");
      if (result === "copied") setNotice("Profile link copied.");
      if (result === "manual") {
        setManual(true);
        setNotice("Select and copy this profile link:");
      }
    } catch {
      setManual(true);
      setNotice("Select and copy this profile link:");
    } finally {
      pending.current = false;
      setBusy(false);
    }
  }

  return (
    <div className="profile-actions">
      <div className="action-buttons">
        <button className="demo-button" type="button" disabled={busy} onClick={() => act(false)}><ShareNetworkIcon size={17} /><span>Share</span></button>
        <button className="demo-button secondary" type="button" disabled={busy} onClick={() => act(true)}><CopyIcon size={17} /><span>Copy link</span></button>
      </div>
      <div className="action-feedback" role="status" aria-live="polite" aria-atomic="true">
        {notice && <div className="action-notice"><p>{notice}</p>{manual && <a className="manual-profile-link" href={url}>{url}</a>}<button type="button" aria-label="Dismiss message" onClick={() => { setNotice(""); setManual(false); }}><XIcon size={16} /></button></div>}
      </div>
    </div>
  );
}
