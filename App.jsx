import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Carousel from './components/Carousel';
import Card from './components/Card';
import { CAROUSEL_CARDS } from './constants/navigation';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white min-h-screen">
      <Navbar />
      <main>
        <Banner />
        <Carousel>
          {CAROUSEL_CARDS.map((card) => (
            <Card 
              key={card.title} 
              title={card.title} 
              description={card.description} 
              color={card.color} 
            />
          ))}
        </Carousel>
      </main>
    </div>
  );
}

export default App;