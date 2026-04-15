const Card = () => (
<div className="border-2 border-gray-200 rounded-2xl w-64 h-96 bg-white overflow-hidden flex flex-col">
  
  {/* Область для изображения */}
  <div className="flex-1 flex items-center justify-center">
    <img 
      src="/src/assets/los1.jpg" 
      alt="Product"
      className="w-full h-full" 
    />
  </div>

  {/* Нижняя часть карточки (пока пустая) */}
  <div className="h-28 p-4">
    <p className="text-amber-700 font-bold">ЛОСЯШ, цена 50 копеек </p>
  </div>
</div>
)

const Cards = () => (
  <div className="grid grid-cols-4 gap-5">
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
)

export default Cards