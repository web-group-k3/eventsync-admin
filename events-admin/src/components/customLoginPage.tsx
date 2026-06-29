import { useState } from "react";
import { useLogin, useNotify } from "react-admin";

export default function CustomLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const login = useLogin();
  const notify = useNotify();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login({ username, password });
    } catch {
      notify("Identifiants incorrects", { type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050816",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "400px",
          height: "400px",
          background: "rgba(163,255,18,0.05)",
          borderRadius: "50%",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          width: "400px",
          height: "400px",
          background: "rgba(56,189,248,0.05)",
          borderRadius: "50%",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          margin: "0 16px",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "32px",
          padding: "48px",
          backdropFilter: "blur(20px)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #7c3aed, #a855f7, #22d3ee)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: "900",
              color: "white",
              margin: "0 auto 16px",
              boxShadow: "0 0 40px rgba(124,58,237,0.3)",
            }}
          >
            Es
          </div>
          <h1
            style={{
              color: "white",
              fontSize: "28px",
              fontWeight: "900",
              margin: "0 0 8px",
              letterSpacing: "-0.5px",
            }}
          >
            EventSync
          </h1>
          <p style={{ color: "#6b7280", fontSize: "14px", margin: 0 }}>
            Admin Dashboard
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                color: "#9ca3af",
                fontSize: "13px",
                fontWeight: "600",
                marginBottom: "8px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="enter your name"
              required
              style={{
                width: "100%",
                padding: "14px 16px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
                color: "white",
                fontSize: "15px",
                outline: "none",
                boxSizing: "border-box",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) =>
                (e.target.style.borderColor = "rgba(163,255,18,0.5)")
              }
              onBlur={(e) =>
                (e.target.style.borderColor = "rgba(255,255,255,0.1)")
              }
            />
          </div>

          <div style={{ marginBottom: "32px" }}>
            <label
              style={{
                display: "block",
                color: "#9ca3af",
                fontSize: "13px",
                fontWeight: "600",
                marginBottom: "8px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="enter your password"
              required
              style={{
                width: "100%",
                padding: "14px 16px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
                color: "white",
                fontSize: "15px",
                outline: "none",
                boxSizing: "border-box",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) =>
                (e.target.style.borderColor = "rgba(163,255,18,0.5)")
              }
              onBlur={(e) =>
                (e.target.style.borderColor = "rgba(255,255,255,0.1)")
              }
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "16px",
              background: loading ? "rgba(163,255,18,0.5)" : "#a3ff12",
              border: "none",
              borderRadius: "16px",
              color: "#000",
              fontSize: "15px",
              fontWeight: "800",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "all 0.2s",
              letterSpacing: "0.02em",
            }}
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>
      </div>
    </div>
  );
}
