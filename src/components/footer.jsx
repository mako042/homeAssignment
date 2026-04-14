function Footer() {
  const styles = {
    footer: {
      position: "fixed",
      left: 0,
      bottom: 0,
      width: "100%",
      backgroundColor: "#ffffff",
      textAlign: "center",
      padding: "32px 32px 32px 0",
      borderTop: "1px solid #00000000",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "40px",
      textAlign: "left",
      padding: "0 32px",
    },
    line: {
      borderTop: "1px solid #686868",
      margin: "10px 0",
    },
    mainText: {
      color: "#0A0A0A",
      fontSize: "18px",
    },
    secondaryText: {
      color: "#717182",
      fontSize: "16px",
    },
    email: {
      padding: "8px 12px 8px 12px",
      border: "1px solid #00000000",
      borderRadius: "10px",
      backgroundColor: "#F3F3F5",
    },
    subscribeButton: {
      padding: "8px 12px 8px 12px",
      border: "1px solid #00000000",
      borderRadius: "10px",
      backgroundColor: "#0A0A0A",
      color: "#FFFFFF",
      marginLeft: "8px",
    },
  };
  
  return (
    <footer className="footer"
      style={styles.footer}
    >
      <div style={styles.grid}>
        <div>
          <h3 style={styles.mainText}>About</h3>
          <p style={styles.secondaryText}>About Us</p>
          <p style={styles.secondaryText}>Careers</p>
          <p style={styles.secondaryText}>Press</p>
        </div>

        <div>
          <h3 style={styles.mainText}>Support</h3>
          <p style={styles.secondaryText}>Contact</p>
          <p style={styles.secondaryText}>FAQ</p>
          <p style={styles.secondaryText}>Shipping</p>
        </div>

        <div>
          <h3 style={styles.mainText}>Legal</h3>
          <p style={styles.secondaryText}>Privacy Policy</p>
          <p style={styles.secondaryText}>Terms of Service</p>
          <p style={styles.secondaryText}>Returns</p>
        </div>

        <div>
          <h3 style={styles.mainText}>Newsletter</h3>
          <p style={styles.secondaryText}>Subscribe for exclusive deals</p>
          <input placeholder="Email" style={styles.email} />
          <button style={styles.subscribeButton}>Subscribe</button>
        </div>
      </div>
      < div style={styles.line}></div>
      <p style={styles.secondaryText}>© 2026 TechStore. All rights reserved.</p>
    </footer>
  );
}

export default Footer;