import { siteConfig } from "@/content/site-config";

export function Footer() {
  return (
    <footer className="border-t border-paper/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted md:flex-row">
        <p>
          © {new Date().getFullYear()} {siteConfig.footer.text}
        </p>
        <div className="flex gap-6">
          <a target="_blank" href={siteConfig.contact.instagram} className="hover:text-amber">
            Instagram
          </a>
          <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-amber">
            E-mail
          </a>
        </div>
      </div>
    </footer>
  );
}
