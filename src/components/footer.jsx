function Footer() {
  const styles = {
    footer: "bg-white border-t border-gray-200 mt-auto px-20",   
    grid: "grid grid-cols-4 gap-10 text-left px-8 py-8",
    mainText: "text-[#0A0A0A] text-[18px] font-semibold mb-3",
    secondaryText: "text-[#717182] text-[15px] hover:text-gray-900 cursor-pointer",
    email: "px-4 py-3 border border-gray-300 rounded-xl bg-white text-sm",
    subscribeButton: "px-6 py-3 bg-black text-white rounded-xl text-sm font-medium ml-2 hover:bg-gray-900",
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
          
          <div className="mt-4 flex">
            <input 
              placeholder="Email" 
              className={styles.email} 
            />
            <button className={styles.subscribeButton}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      <div className="text-center pb-6 text-[#717182] text-sm">
        © 2026 TechStore. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;