import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Crystal WebPOS App Privacy Policy",
  description:
    "How the Crystal WebPOS Android app (com.crystalerp.webpos) by Sajsoft Solutions Ltd handles personal data: sign-in, device identity and the business records staff enter.",
  alternates: { canonical: "/app-privacy" },
};

// The privacy policy of the Crystal WebPOS Android app, linked from its Google Play listing. Every statement follows
// what the app does (webpos: shared/nativeApp.ts, shared/deviceIdentity.ts, the Capacitor manifest -- INTERNET only).
// Change it when the app changes. The website's own policy is /privacy.

const UPDATED = "26 October 2026";
const EMAIL = "info@sajsoft.co.ke";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="text-base font-semibold text-slate-900">{title}</h2>
      {children}
    </div>
  );
}

export default function AppPrivacyPage() {
  return (
    <div className="space-y-10">
      <PageBanner
        eyebrow="App privacy"
        title="Crystal WebPOS app privacy policy"
        subtitle="How the Crystal WebPOS app for Android handles your data: what it sends, where it goes, and what stays on the phone."
      />
      <section className="space-y-8 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm text-sm leading-relaxed text-slate-600">
        <p className="text-xs text-slate-500">
          Last updated {UPDATED}. This policy covers the Crystal WebPOS app for Android (package{" "}
          <code>com.crystalerp.webpos</code>), published by Sajsoft Solutions Ltd. Our website has its own{" "}
          <a className="text-brand-700 underline" href="/privacy">privacy policy</a>.
        </p>

        <Section title="Who we are">
          <p>
            Sajsoft Solutions Ltd (&ldquo;we&rdquo;), Raja Building, 3rd Floor, Biashara Street, Nairobi, Kenya, makes
            Crystaline ERP and the Crystal WebPOS app. Contact: <a className="text-brand-700 underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>,
            +254 725 473 779.
          </p>
        </Section>

        <Section title="What the app is">
          <p>
            Crystal WebPOS is a work tool for the staff of businesses that use Crystaline ERP: cashiers, waiters, sales
            representatives and managers. It is not for the general public. You can only use it with an account your
            employer has created for you. Nobody can create an account in the app.
          </p>
          <p>
            The app connects to your employer&rsquo;s Crystaline ERP server. That is either a server the business runs
            itself, or a server we host for the business. Your employer decides what is recorded about its sales, stock,
            customers and staff, and is responsible for that data. Where we host the server, we hold that data on the
            business&rsquo;s behalf and use it only to provide the service.
          </p>
        </Section>

        <Section title="What the app handles, and why">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Company code:</strong> when the phone is first set up, the company code you type is sent to our
              server to find your employer&rsquo;s server and show the company&rsquo;s name. Nothing else is sent at that step.
            </li>
            <li>
              <strong>Sign-in:</strong> your username and password, or your PIN, are sent to your employer&rsquo;s server to
              sign you in. The session is kept only while the app is open; you sign in again each time you open it.
            </li>
            <li>
              <strong>Device identity:</strong> the app reads the phone&rsquo;s Android ID (a code Android gives each app on
              each phone) and the phone&rsquo;s name or model, and sends them with each request. Your employer uses them to
              recognise the device, register it, and switch it off if it is lost or should no longer be used.
            </li>
            <li>
              <strong>Work records:</strong> what you enter while working is sent to your employer&rsquo;s server and stored
              there. Depending on your role this includes sales, orders and bills, payments (amounts and M-Pesa or card
              references), customers&rsquo; names, phone numbers and account balances, stock counts, approvals, clock-in
              times and meter readings. Who did what and when is recorded with it, as in any till system.
            </li>
            <li>
              <strong>Printing:</strong> receipts and bills are printed through Android&rsquo;s print service on the
              phone&rsquo;s own printer or a printer you choose. They are not sent anywhere else.
            </li>
          </ul>
        </Section>

        <Section title="What the app does not do">
          <ul className="list-disc space-y-2 pl-5">
            <li>It asks for no permissions other than internet access: no location, camera, microphone, contacts, photos or files.</li>
            <li>It shows no advertising and contains no advertising or analytics software.</li>
            <li>We do not sell personal data, and we do not use it for advertising.</li>
          </ul>
        </Section>

        <Section title="What stays on the phone">
          <p>
            The app keeps a few settings on the phone so it can start up: your employer&rsquo;s server address, the company
            code, how the phone is used (personal, or a shared waiters&rsquo; phone), and an order you were taking but had
            not sent. It does not keep your password. Uninstalling the app, or clearing its data in Android&rsquo;s
            settings, removes them.
          </p>
        </Section>

        <Section title="How data travels">
          <p>
            The app talks to your employer&rsquo;s server over its internet link, which uses an encrypted (HTTPS)
            connection. Where a business uses its server on its own Wi-Fi network instead, the connection stays inside
            that network and may not be encrypted; the business sets this up.
          </p>
        </Section>

        <Section title="Sharing">
          <p>
            Your data goes to your employer&rsquo;s server and, where we host that server, to us. We share it with service
            providers who run the hosting we use, and where the law requires. Your employer may share its records as its
            own policies allow.
          </p>
        </Section>

        <Section title="How long it is kept">
          <p>
            Work records are kept on your employer&rsquo;s server for as long as the business keeps them, which for sales
            and tax records is usually several years under Kenyan law. Where we host the server, we keep the data for as
            long as the business uses our service, and then return or delete it as agreed with the business.
          </p>
        </Section>

        <Section title="Deleting your account or data">
          <p>
            Your account belongs to your employer&rsquo;s system. To have it closed, or your personal data corrected or
            deleted, ask your employer&rsquo;s administrator. If you cannot, write to{" "}
            <a className="text-brand-700 underline" href={`mailto:${EMAIL}`}>{EMAIL}</a> and we will pass the request to
            the business or, where we host its server, help carry it out. Some records, such as completed sales, may have
            to be kept to meet tax and accounting law.
          </p>
        </Section>

        <Section title="Your rights">
          <p>
            Under the Data Protection Act, 2019 (Kenya) you may ask what personal data is held about you, ask for it to be
            corrected or deleted, and complain to the Office of the Data Protection Commissioner. For records your
            employer keeps, the business answers these requests; we help where we host its server. Write to{" "}
            <a className="text-brand-700 underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>
        </Section>

        <Section title="Children">
          <p>The app is a workplace tool for adults and is not meant for children.</p>
        </Section>

        <Section title="Changes">
          <p>We update this page when the app or our practices change. The date at the top is the version you are reading.</p>
        </Section>
      </section>
    </div>
  );
}
