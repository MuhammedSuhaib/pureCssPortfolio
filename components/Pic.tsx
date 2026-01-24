import Image from "next/image";
import React from "react";
function Pic() {
  return (
    <div style={{ marginBlock: "16px", display: "flex", justifyContent: "center", alignItems: "center" }}>
      {/* Profile Picture Section */}
      <Image
        src="./me.jpg"
        alt="Profile Picture"
        width={250}
        height={250}
        style={{borderRadius: "50%",padding: "0.75rem", border: "6px solid #d431dad8"}} />
    </div>
  );
}

export default Pic;
