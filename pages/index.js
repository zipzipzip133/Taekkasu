import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/api/backend")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(() => setData({ error: "Failed to load" }));
  }, []);

  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      background: "#f4f4f9",
      minHeight: "100vh",
      margin: 0,
      padding: "20px"
    }}>
      <h1 style={{ textAlign: "center", color: "#444" }}>Status Website</h1>
      
      <div style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "30px",
        gap: "20px"
      }}>
        {/* ONLINE */}
        <div style={{
          flex: 1,
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 3px 8px rgba(0,0,0,0.1)"
        }}>
          <h2 style={{ textAlign: "center" }}>🟢 Online</h2>
          {Object.entries(data).map(([key, value]) =>
            value === "on" && (
              <span key={key} style={{
                display: "block",
                padding: "10px",
                margin: "6px 0",
                borderRadius: "8px",
                fontWeight: "bold",
                background: "#d4f8d4",
                color: "#006600",
                border: "1px solid #66cc66",
                textTransform: "capitalize"
              }}>
                {key} ONLINE
              </span>
            )
          )}
        </div>

        {/* OFFLINE */}
        <div style={{
          flex: 1,
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 3px 8px rgba(0,0,0,0.1)"
        }}>
          <h2 style={{ textAlign: "center" }}>🔴 Offline</h2>
          {Object.entries(data).map(([key, value]) =>
            value === "off" && (
              <span key={key} style={{
                display: "block",
                padding: "10px",
                margin: "6px 0",
                borderRadius: "8px",
                fontWeight: "bold",
                background: "#f8d4d4",
                color: "#990000",
                border: "1px solid #cc6666",
                textTransform: "capitalize"
              }}>
                {key} OFFLINE
              </span>
            )
          )}
        </div>
      </div>

      {/* Footer */}
      <footer style={{ marginTop: "40px", textAlign: "center" }}>
        <a href="https://whatsapp.com/channel/0029VbA33uH3rZZhcR2IUb1R" target="_blank">WhatsApp Channel</a> |{" "}
        <a href="https://youtube.com/@skibidixxxreal" target="_blank">YouTube</a> |{" "}
        <a href="https://t.me/chatskibidixxxx" target="_blank">Telegram</a>
      </footer>
    </div>
  );
        }
