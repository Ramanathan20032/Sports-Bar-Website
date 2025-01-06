const data = {
  spirits: {
    section1: {
      title: "BOURBON - SCOTCH - WHISKEY",
      description: "Ask about our Premium Bourbon selection.",
      items: [
        { name: "Angel's Envy", price: "$45" },
        { name: "Balvenie", price: "$80" },
        { name: "Basil Hayden", price: "$60" },
        { name: "Buffalo Trace", price: "$40" },
        { name: "Knob Creek", price: "$50" },
      ],
    },
    section2: {
      title: "TEQUILA",
      items: [
        { name: "1800", price: "$35" },
        { name: "Casamigos", price: "$60" },
        { name: "Clase Azul", price: "$120" },
        { name: "Don Julio", price: "$75" },
        { name: "Patron", price: "$70" },
      ],
    },
  },
  beer: {
    section1: {
      title: "BEERS",
      items: [
        { name: "IPA", price: "$5" },
        { name: "Lager", price: "$4" },
        { name: "Stout", price: "$6" },
        { name: "Pilsner", price: "$5" },
        { name: "Pale Ale", price: "$5" },
      ],
    },
    section2: {
      title: "CRAFT BEERS",
      items: [
        { name: "Local Ale", price: "$6" },
        { name: "Seasonal Brew", price: "$7" },
        { name: "Hefeweizen", price: "$6" },
        { name: "Kolsch", price: "$5" },
        { name: "Barleywine", price: "$8" },
      ],
    },
  },
  cocktails: {
    section1: {
      title: "CLASSIC COCKTAILS",
      items: [
        { name: "Margarita", price: "$8" },
        { name: "Martini", price: "$9" },
        { name: "Old Fashioned", price: "$10" },
        { name: "Mojito", price: "$7" },
        { name: "Whiskey Sour", price: "$8" },
      ],
    },
    section2: {
      title: "SIGNATURE COCKTAILS",
      items: [
        { name: "Espresso Martini", price: "$12" },
        { name: "Paloma", price: "$9" },
        { name: "Mai Tai", price: "$11" },
        { name: "Mint Julep", price: "$10" },
        { name: "Pina Colada", price: "$8" },
      ],
    },
  },
  wine: {
    section1: {
      title: "RED WINES",
      items: [
        { name: "Merlot", price: "$25" },
        { name: "Cabernet Sauvignon", price: "$30" },
        { name: "Pinot Noir", price: "$28" },
        { name: "Syrah", price: "$27" },
        { name: "Malbec", price: "$22" },
      ],
    },
    section2: {
      title: "WHITE WINES",
      items: [
        { name: "Chardonnay", price: "$20" },
        { name: "Sauvignon Blanc", price: "$18" },
        { name: "Pinot Grigio", price: "$19" },
        { name: "Riesling", price: "$17" },
        { name: "Moscato", price: "$16" },
      ],
    },
  },
  beverages: {
    section1: {
      title: "NON-ALCOHOLIC BEVERAGES",
      items: [
        { name: "Coca-Cola", price: "$3" },
        { name: "Pepsi", price: "$3" },
        { name: "Sprite", price: "$3" },
        { name: "Fanta", price: "$3" },
        { name: "Lemonade", price: "$4" },
      ],
    },
    section2: {
      title: "HOT BEVERAGES",
      items: [
        { name: "Coffee", price: "$2" },
        { name: "Espresso", price: "$3" },
        { name: "Latte", price: "$4" },
        { name: "Cappuccino", price: "$4" },
        { name: "Hot Chocolate", price: "$3" },
      ],
    },
  },
};

function loadContent(category) {
  const categoryData = data[category];
  const section1 = document.getElementById("section1");
  const section2 = document.getElementById("section2");

  if (categoryData) {
    section1.innerHTML = `
        <h2>${categoryData.section1.title}</h2>
        <p>${categoryData.section1.description || ""}</p>
        <ul>
          ${categoryData.section1.items
            .map(
              (item) => `
            <li style="display: flex; justify-content: space-between; margin-bottom: 10px;">
              <span>${item.name}</span>
              <span style="font-weight: bold; color: #441752;">${item.price}</span>
            </li>
          `
            )
            .join("")}
        </ul>
      `;

    section2.innerHTML = `
        <h2>${categoryData.section2.title}</h2>
        <ul>
          ${categoryData.section2.items
            .map(
              (item) => `
            <li style="display: flex; justify-content: space-between; margin-bottom: 10px;">
              <span>${item.name}</span>
              <span style="font-weight: bold; color: #441752;">${item.price}</span>
            </li>
          `
            )
            .join("")}
        </ul>
      `;
  }
}

// Load default content
loadContent("spirits");
