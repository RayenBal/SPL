"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const service = String(formData.get("service") || "");
    const message = String(formData.get("message") || "");

    if (!name || !email || !message) {
      toast.error("Veuillez remplir les champs requis.");
      return;
    }
    setLoading(true);
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

      await emailjs.send(
        serviceId,
        templateId,
        { name, email, phone, service, message },
        { publicKey }
      );
      toast.success("Message envoyé avec succès.");
      form.reset();
    } catch {
      toast.error("Échec de l’envoi. Réessayez plus tard.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form id="contact-form" onSubmit={onSubmit} className="grid gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input name="name" placeholder="Nom*" className="h-11 px-3 rounded-md border border-black/10 bg-white" />
        <input name="email" placeholder="Email*" type="email" className="h-11 px-3 rounded-md border border-black/10 bg-white" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <input name="phone" placeholder="Téléphone" className="h-11 px-3 rounded-md border border-black/10 bg-white" />
        <select name="service" className="h-11 px-3 rounded-md border border-black/10 bg-white">
          <option value="">Type de service</option>
          <option>Diagnostic électronique</option>
          <option>Entretien moteur / transmission</option>
          <option>Maintenance préventive</option>
          <option>Assistance routière</option>
          <option>Pièces de rechange</option>
        </select>
      </div>
      <textarea name="message" placeholder="Message*" rows={5} className="px-3 py-2 rounded-md border border-black/10 bg-white" />
      <button disabled={loading} className="h-11 rounded-md bg-primary text-white font-medium disabled:opacity-60">
        {loading ? "Envoi..." : "Envoyer"}
      </button>
    </form>
  );
}


