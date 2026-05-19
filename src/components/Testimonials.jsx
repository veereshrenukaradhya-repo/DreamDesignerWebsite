// Testimonials.jsx
// 3 realistic Bengaluru customer testimonials — drop-in replacement for Lorem Ipsum section.
// Usage: import Testimonials from '@/components/Testimonials'; then <Testimonials />

const testimonials = [
  {
    name: "Kavitha Reddy",
    location: "Koramangala, Bengaluru",
    service: "Full Home Interior",
    avatar: "KR",
    avatarBg: "#EDE9FE",
    avatarColor: "#5B21B6",
    text: "Dream Design Studio turned our bare 3BHK into a home we're genuinely proud of. The modular kitchen and custom wardrobes are stunning, and everything was delivered on time. The team was patient through every revision and never pushed us beyond our budget.",
  },
  {
    name: "Arjun & Sneha Iyer",
    location: "Whitefield, Bengaluru",
    service: "Kitchen & Living Room",
    avatar: "AI",
    avatarBg: "#D1FAE5",
    avatarColor: "#065F46",
    text: "We wanted a warm, modern look for our new apartment and they nailed it on the first concept itself. The 3D walkthrough before work began gave us complete confidence. Six months in, we still get compliments every time someone visits.",
  },
  {
    name: "Suresh Krishnamurthy",
    location: "HSR Layout, Bengaluru",
    service: "Bedroom & Wardrobe",
    avatar: "SK",
    avatarBg: "#FEF3C7",
    avatarColor: "#92400E",
    text: "I had a tight move-in deadline and was honestly worried. Dream Design Studio finished the bedroom and wardrobe two days ahead of schedule without cutting corners. The smart storage solutions have made daily life noticeably easier. Worth every rupee.",
  },
];

function Stars() {
  return (
    <div style={{ display: "flex", gap: "3px", marginBottom: "14px" }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#C97D2E" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section style={{
      padding: "64px 20px",
      background: "#FAFAF8",
      fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
    }}>
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "44px" }}>
        <p style={{
          fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em",
          textTransform: "uppercase", color: "#C97D2E", marginBottom: "10px",
        }}>
          Client stories
        </p>
        <h2 style={{
          fontSize: "clamp(22px, 3.5vw, 34px)", fontWeight: "700",
          color: "#1A1A1A", margin: "0 auto", maxWidth: "460px", lineHeight: "1.25",
        }}>
          Homes we've transformed in Bengaluru
        </h2>
      </div>

      {/* Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
        gap: "20px",
        maxWidth: "1000px",
        margin: "0 auto",
      }}>
        {testimonials.map((t) => (
          <div key={t.name} style={{
            background: "#fff",
            borderRadius: "16px",
            padding: "26px",
            border: "1px solid #EEE9E2",
            boxShadow: "0 2px 14px rgba(0,0,0,0.04)",
            display: "flex",
            flexDirection: "column",
          }}>
            <Stars />

            <p style={{
              fontSize: "14px", lineHeight: "1.75", color: "#444",
              margin: "0 0 22px 0", flex: 1,
            }}>
              "{t.text}"
            </p>

            <div style={{ height: "1px", background: "#F0ECE6", marginBottom: "18px" }} />

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{
                width: "42px", height: "42px", borderRadius: "50%",
                background: t.avatarBg, color: t.avatarColor,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: "700", fontSize: "13px", flexShrink: 0,
              }}>
                {t.avatar}
              </div>
              <div>
                <p style={{ fontWeight: "600", fontSize: "14px", color: "#1A1A1A", margin: 0 }}>
                  {t.name}
                </p>
                <p style={{ fontSize: "12px", color: "#999", margin: "2px 0 4px" }}>
                  {t.location}
                </p>
                <span style={{
                  fontSize: "11px", fontWeight: "500", color: "#C97D2E",
                  background: "#FEF3E2", padding: "2px 8px", borderRadius: "20px",
                }}>
                  {t.service}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
