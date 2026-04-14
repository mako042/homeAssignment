function Content() {
  //tailwindcss styles
  const styles = {
    main: "flex gap-4 items-start px-8 h-full",
    filter: "w-64 flex-shrink-0 border border-black p-4",
    content: "flex-1",
  };

  return (
    <main className={styles.main}>
      <aside className={styles.filter}>
        <h3>Filters</h3>
      </aside>

      <section className={styles.content}>
        <h1>Welcome to TechStore</h1>
        <p>Discover the latest electronics at great prices.</p>
      </section>
    </main>
  );
}

export default Content;
