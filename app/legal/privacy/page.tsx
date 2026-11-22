import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How PawPal handles your data, your dog's data and your home's privacy.",
};

const sections = [
  {
    title: "The short version",
    body: [
      "PawPal is built privacy-first. Video and behaviour analysis happen on the robot itself, not in the cloud. We collect the minimum needed to ship your order, support your robot and keep your account working.",
    ],
  },
  {
    title: "What we collect",
    body: [
      "Order details: your name, email, phone number, delivery address and order history. This is what lets us get PawPal to your door and support you afterwards.",
      "Account details: your email, app preferences, dog profiles, play routines and voice clips you choose to record.",
      "Robot data: device health, battery, activity summaries and crash reports. Live video and audio are streamed end-to-end encrypted and are not stored unless you explicitly save a clip.",
    ],
  },
  {
    title: "What we never do",
    body: [
      "We never sell your data. We never use your camera feed or voice recordings to train advertising models. We never share your dog's activity with insurers, landlords or anyone else.",
    ],
  },
  {
    title: "Your choices",
    body: [
      "You can delete voice clips, dog profiles and saved moments from the app at any time. You can close your account by emailing hello@pawpal.dog, and we will remove your personal data within 30 days, except where we must keep order records for tax purposes.",
      "PawPal has a physical camera shutter for moments you would rather not share.",
    ],
  },
  {
    title: "Contact",
    body: [
      "Questions, requests or a very good dog photo: hello@pawpal.dog. Our privacy lead is a real human named Maya, and she replies faster than the robot.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <article>
      <span className="eyebrow">Legal</span>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-[-0.03em] text-forest-950 sm:text-5xl">
        Privacy, in plain language.
      </h1>
      <p className="mt-4 text-[0.9rem] text-forest-900/50">Last updated 1 November 2026</p>

      <div className="mt-10 space-y-9">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-display text-2xl font-semibold text-forest-950">{section.title}</h2>
            <div className="mt-3 space-y-3">
              {section.body.map((paragraph) => (
                <p key={paragraph} className="text-[0.95rem] leading-relaxed text-forest-900/65">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-forest-900/10 bg-cream-50 p-5 text-[0.8rem] leading-relaxed text-forest-900/50">
        PawPal is a demonstration storefront built for a design showcase. Orders
        placed here are stored only to demonstrate the checkout experience, and
        no payment is collected.
      </div>
    </article>
  );
}
