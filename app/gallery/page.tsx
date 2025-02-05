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

  return <div className="grid grid-cols-5 my-1 grid-rows-9 gap-1">
    <img src="./No.clipped-5.jpg" className="size-full object-cover row-span-3" />
    <img src="./No.clipped-12.jpg" className="size-full object-cover col-span-2 row-span-2" />
    <img src="./No.clipped-19.jpg" className="size-full object-cover col-span-2 row-span-5 col-start-4" />
    <img src="./No.clipped-38.jpg" className="size-full object-cover col-span-2 row-span-3 col-start-2 row-start-3" />
    <img src="./No.clipped-59.jpg" className="size-full object-cover row-span-4 row-start-4" />
    <img src="./No.clipped-62.jpg" className="size-full object-cover row-span-2 col-start-1 row-start-8" />
    <img src="./No.clipped-71.jpg" className="size-full object-cover row-span-4 col-start-2 col-span-4 row-start-6" />
  </div>

}