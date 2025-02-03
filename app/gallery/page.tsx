export default async function Gallery() {
  const organizedImages = {
    catalogs: [
      {
        id: 1,
        coverImage: 'https://via.placeholder.com/150',
        title: 'Catalog 1',
        description: 'Description for Catalog 1',
      },
      {
        id: 2,
        coverImage: 'https://via.placeholder.com/150',
        title: 'Catalog 2',
        description: 'Description for Catalog 2',
      },
      {
        id: 3,
        coverImage: 'https://via.placeholder.com/150',
        title: 'Catalog 3',
        description: 'Description for Catalog 3',
      },
    ],
    photoShoots: [
      {
        id: 1,
        coverImage: 'https://via.placeholder.com/150',
        title: 'Photo Shoot 1',
        date: '2023-01-01',
      },
      {
        id: 2,
        coverImage: 'https://via.placeholder.com/150',
        title: 'Photo Shoot 2',
        date: '2023-02-01',
      },
      {
        id: 3,
        coverImage: 'https://via.placeholder.com/150',
        title: 'Photo Shoot 3',
        date: '2023-03-01',
      },
    ],
  };

  return <div>
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Gallery</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Catalogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizedImages.catalogs.map((catalog) => (
            <div key={catalog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={catalog.coverImage} alt={catalog.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-medium">{catalog.title}</h3>
                <p className="text-gray-600">{catalog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Photo Shoots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizedImages.photoShoots.map((shoot) => (
            <div key={shoot.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={shoot.coverImage} alt={shoot.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-medium">{shoot.title}</h3>
                <p className="text-gray-600">{shoot.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  </div>
}