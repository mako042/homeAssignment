function Footer() {
  const styles = {
    footer: "fixed left-0 bottom-0 w-full bg-white text-center pt-8 pb-8 pr-8 border-t border-transparent",
    grid: "grid grid-cols-4 gap-10 text-left px-8",
    line: "border-t border-[#686868] my-2.5",
    mainText: "text-[#0A0A0A] text-[18px]",
    secondaryText: "text-[#717182] text-[16px]",
    email: "px-3 py-2 border border-transparent rounded-lg bg-[#F3F3F5]",
    subscribeButton: "px-3 py-2 border border-transparent rounded-lg bg-[#0A0A0A] text-white ml-2",
  };
  
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <h3 className={styles.mainText}>About</h3>
          <p className={styles.secondaryText}>About Us</p>
          <p className={styles.secondaryText}>Careers</p>
          <p className={styles.secondaryText}>Press</p>
        </div>

        <div>
          <h3 className={styles.mainText}>Support</h3>
          <p className={styles.secondaryText}>Contact</p>
          <p className={styles.secondaryText}>FAQ</p>
          <p className={styles.secondaryText}>Shipping</p>
        </div>

        <div>
          <h3 className={styles.mainText}>Legal</h3>
          <p className={styles.secondaryText}>Privacy Policy</p>
          <p className={styles.secondaryText}>Terms of Service</p>
          <p className={styles.secondaryText}>Returns</p>
        </div>

        <div>
          <h3 className={styles.mainText}>Newsletter</h3>
          <p className={styles.secondaryText}>Subscribe for exclusive deals</p>
          <input placeholder="Email" className={styles.email} />
          <button className={styles.subscribeButton}>Subscribe</button>
        </div>
      </div>
      
      <div className={styles.line}></div>
      
      <p className={styles.secondaryText}>© 2026 TechStore. All rights reserved.</p>
    </footer>
  );
}

export default Footer;