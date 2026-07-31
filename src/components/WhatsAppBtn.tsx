"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { WHATSAPP_LINK } from "../libs/company";
import Whatsapp from "../assets/icons/Whatsapp";

export default function WhatsAppBtn() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 2500);
    const hideTimer = setTimeout(() => setShowTooltip(false), 9000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="whatsapp-btn">
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-3 flex items-center gap-2">
          <div className="bg-white rounded-xl shadow-xl px-4 py-3 max-w-60 border border-gray-100 animate-scale-in">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-5 h-5 bg-maak-cement rounded-full flex items-center justify-center text-white hover:bg-maak-dark transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="text-xs font-semibold text-maak-dark leading-snug">
              ¿Necesitas instalar gas natural?
            </p>
            <p className="text-[11px] text-maak-cement mt-0.5">
              Escríbenos y agenda tu visita técnica.
            </p>
          </div>
        </div>
      )}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-2xl hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <Whatsapp />
      </a>
    </div>
  );
}
