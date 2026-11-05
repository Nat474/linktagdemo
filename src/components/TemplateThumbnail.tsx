import { AsteriskSimpleIcon } from "@phosphor-icons/react/dist/ssr/AsteriskSimple";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { GraduationCapIcon } from "@phosphor-icons/react/dist/ssr/GraduationCap";
import { UsersThreeIcon } from "@phosphor-icons/react/dist/ssr/UsersThree";
import { BookOpenIcon } from "@phosphor-icons/react/dist/ssr/BookOpen";
import { GlobeHemisphereWestIcon } from "@phosphor-icons/react/dist/ssr/GlobeHemisphereWest";
import { templates, student, business } from "@/data/templates";
import ProjectPreview from "./ProjectPreview";

export default function TemplateThumbnail({ template }: { template: typeof templates[number] }) {
  return (
    <div className={`template-stage stage-${template.slug}`} aria-hidden="true">
      <div className="thumbnail-profile">
        <div className="thumbnail-cover"><AsteriskSimpleIcon size={76} weight="light" /></div>
        <div className="thumbnail-body">
          <div className="thumbnail-avatar">{template.identity.initials}</div>
          <strong className="thumbnail-name">{template.identity.name}</strong>
          <p className="thumbnail-role">{template.identity.role}</p>
          {template.slug === "portfolio" && <>
            <div className="thumbnail-section-title">Selected work<ArrowUpRightIcon size={13} /></div>
            <div className="thumbnail-work"><div><ProjectPreview kind="fieldwork" /><b>Fieldwork</b><small>Brand identity</small></div><div><ProjectPreview kind="formline" /><b>Formline</b><small>Product design</small></div></div>
            <div className="thumbnail-contact">Let’s make something good.<ArrowUpRightIcon size={13} /></div>
          </>}
          {template.slug === "student" && <>
            <div className="thumbnail-education"><GraduationCapIcon size={23} /><div><b>{student.university}</b><small>{student.degree} · 2028</small></div></div>
            <div className="thumbnail-skills">{student.skills.slice(0, 3).map(skill => <span key={skill}>{skill}</span>)}</div>
            <div className="thumbnail-section-title">Learning by doing</div>
            <div className="thumbnail-project"><UsersThreeIcon size={23} /><div><b>Campus Loop</b><small>Student community app</small></div><ArrowUpRightIcon size={13} /></div>
            <div className="thumbnail-project"><BookOpenIcon size={23} /><div><b>Study Space</b><small>A little more focus</small></div><ArrowUpRightIcon size={13} /></div>
          </>}
          {template.slug === "business" && <>
            <p className="thumbnail-business-intro">Good people. Clear ideas.<br />Design with a little heart.</p>
            <div className="thumbnail-section-title">What we can do for you</div>
            <div className="thumbnail-service"><AsteriskSimpleIcon size={17} /><b>Brand strategy & identity</b></div>
            <div className="thumbnail-service"><GlobeHemisphereWestIcon size={17} /><b>Websites & digital</b></div>
            <div className="thumbnail-hours"><span>Austin, Texas</span><span>Mon–Fri · 9–5</span></div>
            <div className="thumbnail-contact">{business.email}<ArrowUpRightIcon size={13} /></div>
          </>}
        </div>
      </div>
    </div>
  );
}
