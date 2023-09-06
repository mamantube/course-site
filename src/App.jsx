import ListNavigation from "./components/ListNavigation"
import ShowPrice from "./components/ShowPrice"
import "./style.css"

const navItems = [
  { label: "Menu 1", url: "#" },
  { label: "Menu 2", url: "#" },
]

const contents = [
  {
    title: "Air Mineral",
    html: <p>Dari mata air pilihan.</p>,
    price: 1000,
  },
  {
    title: "Ciki/Snack",
    html: <b>Snack yang tidak mengenyangkan.</b>,
    price: 2000,
    discountPrice: 1500,
  }
]

// if (discountPrice) {
//   if (discountType === "percentage") {
//     if (discountValue >= 10) {
//       return <p><s>{price}</s>{discountValue * price}</p>
//     } 
//     return <p>hello</p>
//   }
//   return null
// }

function App() {
  return (
    <body>
      <header>
          <h1>Header</h1>
          <nav>
              <ListNavigation items={navItems} />
          </nav>
      </header>

      {contents.map(item => (
        <section key={item.title}>
          <h2>{item.title}</h2>
          {item.html}
          {/* <p>Harga: Rp {item.discountPrice ? (
            <s>{item.price}</s>
          ): item.price} {item.discountPrice && item.discountPrice}</p> */}
          <ShowPrice products={item} />
        </section>
      ))}

      <footer>
          <p>Edspert, copyright. Alamat boleh ditaruh disini apabila diinginkan.</p>
      </footer>
    </body>
  )
}

export default App
