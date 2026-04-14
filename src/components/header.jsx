function Header() {
  const styles = {
    header: {
      backgroundColor: "#ffffff",
      padding: "20px 32px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    containers: {
      paddingRight: "32px",
      paddingLeft: "32px",
      alignItems: "center",
      display: "flex",
    },
    logo: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#0A0A0A",
    },
    nav: {
      display: "flex",
      gap: "20px",

    },
    end: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "20px",
    },
    endIcon: {
      width: "36px",
      height: "36px",
    },
    navItem: {
      textDecoration: "none",
      color: "#333",
      fontSize: "16px",
    },
  };
  
  return (
    <header style={styles.header}>
      <div style={styles.containers}>
        <nav style={styles.nav}>
          <div style={styles.logo}>TechStore</div>
          <a href="#" style={styles.navItem}>TV</a>
          <a href="#" style={styles.navItem}>Phone</a>
          <a href="#" style={styles.navItem}>Laptop</a>
        </nav>
      </div>
      <nav style={styles.end}>
          <img src="/src/assets/cart.png" alt="Cart" style={styles.endIcon} />
          <img src="/src/assets/user.png" alt="User" style={styles.endIcon} />
      </nav>
    </header>
  );
}

export default Header;  