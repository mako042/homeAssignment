import Filter from "./filter";
import SpecialDeal from "./specialDeal"

function Content() {
  return (
    <main className="flex gap-4 px-8 py-4">
      <div className="flex flex-col gap-4">
        <Filter />
        <SpecialDeal />
      </div>
      <section className="flex-1">
        <h1>Welcome to TechStore</h1>
        <p>Discover the latest electronics at great prices.</p>
      </section>
    </main>
  );
}

export default Content;
