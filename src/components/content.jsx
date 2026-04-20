import Filter from "./filter";
import SpecialDeal from "./specialDeal"
import Cards from "./cards"
import { useState, useEffect } from "react";

function Content() {
  const [productCount, setProductCount] = useState(0);

  // Подписываемся на изменение количества товаров в Cards
  useEffect(() => {
    const updateCount = () => {
      // Можно получить количество через событие или глобальное состояние,
      // но самый простой и надёжный способ — передать callback в Cards
      // Для этого немного изменим Cards (см. ниже)
    };

    // Пока оставляем заглушку — обновим после изменения Cards
  }, []);
  return (
    <main className="flex gap-4 px-8 py-4">
      <div className="flex flex-col gap-4">
        <Filter />
        <SpecialDeal />
      </div>
      <section className="flex-1">
        <div className="flex justify-between items-center mb-4 mx-6">
          <p>{productCount} products</p>
          <div className="flex items-center gap-3">
            <p className="text-black font-medium">Sort by:</p>
            <select
          className="bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 text-gray-700 w-44"
        >
          <option value=""></option>
        </select>
          </div>
        </div>
        <Cards setProductCount={setProductCount}/>
      </section>
    </main>
  );
}

export default Content;
