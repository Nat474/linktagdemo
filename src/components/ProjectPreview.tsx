import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { AsteriskSimpleIcon } from "@phosphor-icons/react/dist/ssr/AsteriskSimple";
import { PlusIcon } from "@phosphor-icons/react/dist/ssr/Plus";

export default function ProjectPreview({ kind }: { kind: "fieldwork" | "formline" }) {
  if (kind === "fieldwork") {
    return (
      <div className="project-preview fieldwork-preview" role="img" aria-label="Fieldwork identity concept: forest-green stationery with a cream wordmark and a lime botanical symbol.">
        <div className="fieldwork-sheet" aria-hidden="true">
          <div className="fieldwork-sheet-top"><span>FIELD NOTES</span><span>EST. 2026</span></div>
          <AsteriskSimpleIcon className="fieldwork-flower" weight="light" />
          <span className="fieldwork-sheet-bottom">A little closer to nature.</span>
        </div>
        <div className="fieldwork-card" aria-hidden="true">
          <AsteriskSimpleIcon size={28} weight="light" />
          <span className="fieldwork-wordmark">fieldwork<span>®</span></span>
          <span className="fieldwork-caption">GOOD THINGS GROW OUTSIDE.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="project-preview formline-preview" role="img" aria-label="Formline product concept: a clean project workspace with a pale blue sidebar and three colorful project thumbnails.">
      <div className="formline-window" aria-hidden="true">
        <div className="formline-chrome"><i /><i /><i /></div>
        <div className="formline-app">
          <div className="formline-sidebar">
            <span className="formline-symbol">f.</span>
            <span className="mock-nav selected" /><span className="mock-nav" /><span className="mock-nav short" />
            <span className="mock-sidebar-avatar">M</span>
          </div>
          <div className="formline-content">
            <div className="formline-topline"><span>WORKSPACE</span><PlusIcon size={10} /></div>
            <strong>Room for good work.</strong>
            <p>A little focus. A lot of possibility.</p>
            <div className="formline-section"><span>Your projects</span><span>View all <ArrowUpRightIcon size={8} /></span></div>
            <div className="mock-projects">
              <div><span className="mock-art art-one"><i /><i /></span><b>New perspectives</b><small>Brand exploration</small></div>
              <div><span className="mock-art art-two"><i /></span><b>Studio essentials</b><small>Digital experience</small></div>
              <div><span className="mock-art art-three"><AsteriskSimpleIcon size={32} weight="light" /></span><b>Something good</b><small>Creative direction</small></div>
            </div>
            <div className="mock-bottom-line" />
          </div>
        </div>
      </div>
    </div>
  );
}
