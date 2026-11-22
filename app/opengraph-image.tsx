import { ImageResponse } from "next/og";

export const alt = "PawPal — They're never really alone";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FBF5E9",
          padding: "56px 64px",
          fontFamily: "Georgia, serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 620,
            height: 620,
            borderRadius: 9999,
            backgroundColor: "#F08A4B",
            opacity: 0.16,
            right: -180,
            top: -220,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: 9999,
            backgroundColor: "#1E5C45",
            opacity: 0.12,
            left: -220,
            bottom: -260,
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                backgroundColor: "#0B2B20",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FBF5E9",
                fontSize: 30,
              }}
            >
              🐾
            </div>
            <div style={{ display: "flex", fontSize: 38, fontWeight: 700, color: "#0B2B20", letterSpacing: -1 }}>
              PawPal
            </div>
          </div>
          <div
            style={{
              display: "flex",
              border: "1px solid rgba(11,43,32,0.15)",
              borderRadius: 9999,
              padding: "10px 20px",
              fontSize: 17,
              color: "#164936",
              fontFamily: "Arial, sans-serif",
              letterSpacing: 2,
            }}
          >
            AI COMPANION FOR DOGS
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column", width: 660 }}>
            <div style={{ display: "flex", fontSize: 92, lineHeight: 0.98, color: "#0B2B20", letterSpacing: -4 }}>
              They&apos;re
            </div>
            <div style={{ display: "flex", fontSize: 92, lineHeight: 0.98, color: "#0B2B20", letterSpacing: -4 }}>
              <span style={{ fontStyle: "italic", color: "#164936", marginRight: 18 }}>never</span> really
            </div>
            <div style={{ display: "flex", fontSize: 92, lineHeight: 1.02, color: "#0B2B20", letterSpacing: -4 }}>
              alone.
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 26,
                fontSize: 24,
                lineHeight: 1.4,
                color: "rgba(11,43,32,0.62)",
                fontFamily: "Arial, sans-serif",
                maxWidth: 560,
              }}
            >
              The intelligent companion that keeps your dog entertained, connected and cared for while you&apos;re away.
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: 40 }}>
            <div style={{ width: 4, height: 34, backgroundColor: "#CFC7B9", display: "flex" }} />
            <div
              style={{
                width: 210,
                height: 280,
                borderRadius: 110,
                background: "linear-gradient(145deg, #FFFFFF 0%, #F3EEE4 60%, #DCD5C7 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid rgba(255,255,255,0.7)",
                boxShadow: "0 40px 80px rgba(11,43,32,0.28)",
              }}
            >
              <div
                style={{
                  width: 160,
                  height: 120,
                  borderRadius: 52,
                  background: "linear-gradient(180deg, #174535 0%, #071F17 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 26,
                }}
              >
                <div style={{ width: 20, height: 38, borderRadius: 9999, backgroundColor: "#F6A96E", display: "flex" }} />
                <div style={{ width: 20, height: 38, borderRadius: 9999, backgroundColor: "#F6A96E", display: "flex" }} />
              </div>
            </div>
            <div
              style={{
                width: 170,
                height: 34,
                borderRadius: 20,
                background: "linear-gradient(180deg, #F1ECE2 0%, #D5CEC0 100%)",
                marginTop: -8,
                display: "flex",
              }}
            />
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <div
            style={{
              display: "flex",
              backgroundColor: "#0B2B20",
              color: "#FBF5E9",
              borderRadius: 9999,
              padding: "16px 30px",
              fontSize: 21,
              fontFamily: "Arial, sans-serif",
              fontWeight: 700,
            }}
          >
            PawPal One · from $499
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              color: "rgba(11,43,32,0.55)",
              fontFamily: "Arial, sans-serif",
              letterSpacing: 1,
            }}
          >
            Free shipping · 30-night trial · 2-year warranty
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
