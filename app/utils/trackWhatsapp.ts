/**
 * Click tracking utilities for WhatsApp and Phone Call analytics & instant Email notifications.
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export interface WhatsAppClickData {
  name?: string;
  city?: string;
  whatsappNumber?: string;
  number?: string;
  type?: "WhatsApp" | "Call";
  source?: string;
}

/**
 * Tracks a WhatsApp click event and sends an instant email notification
 */
export function trackWhatsAppClick(data: WhatsAppClickData = {}): void {
  sendTrackingEvent({
    name: data.name || "VIP Model WhatsApp Inquiry",
    city: data.city || "Hyderabad",
    targetNumber: data.whatsappNumber || data.number || "+919004067952",
    actionType: "WhatsApp",
  });
}

/**
 * Tracks a Direct Phone Call click event and sends an instant email notification
 */
export function trackCallClick(data: WhatsAppClickData = {}): void {
  sendTrackingEvent({
    name: data.name || "Direct Phone Call Inquiry",
    city: data.city || "Hyderabad",
    targetNumber: data.number || data.whatsappNumber || "+919004067952",
    actionType: "Call",
  });
}

function sendTrackingEvent({
  name,
  city,
  targetNumber,
  actionType,
}: {
  name: string;
  city: string;
  targetNumber: string;
  actionType: "WhatsApp" | "Call";
}) {
  try {
    const payload = {
      name,
      city,
      actionType,
      targetNumber,
      site: "riyaescortservices",
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
      timestamp: new Date().toISOString(),
    };

    // Google Analytics event if available
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", actionType === "WhatsApp" ? "whatsapp_click" : "call_click", {
        model_name: payload.name,
        model_city: payload.city,
        target_number: payload.targetNumber,
      });
    }

    // Send email notification alert to server via /api/whatsapp-click
    if (typeof window !== "undefined") {
      const blob = new Blob([JSON.stringify(payload)], {
        type: "application/json",
      });

      if (navigator.sendBeacon) {
        navigator.sendBeacon("/api/whatsapp-click", blob);
      } else {
        fetch("/api/whatsapp-click", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          keepalive: true,
        }).catch(() => {});
      }
    }

    console.log(`[Analytics & Email] ${actionType} click tracked:`, payload);
  } catch (error) {
    // Silently fail - tracking should never break the user experience
  }
}

/**
 * Creates a WhatsApp deep link with a pre-filled message.
 */
export function createWhatsAppLink(
  name: string = "VIP Escort",
  city: string = "Hyderabad",
  whatsappNumber: string = "+919004067952"
): string {
  const cleanNumber = whatsappNumber.replace(/[^0-9]/g, "");
  const message = encodeURIComponent(
    `Hi, I am interested in booking ${name} from ${city} on riyaescortservices. Please share availability and live photos.`
  );
  return `https://wa.me/${cleanNumber}?text=${message}`;
}
